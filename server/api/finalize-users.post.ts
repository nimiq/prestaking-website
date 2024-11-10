import type { KVNamespace } from '@cloudflare/workers-types'
import { z } from 'zod'
import { forbiddenError, internalServerError } from '../errors'

const requestSchema = z.object({
  password: z.string(),
})

export default defineEventHandler(async (event) => {
  const { password } = await readValidatedBody(event, requestSchema.parse)

  if (!useRuntimeConfig().galxeUpdateLeaderboardPassword) {
    throw internalServerError('Leaderboard update password is not set')
  }

  if (password !== useRuntimeConfig().galxeUpdateLeaderboardPassword) {
    throw forbiddenError('Wrong password')
  }

  // @ts-expect-error __env__ and globalThis.KV are not defined
  // eslint-disable-next-line node/prefer-global/process
  const kv: KVNamespace = process.env.KV || globalThis.__env__?.KV || globalThis.KV

  const keys = await kv.list({
    prefix: 'user:',
    // limit: 1000,
    // cursor: '',
  })

  return {
    count: keys.keys.length,
    keys,
  }
})
