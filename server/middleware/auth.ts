import { forbiddenError, notAcceptableError } from '../errors'
import { type User, userDb } from '../kv'

const OPEN_URLS = [
  '/api/healthcheck',
  '/api/auth/login',
  '/api/auth/logout',
]

export default defineEventHandler(async (event) => {
  if (!event.node.req.url)
    throw notAcceptableError('Invalid URL')

  // Only authenticate /api routes, but still allow certain endpoints
  if (!event.node.req.url.startsWith('/api') || OPEN_URLS.includes(event.node.req.url))
    return

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
