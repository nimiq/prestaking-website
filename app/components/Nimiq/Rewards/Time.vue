<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'

const store = useUserInfo()

const options = [
  {
    buttonText: '3x',
    min: '2024-09-16',
    max: '2024-09-23',
    label: 'First Week',
    color: 'orange',
  },
  {
    buttonText: '2x',
    min: '2024-09-23',
    max: '2024-09-30',
    label: 'Second Week',
    color: 'peach',
  },
  {
    buttonText: '1.5x',
    min: '2024-09-30',
    max: '2024-10-07',
    label: 'Third Week',
    color: 'pink',
  },
]

function getStakedInTime(min: string, max: string) {
  let totalNIM = 0
  if (store.loggedIn && store.user.prestakingEvents && store.user.prestakingEvents.length > 0) {
    store.user.prestakingEvents.forEach((e) => {
      if (checkUserStakingDates(min, max, e.date)) {
        totalNIM += e.amount
      }
    })
    return totalNIM
  }
  return null
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
</script>

<template>
  <div class="flex flex-wrap gap-x-16 gap-y-24">
    <RewardAchievement
      v-for="item in options"
      :key="item.label"
      :active="getStakedInTime(item.min, item.max) > 0"
      :color="item.color"
      :button-text="item.buttonText"
      :label="item.label"
      :details="getStakedInTime(item.min, item.max) > 0 ? `${getStakedInTime(item.min, item.max)} NIM prestaked` : undefined"
    />
  </div>
</template>

<style>

</style>
