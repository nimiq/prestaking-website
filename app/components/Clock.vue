<script lang="ts" type="module" setup>
import gsap from 'gsap'

onMounted(() => {
  nextTick(() => {
    gsap.timeline({
      delay: 0,
    })
      .fromTo(['.clock-hex-bg', '.rays'], { opacity: 0 }, { opacity: 1, delay: 0.5, duration: 3 })
      .fromTo('#clock', {
        opacity: 0,
        translateY: '40px',
      }, {
        opacity: 1,
        duration: 0.5,
        translateY: 0,
      }, '-=2')
  })
})
</script>

<template>
  <!-- Rays -->
  <NuxtImg class="rays absolute bottom-0 left-0 z-1 h-[100%] h-full w-screen scale-[1.4] object-b mix-blend-lighten blur-[28px] brightness-[1.5]" src="/img/God-Rays.png" alt="" />
  <NuxtImg class="rays absolute bottom-0 left-0 z-1 h-[60%] h-full w-screen scale-x-[2.2] object-cover object-c mix-blend-lighten blur-[28px] brightness-[1.2]" src="/img/God-Rays.png" alt="" />
  <!-- Border edge fade out -->
  <div class="custom-radial-dark-blue absolute left-0 top-0 z-2 h-full w-full" />
  <!-- Hexagon Background -->
  <NuxtImg src="/img/clock-bg.png" class="clock-hex-bg absolute top-1 z-10 w-[200vw] mix-blend-multiply -left-3 lg:w-screen" />
  <!-- Hexagon clock -->
  <div id="clock" class="relative z-20">
    <ClockSVG class="z-20" />
  </div>
</template>

<style scoped>
#clock,
.rays {
  opacity: 0;
}
.custom-radial-dark-blue {
  background: radial-gradient(transparent 0%, rgb(31 35 72) 70%);
}

/* Classes to make hex background line up with the hex digits */
.clock-hex-bg {
  @apply top-9 left-0 min-w-[284vw]
  sm:top-6 sm:-left-2 sm:min-w-[147.5vw]
  lg:top-1 lg:-left-3 lg:w-[100vw];
}
</style>
