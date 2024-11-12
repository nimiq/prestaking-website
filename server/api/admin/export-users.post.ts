import type { KVNamespace } from '@cloudflare/workers-types'
import type { User } from '../../kv'
import { z } from 'zod'
import { forbiddenError, internalServerError } from '../../errors'

const requestSchema = z.object({
  password: z.string(),
  cursor: z.string().optional(),
})

export default defineEventHandler(async (event) => {
  let { password, cursor } = await readValidatedBody(event, requestSchema.parse)

  if (!useRuntimeConfig().galxeUpdateLeaderboardPassword) {
    throw internalServerError('Leaderboard update password is not set')
  }

  if (password !== useRuntimeConfig().galxeUpdateLeaderboardPassword) {
    throw forbiddenError('Wrong password')
  }

  // @ts-expect-error __env__ and globalThis.KV are not defined
  // eslint-disable-next-line node/prefer-global/process
  const kv: KVNamespace = process.env.KV || globalThis.__env__?.KV || globalThis.KV

  const users: { address: string, stake: number, points: number }[] = []
  let listComplete = false
  const start = Date.now()

  while (users.length < 100) {
    const list = await kv.list<{
      finalized?: string
      claimed?: boolean
    }>({
      prefix: 'user:',
      limit: 100,
      cursor,
    })

    for (const key of list.keys) {
      if (!key.metadata?.finalized || key.metadata?.claimed === false)
        continue

      const user = await kv.get<User>(key.name, 'json')
      if (!user) {
        continue
      }

      users.push({
        address: user.address,
        stake: user.stake,
        points: user.totalPoints,
      })
    }

    if (list.list_complete) {
      listComplete = true
      break
    }

    cursor = list.cursor
  }

  return {
    users: users.map(({ address, stake, points }) => `${address}; ${stake}; ${points}`),
    listComplete,
    duration: `${(Date.now() - start) / 1000} seconds`,
    cursor,
  }
})
