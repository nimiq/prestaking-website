export default defineEventHandler(async (event) => {
  const user = event.context.user

  return {
    stake: user.stake,
    delegation: user.delegation,
    hasClaimed: user.hasClaimed,
    totalPoints: user.totalPoints,
  }
})
