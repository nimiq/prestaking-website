import type { stakingEvent } from '~/types/rewards'

// Underdog

function stakedWithUnderdog(stakingEvents: Array<stakingEvent>) {
  let underdogStakedAmount = 0
  stakingEvents.forEach((event) => {
    if (event.pool === 'an underdog pool' && event.date === 'pool was underdog at time') {
      underdogStakedAmount += event.amount
    }
  })
  underdogStakedAmount = 10
  return underdogStakedAmount
}

export const useUserInfo = defineStore('userInfo', {
  state: () => ({
    loggedIn: false,
    user: {
      prestakedNIMAmount: 0,
      // NEED TO FIGURE OUT HOW TO HANDLE UNDERDOG
      underdogPool: null,
      prestakingEvents: [] as Array<stakingEvent>,
      hasClaimed: 0,
    },
  }),
  getters: {
    getUserTimeLevel: (state) => {
      return getUserTimeLevel(state.user.prestakingEvents)
    },
    getStakedWithUnderdog: (state) => {
      return stakedWithUnderdog(state.user.prestakingEvents)
    },
  },
  actions: {
    logIn() {
      this.loggedIn = true
    },
    setPrestake() {
      this.user.prestakedNIMAmount = 500000
      this.user.underdogPool = null
      this.user.prestakingEvents = [
        {
          date: '2024-09-18',
          amount: 30000,
          pool: 'pool-address-1',
        },
        {
          date: '2024-09-26',
          amount: 20000,
          pool: 'pool-address-2',
        },
      ] as Array<stakingEvent>
    },

  },
})
