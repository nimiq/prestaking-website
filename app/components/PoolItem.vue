<script lang="ts" setup>
defineProps({
  companyName: {
    type: String,
    required: true,
  },
  stakedAmount: {
    type: String,
    required: true,
  },
  icon: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <div class="min-w-max flex items-center gap-12 px-32 py-24">
    <div class="size-42 overflow-hidden rounded-full bg-blue">
      <NuxtImg class="h-full w-full object-cover object-c" src="https://fastly.picsum.photos/id/18/200/300.jpg?hmac=ey-vd9wCRyYWPf6nwCk_ciMCPRLrWvI7O5Z1Hfg2Cf0" alt="" />
    </div>
    <div>
      <div class="mb-8 text-16 text-darkblue font-600 leading-100%">
        {{ companyName }}
      </div>
      <div class="text-14 text-darkblue/50 font-600 leading-100%">
        {{ stakedAmount }} staked
      </div>
    </div>
  </div>
</template>

<style>

</style>
