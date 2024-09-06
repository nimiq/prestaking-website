<script lang="ts" setup>
defineProps({
  darkMode: {
    type: Boolean,
    default: false,
    required: false,
  },
  godRays: {
    type: Boolean,
    default: false,
    required: false,
  },
  hexs: {
    type: Boolean,
    default: false,
    required: false,
  },
})
</script>

<template>
  <div class="relative px-32 py-160 md:py-200" :class="{ 'bg-white': !darkMode }">
    <div v-if="darkMode && godRays" class="">
      <NuxtImg class="rays absolute bottom-0 left-0 h-70% min-w-[400vw] scale-x-120 mix-blend-lighten blur-[28px] brightness-[1] -translate-x-[37.6%]" src="/img/God-Rays.png" alt="" />
      <!-- <NuxtImg class="absolute bottom-0 left-0 h-full w-screen mix-blend-lighten blur-[28px] brightness-[1]" src="/img/God-Rays.png" alt="" /> -->
      <!-- <div class="absolute left-0 top-0 h-100 w-full bg-gradient-from-darkblue bg-gradient-to-transparent bg-gradient-to-b" /> -->
    </div>
    <NuxtImg v-if="hexs" src="/img/section-hexs.png" class="absolute bottom-0 left-0 min-w-200vw lg:min-w-screen -translate-x-1/2 lg:translate-x-0" />
    <div class="relative mx-auto max-w-1300 flex flex-col gap-96">
      <slot />
    </div>
  </div>
</template>

<style>
.icon-shadow {
  position: relative;
  &:before {
    content: '';
    pointer-events: none;
    width: 181px;
    height: 181px;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    background: radial-gradient(50% 50% at 50% 50%, #fff 0%, rgba(255, 255, 255, 0) 100%);
    mix-blend-mode: overlay;
    filter: blur(25.13888931274414px);
  }
}

.hexs {
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 1902px;
  transform: translateX(-50%);

  img {
    object-fit: cover;
    height: 100%;
  }
}
</style>
