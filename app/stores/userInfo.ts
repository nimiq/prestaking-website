export const useUserInfo = defineStore('userInfo', {
  state: () => ({
    loggedIn: false,
    user: {
      prestakedNIMAmount: 0,
      // NEED TO FIGURE OUT HOW TO HANDLE UNDERDOG
      underdogPool: null,
      prestakingEvents: null,
    },
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
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
        },
        {
          date: '2024-09-26',
          amount: 20000,
        },
      ]
    },
  },
})
