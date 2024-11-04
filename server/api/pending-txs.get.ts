interface ApiTransaction {
  block_height: number
  hash: string
  sender_address: string
  value: number
  fee: number
  timestamp: number
  receiver_address: string
  data: string
  confirmations: number
}

export default defineEventHandler(async (event) => {
  const user = event.context.user
  return $fetch<ApiTransaction[]>(`https://v2.nimiqwatch.com/api/v1/account-transactions/${user.address}?only=mempool`)
})
