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

export async function updateStats(user: User) {
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
    // Add up the total stake
    stake += event.value

    // Calculate points earned for this transaction, capping at the base point limit
    const theoreticalPoints = Math.floor(event.value / 1e5 / NIM_PER_POINT)
    const points = Math.min(BASE_POINT_LIMIT - basePoints, theoreticalPoints)

    // Add points to the user's base points (since we capped them already, this cannot go over the limit)
    basePoints += points

    // Calculate early-bird multiplier for this event
    const earlyBirdMultiplier = EARLY_BIRD_MULTIPLIERS.find((cfg) => {
      return new Date(event.date) >= cfg.start && new Date(event.date) < cfg.end
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
          updatedAt: new Date().toJSON(),
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
  user.totalPoints = basePoints + earlyBirdPoints + underdogPoints + galxePoints
  user.stats = {
    earlyBirdMultipliers: Array.from(earlyBirdMultipliers),
    underdogMultiplier,
    galxeMultiplier,
  }
  user.updatedAt = new Date().toJSON()

  await userDb.set(user.id, user)

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
