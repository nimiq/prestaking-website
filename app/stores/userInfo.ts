import ticketRewards from '~/content/ticket-rewards'
import timeRewards from '~/content/time-rewards'

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

// TIME

interface stakingEvent {
  multiplier: string
  amount: number
}

function getStakedInTime(stakingEvents: Array<stakingEvent>) {
  const eventArray = [
    {
      multiplier: '3x',
      amount: 0,
    },
    {
      multiplier: '2x',
      amount: 0,
    },
    {
      multiplier: '1.5x',
      amount: 0,
    },
  ]
  timeRewards.options.forEach((option) => {
    let totalNIM = 0
    stakingEvents.forEach((e) => {
      if (checkUserStakingDates(option.min, option.max, e.date)) {
        totalNIM += e.amount
      }
    })
    if (totalNIM > 0) {
      const entry = eventArray.find(x => x.multiplier === option.level)
      if (entry)
        entry.amount = totalNIM
    }
    totalNIM = 0
  })
  return eventArray
}

function checkUserStakingDates(min: string, max: string, date: string) {
  const fDate = Date.parse(min)
  const lDate = Date.parse(max)
  const cDate = Date.parse(date)

  if ((cDate <= lDate && cDate >= fDate)) {
    return true
  }
  return false
}

export const useUserInfo = defineStore('userInfo', {
  state: () => ({
    loggedIn: true,
    user: {
      prestakedNIMAmount: 9000000,
      // NEED TO FIGURE OUT HOW TO HANDLE UNDERDOG
      underdogPool: null,
      prestakingEvents: [
        {
          date: '2024-09-18',
          amount: 30000,
        },
        {
          date: '2024-09-26',
          amount: 20000,
        },
      ],
      hasClaimed: 0,
    },
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
    getUserTicketLevel: (state) => {
      return getTicketCard(state.user.prestakedNIMAmount)
    },
    getUserTimeLevel: (state) => {
      // if (state.loggedIn && state.user.prestakingEvents && state.user.prestakingEvents.length > 0) {
      return getStakedInTime(state.user.prestakingEvents)
      // }
      // return null
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
