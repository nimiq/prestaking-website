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
  <div class="absolute bottom-0 left-0 h-full w-screen">
    <NuxtImg class="h-[100%] scale-[1.4] object-b mix-blend-lighten blur-[28px] brightness-[1.5]" src="/img/God-Rays.png" alt="" />
  </div>
  <div class="absolute bottom-0 left-0 h-full w-screen">
    <NuxtImg class="h-[60%] scale-x-[2.2] object-cover object-c mix-blend-lighten blur-[28px] brightness-[1.2]" src="/img/God-Rays.png" alt="" />
    <!-- <div class="absolute left-0 top-0 h-100 w-full bg-gradient-from-darkblue bg-gradient-to-transparent bg-gradient-to-b" /> -->
    <div class="custom-radial-dark-blue absolute left-0 top-0 h-full w-full" />
  </div>
  <NuxtImg src="/img/hex-bg.png" class="lg-bg absolute left-0 top-0 w-screen opacity-100 mix-blend-overlay" />
  <!-- <NuxtImg src="/img/hex-bg-sm.png" class="sm-bg absolute left-0 top-0 w-screen opacity-100 mix-blend-multiply brightness-10 md:hidden" /> -->

  <ClockSVG />
</template>

<style>
/* #grid-gradient-overlay {
  background: linear-gradient(to top, white 0%, transparent 20%);
} */
.custom-radial-dark-blue {
  background: radial-gradient(transparent 0%, rgb(31 35 72) 70%);
}
.sm-bg {
  top: -12px;
  left: 3px;
  min-width: 101vw;
}

.lg-bg {
  @apply -top-7 left-1 min-w-[287vw]
  sm:-top-5 sm:left-2.5 sm:min-w-[148.5vw]
  lg:-top-10.5 lg:left-0 lg:min-w-[101vw];
}
</style>
