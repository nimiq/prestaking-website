// @ts-expect-error No types for @nimiq/identicons
import Identicons from '@nimiq/identicons'
import { notAcceptableError, notFoundError } from '../errors'
import { userDb } from '../kv'
import { updateStats } from '../lib/update-stats'

export default defineEventHandler(async (event) => {
  const { userId } = getQuery(event)

  if (typeof userId !== 'string') {
    throw notAcceptableError('Invalid userId')
  }

  const user = await userDb.get(userId)
  if (!user) {
    throw notFoundError('User not found')
  }

  if (user.stake < 10_000 * 1e5) {
    throw notAcceptableError('Cannot share below 10K NIM pre-stake')
  }

  const identicon: string = await Identicons.svg(user.address)

  if (!user.stats) {
    const res = await updateStats(user)
    user.stats = {
      earlyBirdMultipliers: res.earlyBirdMultipliers,
      earlyBirdPoints: res.earlyBirdPoints,
      underdogMultiplier: res.underdogMultiplier,
      underdogPoints: res.underdogPoints,
      galxeMultiplier: res.galxeMultiplier,
      galxePercentile: res.galxePercentile,
      galxePoints: res.galxePoints,
    }
  }

  return {
    stake: user.stake,
    totalPoints: user.totalPoints,
    identicon,
    stats: {
      earlyBirdMultipliers: user.stats.earlyBirdMultipliers,
      underdogMultiplier: user.stats.underdogMultiplier,
      galxeMultiplier: user.stats.galxeMultiplier,
    },
  }
})
