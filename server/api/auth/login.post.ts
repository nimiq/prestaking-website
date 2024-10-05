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

  const { address } = requestSchema.parse(await readBody(event))

  let user = await userDb.get(address)
  if (!user) {
    // Register user
    user = {
      address,
      stake: 0,
      delegation: null,
      hasClaimed: false,
      totalPoints: 0,
    }
    await userDb.set(address, user)
  }

  await setUserSession(event, { user: {
    address: user.address,
  } })

  return user
})

declare module '#auth-utils' {
  interface User {
    address: string
  }

  // interface UserSession {
  // }
}
