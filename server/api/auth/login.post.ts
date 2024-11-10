import { ValidationUtils } from '@nimiq/utils'
import { z } from 'zod'
import { RESTRICTED_TERRITORY_ERROR } from '../../config'
import { forbiddenError, internalServerError } from '../../errors'
import { type User, userDb } from '../../kv'

const requestSchema = z.object({
  address: z.string().refine(value => ValidationUtils.isValidAddress(value)).transform(value => ValidationUtils.normalizeAddress(value)),
})

const OFAC_SANCTIONED_COUNTRIES = [
  'CU', // Cuba
  'IR', // Iran
  'KP', // North Korea
  'SY', // Syria
]

export type LoginRequest = z.infer<typeof requestSchema>

export default defineEventHandler(async (event): Promise<User> => {
  if (!import.meta.dev) {
    // Exclude users from sanctioned countries and US
    const ipCountry = event.node.req.headers['cf-ipcountry']
    if (typeof ipCountry !== 'string' || ipCountry === 'XX' || ipCountry === 'T1')
      throw internalServerError(`Restricted territory check failed: invalid IP country: ${ipCountry}`)
    if (OFAC_SANCTIONED_COUNTRIES.includes(ipCountry) || ipCountry === 'US') {
      throw forbiddenError(RESTRICTED_TERRITORY_ERROR)
    }
    console.log('AUTH: OFAC check passed:', ipCountry) // eslint-disable-line no-console
  }
  else {
    console.log('AUTH: Skipping OFAC check in dev mode') // eslint-disable-line no-console
  }

  const { address } = await readValidatedBody(event, requestSchema.parse)

  const userId = new Uint8Array(
    await crypto.subtle.digest('SHA-256', new TextEncoder().encode(address)),
  ).reduce((t, x) => t + x.toString(16).padStart(2, '0'), '')

  let user = await userDb.get(userId)
  if (!user) {
    // Register user
    user = {
      id: userId,
      address,
      stake: 0,
      delegation: null,
      hasClaimed: false,
      basePoints: 0,
      totalPoints: 0,
      galxeUser: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    await userDb.set(userId, user)
  }

  await setUserSession(event, { user: {
    id: userId,
  } }, {
    maxAge: 60 * 60 * 24 * 30, // 1 month
  })

  return user
})

declare module '#auth-utils' {
  interface User {
    id: string
  }

  // interface UserSession {
  // }
}
