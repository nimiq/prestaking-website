import prestakeRewardData from '~/content/rewards/userPrestake'

export function getUserPrestakeCardType(stake: number) {
  for (const option of prestakeRewardData.options) {
    if (stake >= option.min && stake < option.max) {
      return option.cardType
    }
  }
}
