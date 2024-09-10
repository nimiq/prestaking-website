import ticketRewards from '~/content/ticket-rewards'

function getTicketCard(userNIM: number) {
  let level: string = 'none'
  ticketRewards.options.forEach((e) => {
    if (checkUserLevel(e.min, e.max, userNIM)) {
      level = e.level
    }
  })
  return level
}

function checkUserLevel(min: number, max: number, nim: number) {
  return nim >= min && nim < max
}

export const useUserInfo = defineStore('userInfo', {
  state: () => ({
    loggedIn: false,
    user: {
      prestakedNIMAmount: 0,
      // NEED TO FIGURE OUT HOW TO HANDLE UNDERDOG
      underdogPool: null,
      prestakingEvents: null,
      hasClaimed: 0,
    },
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
    getUserTicketLevel: (state) => {
      return getTicketCard(state.user.prestakedNIMAmount)
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
        },
        {
          date: '2024-09-26',
          amount: 20000,
        },
      ]
    },

  },
})
