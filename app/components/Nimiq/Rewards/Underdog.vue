<script lang="ts" setup>
const options = [
  {
    buttonText: '5x',
    color: 'pink',
  },
]

// TODO: understand the logic for this component
const data = {
  pool: {
    name: 'Overnice',
    icon: '',
  },
  userNIMStakedWithPool: 20000,
}
</script>

<template>
  <div class="flex flex-wrap gap-x-16 gap-y-24">
    <RewardAchievement
      v-for="item in options"
      :key="item.buttonText"
      :active="data.userNIMStakedWithPool > 0"
      :color="item.color"
      :button-text="item.buttonText"
      :label="`${data.userNIMStakedWithPool} NIM ${data.pool.name}`"
    />
  </div>
</template>

<style>

</style>
