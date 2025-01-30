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
  overlapElement: {
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
  <div class="relative px-16 py-160 md:py-200 sm:px-32" :class="[{ 'bg-white': !darkMode, 'pb-[280px] md:pb-[328px]': overlapElement }]">
    <div v-if="darkMode && godRays" class="">
      <NuxtImg src="/img/glowing-hex-bg.webp" class="absolute bottom-0 left-0 size-full max-h-1000 object-cover object-top" />
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
    transform: translate3D(-50%, -50%, 0);
    background: radial-gradient(50% 50% at 50% 50%, #fff 50%, rgba(255, 255, 255, 0) 100%);
    mix-blend-mode: overlay;
    filter: blur(25.13888931274414px);
    /* z-index: -1; */
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
