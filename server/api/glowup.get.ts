import { ValidationUtils } from '@nimiq/utils'
import { notAcceptableError, notFoundError } from '../errors'
import { userDb } from '../kv'

export default defineEventHandler(async (event) => {
  let { address } = getQuery(event)

  if (typeof address !== 'string') {
    throw notAcceptableError('Invalid address')
  }

  address = ValidationUtils.normalizeAddress(address)

  const userId = new Uint8Array(
    await crypto.subtle.digest('SHA-256', new TextEncoder().encode(address)),
  ).reduce((t, x) => t + x.toString(16).padStart(2, '0'), '')

  const user = await userDb.get(userId)
  if (!user) {
    throw notFoundError('User not found')
  }

  if (!user.hasClaimed) {
    throw notAcceptableError('User has not claimed points')
  }

  return {
    stake: user.stake,
    totalPoints: user.totalPoints,
  }
})
