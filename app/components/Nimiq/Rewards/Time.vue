<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'
import timeRewards from '~/content/time-rewards'

const store = useUserInfo()
const userLevels = store.getUserTimeLevel
</script>

<template>
  <div class="flex flex-wrap gap-x-16 gap-y-24">
    <RewardAchievement
      v-for="item in timeRewards.options"
      :key="item.label"
      :active="userLevels[item.level] > 0"
      :color="item.color"
      :button-text="item.buttonText"
      :label="item.label"
      :details="userLevels[item.level] > 0 ? `${userLevels[item.level]} NIM prestaked` : undefined"
    />
  </div>
</template>

<style>

</style>
