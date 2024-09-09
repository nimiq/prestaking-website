<script lang="ts" setup>
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

// GET USER STAKE DATE
const userPrestakeDate: string = '2024-09-18'

function checkUserStakingDates(min: string, max: string) {
  return true
  const fDate = Date.parse(min)
  const lDate = Date.parse(max)
  const cDate = Date.parse(userPrestakeDate)

  if ((cDate <= lDate && cDate >= fDate)) {
    return true
  }
  return false
}
</script>

<template>
  <div class="flex flex-wrap gap-x-16 gap-y-24">
    <RewardAchievement v-for="item in options" :key="item.label" :active="checkUserStakingDates(item.min, item.max)" :color="item.color" :button-text="item.buttonText" :label="item.label" />
  </div>
</template>

<style>

</style>
