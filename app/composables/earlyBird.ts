import earlyBirdRewards from '@/content/time-rewards'

interface stakingEvent {
  date: string
  amount: number
  pool: string
}

// Helper
export function checkUserStakingDates(min: string, max: string, date: string) {
  const fDate = Date.parse(min)
  const lDate = Date.parse(max)
  const cDate = Date.parse(date)

  if ((cDate <= lDate && cDate >= fDate)) {
    return true
  }
  return false
}

// return array of staked amounts and their relative multiplier
export function getUserTimeLevel(stakingEvents: Array<stakingEvent>) {
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
  earlyBirdRewards.options.forEach((option) => {
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
