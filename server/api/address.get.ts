export default defineEventHandler(async (event) => {
  const user = event.context.user

  return {
    id: user.id,
    address: user.address,
  }
})
