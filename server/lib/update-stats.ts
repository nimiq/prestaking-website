import type { User } from '../kv'
import { BASE_POINT_LIMIT, EARLY_BIRD_MULTIPLIERS, GALXE_MULTIPLIERS, GALXE_SPACE_ID, NIM_PER_POINT, UNDERDOG_MULTIPLIER } from '../config'
import { galxeLeaderboardDb, userDb } from '../kv'

interface Staker {
  address: string
  delegation: string
  events: {
    date: string
    value: number
    validatorStakeRatio: number
    isUnderdogPool: boolean | null
  }[]
}

const prestakingCutoff = new Date('2024-11-11T00:00:00Z')

export async function updateStats(user: User, metadata?: Record<string, any>): Promise<{
  stake: number
  basePoints: number
  earlyBirdPoints: number
  underdogPoints: number
  galxePoints: number

  earlyBirdMultipliers: number[]
  underdogMultiplier: number
  galxeMultiplier: number
  galxePercentile: number

  delegation: string
  hasClaimed: boolean
  totalPoints: number
}> {
  if (user.basePoints !== undefined && user.stats && 'earlyBirdPoints' in user.stats) {
    return {
      stake: user.stake,
      basePoints: user.basePoints,
      earlyBirdPoints: user.stats.earlyBirdPoints,
      underdogPoints: user.stats.underdogPoints,
      galxePoints: user.stats.galxePoints,

      earlyBirdMultipliers: user.stats.earlyBirdMultipliers,
      underdogMultiplier: user.stats.underdogMultiplier,
      galxeMultiplier: user.stats.galxeMultiplier,
      galxePercentile: user.stats.galxePercentile,

      delegation: user.delegation!,
      hasClaimed: user.hasClaimed,
      totalPoints: user.totalPoints,
    }
  }

  // Fetch staking events from block explorer
  const staker = await $fetch<Staker>(`https://v2.nimiqwatch.com/api/v2/prestaking/events/${user.address}`)

  let basePoints = 0
  let stake = 0

  let earlyBirdPoints = 0
  const earlyBirdMultipliers = new Set<number>()
  let underdogPoints = 0
  let underdogMultiplier = 0
  let galxePoints = 0
  let galxeMultiplier = 0
  let galxePercentile = 1

  // Calculate early-bird and underdog points
  for (const event of staker.events) {
    const eventDate = new Date(event.date)
    if (eventDate >= prestakingCutoff) {
      continue
    }

    // Add up the total stake
    stake += event.value

    // Calculate points earned for this transaction, capping at the base point limit
    const theoreticalPoints = Math.floor(event.value / 1e5 / NIM_PER_POINT)
    const points = Math.min(BASE_POINT_LIMIT - basePoints, theoreticalPoints)

    // Add points to the user's base points (since we capped them already, this cannot go over the limit)
    basePoints += points

    // Calculate early-bird multiplier for this event
    const earlyBirdMultiplier = EARLY_BIRD_MULTIPLIERS.find((cfg) => {
      return eventDate >= cfg.start && eventDate < cfg.end
    })?.multiplier || 0
    earlyBirdMultipliers.add(earlyBirdMultiplier)
    earlyBirdPoints += points * earlyBirdMultiplier

    // Calculate underdog multiplier for this event
    if (event.validatorStakeRatio < UNDERDOG_MULTIPLIER.maxStakeRatio || event.isUnderdogPool) {
      underdogMultiplier = UNDERDOG_MULTIPLIER.multiplier
      underdogPoints += points * underdogMultiplier
    }
  }

  // Calculate Galxe points
  if (user.galxeUser?.EVMAddress) {
    try {
      const galxeLeaderboard = await galxeLeaderboardDb.get(`${GALXE_SPACE_ID}`)
      if (!galxeLeaderboard) {
        throw new Error('Galxe leaderboard not available from database')
      }

      // Fetch Galxe rank from the Galxe GraphQL API
      const { data } = await $fetch<{
        data: {
          space: {
            addressLoyaltyPoints: {
              points: number
              rank: number
              address: {
                id: string
              }
            }
            loyaltyPointsRanks: {
              totalCount: number
            }
          }
        }
      }>('https://graphigo.prd.galaxy.eco/query', {
        method: 'POST',
        body: JSON.stringify({
          query: `{
            space(id: ${GALXE_SPACE_ID}) {
              addressLoyaltyPoints(address: "${user.galxeUser.EVMAddress}") {
                points
                rank
                address {
                  id
                }
              }
              loyaltyPointsRanks {
                totalCount
              }
            }
          }`,
        }),
      })

      const { addressLoyaltyPoints, loyaltyPointsRanks } = data.space

      const apiTotalCount = loyaltyPointsRanks.totalCount
      if (apiTotalCount) {
        await galxeLeaderboardDb.set(`${GALXE_SPACE_ID}`, {
          totalCount: apiTotalCount,
          updatedAt: new Date().toISOString(),
        })
      }
      const totalCount = apiTotalCount || galxeLeaderboard.totalCount

      const { address, points, rank } = addressLoyaltyPoints

      if (user.galxeUser.GalxeID !== address.id) {
        throw new Error(`Galxe ID mismatch: have ${user.galxeUser.GalxeID}, got ${address.id}`)
      }

      galxePercentile = points ? (rank - 1) / (totalCount - 1) : 1

      galxeMultiplier = GALXE_MULTIPLIERS.find((cfg) => {
        return galxePercentile > cfg.from && galxePercentile <= cfg.to
      })?.multiplier || 0
      galxePoints = basePoints * galxeMultiplier
    }
    catch (e) {
      console.error('Failed to fetch Galxe points:', e)
    }
  }

  user.delegation = staker.delegation
  user.stake = stake
  user.basePoints = basePoints
  user.totalPoints = basePoints + earlyBirdPoints + underdogPoints + galxePoints
  user.stats = {
    earlyBirdMultipliers: Array.from(earlyBirdMultipliers),
    earlyBirdPoints,
    underdogMultiplier,
    underdogPoints,
    galxeMultiplier,
    galxePercentile,
    galxePoints,
  }
  user.updatedAt = new Date().toISOString()

  await userDb.set(user.id, user, { metadata })

  return {
    stake,
    basePoints,
    earlyBirdPoints,
    underdogPoints,
    galxePoints,

    earlyBirdMultipliers: user.stats.earlyBirdMultipliers,
    underdogMultiplier,
    galxeMultiplier,
    galxePercentile,

    delegation: user.delegation,
    hasClaimed: user.hasClaimed,
    totalPoints: user.totalPoints,
  }
}
