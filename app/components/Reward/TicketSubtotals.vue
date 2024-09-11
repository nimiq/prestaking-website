<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'

const store = useUserInfo()

const earlyBirdTotal = computed(() => {
  const levels = store.getUserTimeLevel
  let total = 0
  if (levels) {
    levels.forEach((x) => {
      total += x.amount * x.multiplier
    })
  }
  return total
})

const underdogTotal = computed(() => {
  // TODO
  return 8000
})

const galxeTotal = computed(() => {
  // TODO
  return 8000
})
</script>

<template>
  <div class="min-w-30" />
  <div class="min-w-max flex items-center justify-center gap-8 rounded-full bg-[#464A73] px-32 py-8 text-14 text-white/60">
    <div>{{ earlyBirdTotal }} Tickets</div>
    <div class="i-custom:tickets inline-block size-16 opacity-60" />
  </div>
  <div class="h-fit min-w-max flex items-center justify-center gap-8 border-1 border-white/10 rounded-full bg-[#2E3361] p-8 text-14 text-white/60">
    <div i-custom:plus class="size-11" />
  </div>
  <div class="min-w-max flex items-center justify-center gap-8 rounded-full bg-[#464A73] px-32 py-8 text-14 text-white/60">
    <div>{{ underdogTotal }} Tickets</div>
    <div class="i-custom:tickets inline-block size-16 opacity-60" />
  </div>
  <div class="h-fit min-w-max flex items-center justify-center gap-8 border-1 border-white/10 rounded-full bg-[#2E3361] p-8 text-14 text-white/60">
    <div i-custom:plus class="size-11" />
  </div>
  <div class="min-w-max flex items-center justify-center gap-8 rounded-full bg-[#464A73] px-32 py-8 text-14 text-white/60">
    <div>{{ galxeTotal }} Tickets</div>
    <div class="i-custom:tickets inline-block size-16 opacity-60" />
  </div>
  <div class="min-w-300" />
</template>

<style>

</style>
