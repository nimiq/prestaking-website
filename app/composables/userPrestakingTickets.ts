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
  for (const option of prestakeRewardData.options) {
    if (checkUserLevel(option.min, option.max, getUserStakedNIM())) {
      return option.cardType
    }
  }
}
