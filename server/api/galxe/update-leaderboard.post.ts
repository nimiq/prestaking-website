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

  const pageSize = 1000 // Maximum allowed by the API
  const ranks = []
  let hasNextPage = true
  let cursorAfter = ''

  while (hasNextPage) {
    // Fetch page of ranks from the Galxe GraphQL API
    const res = await $fetch<{
      data: {
        space: {
          loyaltyPointsRanks: {
            pageInfo: {
              endCursor: string
              hasNextPage: boolean
            }
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
              first: ${pageSize},
              order: Points
              cursorAfter: "${cursorAfter}"
            ) {
              pageInfo {
                endCursor
                hasNextPage
              }
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

    ranks.push(...res.data.space.loyaltyPointsRanks.edges.map(edge => edge.node.rank))
    hasNextPage = res.data.space.loyaltyPointsRanks.pageInfo.hasNextPage
    cursorAfter = res.data.space.loyaltyPointsRanks.pageInfo.endCursor

    console.log('Fetched', ranks.length, 'ranks') // eslint-disable-line no-console
  }
  console.log('Fetched all ranks') // eslint-disable-line no-console

  await galxeLeaderboardDb.set(`${GALXE_SPACE_ID}`, { ranks })

  return {
    ranks,
    totalCount: ranks.length,
  }
})
