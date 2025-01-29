import { lotteryDb, userDb } from '../kv'

export interface Winner {
  address: string
  stake: number
  totalPoints: number
}

export default defineCachedEventHandler(async () => {
  const winners = await lotteryDb.get('winners')

  if (!winners) {
    throw createError({
      status: 404,
      message: 'Not Found',
      statusMessage: 'No winners found',
    })
  }

  const encoder = new TextEncoder()

  const result = {
    3: [] as Winner[],
    1.5: [] as Winner[],
    0.5: [] as Winner[],
  }

  const dbPromises = []

  const prizes = ['3', '1.5', '0.5'] as const

  for (const prize of prizes) {
    for (const address of winners[prize]) {
      dbPromises.push(new Promise<void>(async (resolve) => { // eslint-disable-line no-async-promise-executor
        const userId = new Uint8Array(
          await crypto.subtle.digest('SHA-256', encoder.encode(address)),
        ).reduce((t, x) => t + x.toString(16).padStart(2, '0'), '')

        const user = await userDb.get(userId).catch(() => null)
        if (!user)
          return resolve()

        result[prize].push({
          address,
          stake: user.stake,
          totalPoints: user.totalPoints,
        })

        resolve()
      }))
    }

    await Promise.all(dbPromises)
    dbPromises.length = 0
  }

  return result
}, { maxAge: 60 * 60 * 24 * 10 }) // 10 days
