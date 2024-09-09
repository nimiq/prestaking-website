<script lang="ts" setup>
// TODO: Get logged in user total NIM and calculate which level they match with

const options = [
  {
    buttonText: '10 - 99k',
    min: 10000,
    max: 99000,
    label: 'Protector',
    color: 'orange',
  },
  {
    buttonText: '100 - 999k',
    min: 99001,
    max: 999000,
    label: 'Protector',
    color: 'peach',
  },
  {
    buttonText: '1 - 10M',
    min: 1000001,
    max: 10000000,
    label: 'Overseer',
    color: 'pink',
  },
  {
    buttonText: '>10M',
    min: 10000001,
    max: 100000000000000,
    label: 'Paladin',
    color: 'purple',
  },
]

const userNIM = 768000

function checkUserLevel(min: number, max: number) {
  if (userNIM >= min && userNIM < max) {
    return true
  }
  else {
    // FALSE
    return true
  }
}
</script>

<template>
  <div class="flex flex-wrap gap-x-16 gap-y-24">
    <RewardAchievement v-for="item in options" :key="item.label" :active="checkUserLevel(item.min, item.max)" :color="item.color" :button-text="item.buttonText" :label="item.label" />
  </div>
</template>

<style>

</style>
