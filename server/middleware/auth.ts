import { forbiddenError, notAcceptableError } from '../errors'
import { type User, userDb } from '../kv'

const OPEN_URLS = [
  '/api/healthcheck',
  '/api/auth/login',
  '/api/auth/logout',
]

const OPEN_PREFIXES = [
  '/api/share?',
  '/api/_hub/',
]

export default defineEventHandler(async (event) => {
  const url = event.node.req.url

  if (!url)
    throw notAcceptableError('Invalid URL')

  // Only authenticate /api routes
  if (!url.startsWith('/api'))
    return

  // Allow certain endpoints
  if (OPEN_URLS.includes(url))
    return

  // Allow certain prefixes
  if (OPEN_PREFIXES.some(prefix => url.startsWith(prefix)))
    return

  // Require a valid user session (cookie)
  const { user } = await requireUserSession(event)
  const userObj = await userDb.get(user.id)
  if (!userObj)
    throw forbiddenError('User does not exist')

  event.context.user = userObj
})

declare module 'h3' {
  interface H3EventContext {
    user: User
  }
}
