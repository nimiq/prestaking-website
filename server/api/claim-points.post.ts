import { userDb } from '../kv'

export default defineEventHandler(async (event) => {
  const user = event.context.user

  user.hasClaimed = true

  await userDb.set(user.address, user)

  return {
    hasClaimed: user.hasClaimed,
  }
})
