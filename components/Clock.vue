<script lang="ts" type="module" setup>
import { initGrid } from '@/assets/pixi-grid.module'

onMounted(() => {
  initGrid()
})
</script>

<template>
  <div id="clock">
    <canvas id="canvas" class="absolute left-0 top-0 w-screen" />
    <div id="grid-gradient-overlay" class="absolute left-0 top-0 h-screen w-screen" />
    <ClockSVG />
  </div>
</template>

<style>
#grid-gradient-overlay {
  background: linear-gradient(to top, white 0%, transparent 20%);
}

html,
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
</style>
