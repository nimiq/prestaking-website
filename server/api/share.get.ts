// @ts-expect-error No types for @nimiq/identicons
import Identicons from '@nimiq/identicons'
import { notAcceptableError, notFoundError } from '../errors'
import { userDb } from '../kv'

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

  const identicon: string = await Identicons.default.svg(user.address)

  return {
    stake: user.stake,
    totalPoints: user.totalPoints,
    identicon,
    // earlyBirdMultipliers: user.stats.earlyBirdMultipliers,
    // underdogMultiplier: user.stats.underdogMultiplier,
    // galxeMultiplier: user.stats.galxeMultiplier,
  }
})
