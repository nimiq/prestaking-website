<script lang="ts" setup>
import type { Option } from '~/types/rewards'

defineProps({
  multipliers: {
    type: Array<Option>,
    required: true,
  },
  active: {
    type: Array,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="absolute bottom-32 left-1/2 flex items-center justify-center gap-x-6 -translate-x-1/2">
    <div
      v-for="item in multipliers" :key="item.multiplier"
      class="h-32 flex items-center justify-center border-1 border-white/20 rounded-full px-8 leading-100%"
      :style="active.includes(item.multiplier) ? `background-color: ${color};` : ''"
    >
      <span
        class="small-body text-white/60 !font-500"
        :class="active.includes(item.multiplier) && '!text-white !font-bold'"
      >{{ item.multiplier }}x</span>
    </div>
  </div>
</template>

<style>

</style>
