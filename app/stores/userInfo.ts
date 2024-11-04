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

export interface GalxeUser {
  Avatar: string // URL
  EVMAddress: string
  GalxeID: string
  Name: string
}

export const useUserInfo = defineStore('userInfo', {
  state: () => ({
    userId: null as string | null,
    address: null as string | null,
    galxeUser: null as GalxeUser | null,

    hasPendingPrestakingTransaction: false,

    stake: 0,
    totalPoints: 0,
    hasClaimed: false,

    basePoints: 0,
    earlyBirdPoints: 0,
    underdogPoints: 0,
    galxePoints: 0,

    earlyBirdMultipliers: [] as number[],
    underdogMultiplier: 0,
    galxeMultiplier: 0,

    galxePercentile: 0.5,
  }),
  actions: {
    async tryFetch() {
      const user = await $fetch('/api/auth/user').catch(() => null)
      if (!user)
        return false

      await this.updateStats(user)
      return true
    },
    async updateStats(user: { id: string, address: string, galxeUser: GalxeUser | null }) {
      const stats = await $fetch('/api/update-stats', {
        method: 'POST',
      }).catch(() => null)

      if (!stats) {
        // Check for pending pre-staking transactions
        const latestTxs = await $fetch('/api/pending-txs')
        const hasPendingPrestakingTransaction = latestTxs
          .filter(tx => tx.receiver_address === 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000')
          .length > 0

        this.$patch({
          userId: user.id,
          address: user.address,
          galxeUser: user.galxeUser,
          hasPendingPrestakingTransaction,
        })
        return
      }

      this.$patch({
        userId: user.id,
        address: user.address,
        galxeUser: user.galxeUser || null,

        hasPendingPrestakingTransaction: false,

        hasClaimed: stats.hasClaimed,
        stake: stats.stake,
        totalPoints: stats.totalPoints,
        basePoints: stats.basePoints,
        earlyBirdPoints: stats.earlyBirdPoints,
        underdogPoints: stats.underdogPoints,
        galxePoints: stats.galxePoints,

        earlyBirdMultipliers: stats.earlyBirdMultipliers,
        underdogMultiplier: stats.underdogMultiplier,
        galxeMultiplier: stats.galxeMultiplier,

        galxePercentile: stats.galxePercentile,
      })
    },
    logout() {
      this.userId = null
      this.address = null
      this.galxeUser = null

      this.hasPendingPrestakingTransaction = false

      this.stake = 0
      this.totalPoints = 0
      this.hasClaimed = false

      this.basePoints = 0
      this.earlyBirdPoints = 0
      this.underdogPoints = 0
      this.galxePoints = 0

      this.earlyBirdMultipliers = []
      this.underdogMultiplier = 0
      this.galxeMultiplier = 0

      this.galxePercentile = 0.5
    },
  },
})
