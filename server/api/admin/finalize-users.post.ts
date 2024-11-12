import type { KVNamespace, KVNamespaceListKey } from '@cloudflare/workers-types'
import { z } from 'zod'
import { forbiddenError, internalServerError } from '../../errors'
import { type User, userDb } from '../../kv'
import { updateStats } from '../../lib/update-stats'

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

  const updatedIds: KVNamespaceListKey<any>[] = []
  let listComplete = false
  let cursor: string | undefined
  const start = Date.now()

  while (updatedIds.length < 100) {
    const list = await kv.list<{
      finalized?: string
      claimed?: boolean
    }>({
      prefix: 'user:',
      limit: 100,
      cursor,
    })

    for (const key of list.keys) {
      // `finalized` is a ISO date string
      if (key.metadata?.finalized)
        continue

      const user = await kv.get<User>(key.name, 'json')
      if (!user) {
        continue
      }
      if (!user.hasClaimed) {
        // Update metadata to prevent re-processing
        await userDb.set(user.id, user, { metadata: {
          finalized: new Date().toISOString(),
          claimed: false,
        } })
        updatedIds.push(key)
        continue
      }

      await updateStats(user, { finalized: new Date().toISOString() })
      updatedIds.push(key)
    }

    if (list.list_complete) {
      listComplete = true
      break
    }

    cursor = list.cursor
  }

  return {
    updatedCount: updatedIds.length,
    updated: updatedIds,
    listComplete,
    duration: `${(Date.now() - start) / 1000} seconds`,
  }
})
