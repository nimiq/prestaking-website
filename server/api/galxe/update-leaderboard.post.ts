import { z } from 'zod'
import { GALXE_SPACE_ID } from '../../config'
import { forbiddenError, internalServerError } from '../../errors'
import { galxeLeaderboardDb } from '../../kv'

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

  let totalCount = 0

  const pageSize = 1000 // Maximum allowed by the API
  let hasNextPage = true
  let cursorAfter = ''

  while (hasNextPage) {
    // Fetch page of ranks from the Galxe GraphQL API
    const { data } = await $fetch<{
      data: {
        space: {
          loyaltyPointsRanks: {
            pageInfo: {
              endCursor: string
              hasNextPage: boolean
            }
            totalCount: number
            edges: {
              node: {
                rank: number
              }
            }[]
          }
        }
      }
    }>('https://graphigo.prd.galaxy.eco/query', {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          space(id: 68465) {
            loyaltyPointsRanks(
              first: ${pageSize}
              order: Points
              cursorAfter: "${cursorAfter}"
            ) {
              pageInfo {
                endCursor
                hasNextPage
              }
              totalCount
              edges {
                node {
                  rank
                }
              }
            }
          }
        }`,
      }),
    })

    console.log({ data }) // eslint-disable-line no-console

    const { loyaltyPointsRanks } = data.space

    // Sometimes this is 0, sometimes it's the actual count
    if (loyaltyPointsRanks.totalCount) {
      totalCount = loyaltyPointsRanks.totalCount
      break
    }

    totalCount += loyaltyPointsRanks.edges.length

    hasNextPage = loyaltyPointsRanks.pageInfo.hasNextPage
    cursorAfter = loyaltyPointsRanks.pageInfo.endCursor

    console.log('Fetched', totalCount, 'ranks') // eslint-disable-line no-console
  }

  console.log('Fetched all ranks') // eslint-disable-line no-console

  await galxeLeaderboardDb.set(`${GALXE_SPACE_ID}`, {
    totalCount,
    updatedAt: new Date().toISOString(),
  })

  return {
    totalCount,
  }
})
