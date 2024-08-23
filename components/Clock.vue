<script lang="ts" type="module" setup>
import { initGrid } from '@/assets/pixi-grid.module'

onMounted(() => {
  initGrid()
})
</script>

<template>
  <div id="clock" class="">
    <canvas id="canvas" class="absolute left-0 top-0 w-screen -z-1" />
    <!-- <div id="grid-gradient-overlay" class="absolute left-0 top-0 h-screen w-screen" /> -->
  </div>
  <div class="absolute bottom-0 left-0 h-full min-h-full">
    <img class="h-full object-cover object-b mix-blend-lighten blur-[28px]" src="~/assets/img/God-Rays.png" alt="">
    <div class="absolute left-0 top-0 h-100 w-full bg-gradient-from-darkblue bg-gradient-to-transparent bg-gradient-to-b" />
  </div>
  <ClockSVG />
</template>

<style>
#grid-gradient-overlay {
  background: linear-gradient(to top, white 0%, transparent 20%);
}
</style>
