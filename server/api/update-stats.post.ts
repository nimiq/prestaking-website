import { BASE_POINT_LIMIT, EARLY_BIRD_MULTIPLIERS, NIM_PER_POINT, UNDERDOG_MULTIPLIER } from '../config'
import { userDb } from '../kv'

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

export default defineEventHandler(async (event) => {
  const user = event.context.user

  // Fetch staking events from block explorer
  const staker = await $fetch<Staker>(`https://v2.nimiqwatch.com/api/v2/prestaking/events/${user.address}`)

  let basePoints = 0
  let stake = 0

  let earlyBirdPoints = 0
  const earlyBirdMultipliers = new Set<number>()
  let underdogPoints = 0
  let underdogMultiplier = 0
  const galxePoints = 0
  const galxeMultiplier = 0

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
    earlyBirdPoints += points * earlyBirdMultiplier
    earlyBirdMultipliers.add(earlyBirdMultiplier)

    // Calculate underdog multiplier for this event
    if (event.validatorStakeRatio < UNDERDOG_MULTIPLIER.maxStakeRatio || event.isUnderdogPool) {
      underdogMultiplier = UNDERDOG_MULTIPLIER.multiplier
      underdogPoints += points * underdogMultiplier
    }

    // TODO: Get Galxe stats
  }

  user.delegation = staker.delegation
  user.stake = stake
  user.totalPoints = basePoints + earlyBirdPoints + underdogPoints + galxePoints
  user.updatedAt = new Date().toJSON()

  await userDb.set(user.id, user)

  return {
    stake,
    basePoints,
    earlyBirdPoints,
    underdogPoints,
    galxePoints,

    earlyBirdMultipliers: Array.from(earlyBirdMultipliers),
    underdogMultiplier,
    galxeMultiplier,

    delegation: user.delegation,
    hasClaimed: user.hasClaimed,
    totalPoints: user.totalPoints,
  }
})
