<script lang="ts" type="module" setup>
import gsap from 'gsap'

onMounted(() => {
  nextTick(() => {
    gsap.timeline({
      delay: 0,
    })
      .fromTo('.rays', { opacity: 0 }, { opacity: 1, delay: 0.5, duration: 3 })
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
  <NuxtImg src="/img/hex-bg.png" class="lg-bg absolute left-0 top-0 z-10 w-screen opacity-100 mix-blend-overlay" />
  <!-- Hexagon clock -->
  <div id="clock" class="relative z-20">
    <ClockSVG class="z-20" />
  </div>
</template>

<style>
.custom-radial-dark-blue {
  background: radial-gradient(transparent 0%, rgb(31 35 72) 70%);
}

/* Classes to make hex background line up with the hex digits */
.lg-bg {
  @apply -top-7 left-1 min-w-[287vw]
  sm:-top-5 sm:left-2.5 sm:min-w-[148.5vw]
  lg:-top-10.5 lg:left-0 lg:min-w-[101vw];
}
</style>
