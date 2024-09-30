import type { StakingEvent } from '~/types/rewards'

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
    address: null as string | null,
    stake: 0,
    underdogPool: null as string | null,
    prestakeEvents: [] as StakingEvent[],
    totalPoints: 0,
    galxeAddress: null as string | null,
  }),
  actions: {
    logout() {
      this.address = null
      this.stake = 0
      this.underdogPool = null
      this.prestakeEvents = []
      this.totalPoints = 0
      this.galxeAddress = null
    },
  },
})
