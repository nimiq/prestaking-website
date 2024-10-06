import { notAcceptableError } from '../../errors'
import { oauthChallengeDb, userDb } from '../../kv'

export default defineEventHandler(async (event) => {
  const user = event.context.user

  const { code, state } = getQuery(event)
  if (typeof code !== 'string' || typeof state !== 'string') {
    throw notAcceptableError('Invalid query parameters: not strings')
  }

  const challenge = await oauthChallengeDb.get(state)
  if (!challenge) {
    throw notAcceptableError('Invalid challenge')
  }

  if (challenge.userId !== user.id) {
    throw notAcceptableError('Invalid challenge for user')
  }

  await oauthChallengeDb.remove(state)

  const { galxeClientId, galxeClientSecret } = useRuntimeConfig()

  const body = new FormData()
  body.append('client_id', galxeClientId)
  body.append('client_secret', galxeClientSecret)
  body.append('code', code)
  body.append('grant_type', 'authorization_code')

  const tokens = await $fetch<{
    access_token: string
    expires_in: number
    refresh_token: string
    scope: 'GalxeID'
    token_type: 'Bearer'
  }>('https://api.galxe.com/oauth/auth/2/token', {
    method: 'POST',
    body,
  }).catch((e: Error) => e)

  if (tokens instanceof Error) {
    throw notAcceptableError(`Failed to exchange code for tokens: ${tokens.message}`)
  }

  const galxeUser = await $fetch<{
    GalxeUserID: string
  }>('https://api.galxe.com/oauth/api/2/user?scope=GalxeID', {
    headers: {
      Authorization: `${tokens.token_type} ${tokens.access_token}`,
    },
  }).catch((e: Error) => e)

  if (galxeUser instanceof Error) {
    throw notAcceptableError(`Failed to fetch Galxe user: ${galxeUser.message}`)
  }

  console.log({ galxeUser }) // eslint-disable-line no-console
  user.galxeId = galxeUser.GalxeUserID

  await userDb.set(user.id, user)

  return sendRedirect(event, '/pre-staking')
})
