export default defineEventHandler((event) => {
  const headers = event.node.req.headers
  return headers
})
