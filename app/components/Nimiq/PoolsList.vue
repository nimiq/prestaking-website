<script lang="ts" setup>
const { statusValidators: status, validators } = storeToRefs(useValidators())
</script>

<template>
  <ul v-if="status === 'pending'">
    <li v-for="i in 3" :key="i">
      <div row-span-full size-42 animate-pulse rounded-full bg-neutral-400 :style="`animation-delay: ${i * 0.3}s`" />
      <div h-14 w-sm animate-pulse self-end rounded-full bg-neutral-400 :style="`animation-delay: ${i * 0.35}s`" />
      <div h-12 w-xs animate-pulse self-start rounded-full bg-neutral-300 :style="`animation-delay: ${i * 0.4}s`" />
    </li>
  </ul>
  <ul v-else-if="status === 'success'">
    <li v-for="{ address, balance, icon, name } in validators" :key="name || address">
      <NuxtImg row-span-full size-42 :src="icon" :alt="`${name} logo`" width="42" height="42" class="rounded-full" />
      <p text="16/none neutral" font-semibold>
        {{ name || address }}
      </p>
      <p text="14/none neutral-700" font-semibold>
        {{ balance.toLocaleString() }} staked
      </p>
    </li>
  </ul>
  <!-- If the API fails, there is no error state -->
  <!-- <div v-else-if="status === 'error'"></div> -->
</template>

<style scoped>
ul {
  li {
    --uno: 'border-neutral-400 border-b-1 border-solid last:border-none';
    --uno: 'grid cols-[auto_1fr] rows-2 items-center gap-x-12 gap-y-8 col-span-full px-32 py-24';
  }
}
</style>
