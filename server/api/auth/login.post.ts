import { ValidationUtils } from '@nimiq/utils'
import { z } from 'zod'
import { type User, userDb } from '../../kv'

const requestSchema = z.object({
  address: z.string().refine(value => ValidationUtils.isValidAddress(value)).transform(value => ValidationUtils.normalizeAddress(value)),
})

export type LoginRequest = z.infer<typeof requestSchema>

export default defineEventHandler(async (event): Promise<User> => {
  // TODO: Exclude users from sanctioned countries and US

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
