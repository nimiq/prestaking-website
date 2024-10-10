import { oauthChallengeDb } from '../../kv'

export default defineEventHandler(async (event) => {
  const user = event.context.user

  const challenge = createRandomString(32)
  await oauthChallengeDb.set(challenge, { userId: user.id }, { ttl: 60 * 60 }) // Delete after 1 hour

  const { galxeClientId } = useRuntimeConfig()
  const redirectUrl = [
    event.node.req.headers.host!.startsWith('localhost') ? 'http://' : 'https://',
    event.node.req.headers.host!,
    '/api/galxe/callback',
  ].join('')

  return sendRedirect(event, `https://app.galxe.com/oauth?client_id=${galxeClientId}&scope=GalxeID%20EVMAddress&redirect_uri=${redirectUrl}&state=${challenge}`, 302) // 302 = Found (moved temporarily)
})

function createRandomString(length: number) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}
