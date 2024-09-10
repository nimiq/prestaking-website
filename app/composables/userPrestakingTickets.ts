import { useUserInfo } from '@/stores/userInfo'
import prestakeRewards from '@/content/ticket-rewards'

function checkUserLevel(min: number, max: number, nim: number) {
  return nim >= min && nim < max
}

// get user staked nim
export function getUserStakedNIM() {
  const store = useUserInfo()
  return store.user.prestakedNIMAmount
}

// calculate total with multipliers
export function getUserPrestakeTickets() {
  return getUserStakedNIM() / 1000
}

// check level
export function getUserPrestakeCardLevel() {
  let level: string = 'none'
  prestakeRewards.options.forEach((e) => {
    if (checkUserLevel(e.min, e.max, getUserStakedNIM())) {
      level = e.level
    }
  })
  return level as string
}
