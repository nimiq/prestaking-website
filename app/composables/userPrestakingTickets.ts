import { useUserInfo } from '@/stores/userInfo'
import prestakeRewardData from '~/content/rewards/userPrestake'

export function getUserPrestakeCardType() {
  const stake = useUserInfo().stake
  for (const option of prestakeRewardData.options) {
    if (stake >= option.min && stake < option.max) {
      return option.cardType
    }
  }
}
