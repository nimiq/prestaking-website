import { useUserInfo } from '@/stores/userInfo'
import prestakeRewardData from '~/content/rewards/userPrestake'

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

// check card type
export function getUserPrestakeCardType() {
  let cardType: string = 'none'
  prestakeRewardData.options.forEach((e) => {
    if (checkUserLevel(e.min, e.max, getUserStakedNIM())) {
      cardType = e.cardType
    }
  })
  return cardType as string
}
