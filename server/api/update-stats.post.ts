import { updateStats } from '../lib/update-stats'

export default defineEventHandler(async (event) => {
  const user = event.context.user
  return updateStats(user)
})
