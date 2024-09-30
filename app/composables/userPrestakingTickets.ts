import { useUserInfo } from '@/stores/userInfo'
import prestakeRewardData from '~/content/rewards/userPrestake'

function checkUserLevel(min: number, max: number, nim: number) {
  return nim >= min && nim < max
}

export function getUserStakedNIM() {
  return useUserInfo().stake
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
