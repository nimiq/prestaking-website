// Underdog

// function stakedWithUnderdog(stakingEvents: Array<stakingEvent>) {
//   let underdogStakedAmount = 0
//   stakingEvents.forEach((event) => {
//     if (event.pool === 'an underdog pool' && event.date === 'pool was underdog at time') {
//       underdogStakedAmount += event.amount
//     }
//   })
//   underdogStakedAmount = 10
//   return underdogStakedAmount
// }

export const useUserInfo = defineStore('userInfo', {
  state: () => ({
    userId: null as string | null,
    address: null as string | null,
    stake: 0,
    totalPoints: 0,
    galxeId: null as string | null,
    hasClaimed: false,

    basePoints: 0,
    earlyBirdPoints: 0,
    underdogPoints: 0,
    galxePoints: 0,

    earlyBirdMultipliers: [] as number[],
    underdogMultiplier: 0,
    galxeMultiplier: 0,
  }),
  actions: {
    async tryFetch() {
      const user = await $fetch('/api/address').catch(() => null)
      if (!user)
        return false

      await this.updateStats(user.id, user.address)
      return true
    },
    async updateStats(id: string, address: string) {
      const stats = await $fetch('/api/update-stats', {
        method: 'POST',
      }).catch(() => null)

      if (!stats) {
        useUserInfo().$patch({
          userId: id,
          address,
        })
        return
      }

      useUserInfo().$patch({
        userId: id,
        address,
        stake: stats.stake,
        totalPoints: stats.totalPoints,
        galxeId: stats.galxeId || null,
        hasClaimed: stats.hasClaimed,

        basePoints: stats.basePoints,
        earlyBirdPoints: stats.earlyBirdPoints,
        underdogPoints: stats.underdogPoints,
        galxePoints: stats.galxePoints,

        earlyBirdMultipliers: stats.earlyBirdMultipliers,
        underdogMultiplier: stats.underdogMultiplier,
        galxeMultiplier: stats.galxeMultiplier,
      })
    },
    logout() {
      this.userId = null
      this.address = null
      this.stake = 0
      this.totalPoints = 0
      this.galxeId = null
      this.hasClaimed = false

      this.basePoints = 0
      this.earlyBirdPoints = 0
      this.underdogPoints = 0
      this.galxePoints = 0

      this.earlyBirdMultipliers = []
      this.underdogMultiplier = 0
      this.galxeMultiplier = 0
    },
  },
})
