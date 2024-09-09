<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'
import rewards from '@/content/ticket-rewards'

const store = useUserInfo()

const userNIM = store.user.prestakedNIMAmount

function checkUserLevel(min: number, max: number) {
  return userNIM >= min && userNIM < max
}
</script>

<template>
  <div class="flex flex-wrap gap-x-16 gap-y-24">
    <RewardAchievement v-for="item in rewards.options" :key="item.label" :active="checkUserLevel(item.min, item.max)" :color="item.color" :button-text="item.buttonText" :label="item.label" />
  </div>
</template>

<style>

</style>
