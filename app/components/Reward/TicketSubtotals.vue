<script lang="ts" setup>
// import { useUserInfo } from '@/stores/userInfo'

// const store = useUserInfo()

const earlyBirdTotal = computed(() => {
  // TODO
  return 0
})

const underdogTotal = computed(() => {
  // TODO
  return 0
})

const galxeTotal = computed(() => {
  // TODO
  return 0
})
</script>

<template>
  <div class="relative h-40 min-w-300vw">
    <div class="subtotal-item ticket left-175">
      <div>{{ earlyBirdTotal }}</div>
      <div class="i-custom:tickets inline-block size-16 opacity-60" />
    </div>
    <div class="subtotal-item plus left-315">
      <div i-custom:plus class="size-11" />
    </div>
    <div class="subtotal-item ticket left-460">
      <div>{{ underdogTotal }}</div>
      <div class="i-custom:tickets inline-block size-16 opacity-60" />
    </div>
    <div class="subtotal-item plus left-608">
      <div i-custom:plus class="size-11" />
    </div>
    <div class="subtotal-item ticket left-755">
      <div>{{ galxeTotal }}</div>
      <div class="i-custom:tickets inline-block size-16 opacity-60" />
    </div>
  </div>
</template>

<style>
.subtotal-item {
  @apply -translate-1/2 top-1/2 absolute;
}
.subtotal-item.ticket {
  @apply flex items-center justify-center gap-8 rounded-full bg-[#464A73] px-32 py-8 text-14 text-white/60;
}

.subtotal-item.plus {
  @apply h-fit min-w-max flex items-center justify-center gap-8 border-1 border-white/10 rounded-full bg-[#2E3361] p-8 text-14 text-white/60;
}
</style>
