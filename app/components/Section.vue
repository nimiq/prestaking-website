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
  <div class="relative px-32 py-160 md:py-200" :class="{ 'bg-darkblue': darkMode }">
    <div v-if="darkMode && godRays" class="god-rays short">
      <NuxtImg src="/img/God-Rays.png" alt="">
        <div class="absolute left-0 top-0 h-100 w-full bg-gradient-from-darkblue bg-gradient-to-transparent bg-gradient-to-b" />
      </nuxtimg>
    </div>
    <div v-if="!darkMode && hexs" class="hexs">
      <NuxtImg src="/img/Hexs.png" alt="" />
    </div>
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

.god-rays {
  pointer-events: none;
  position: absolute;
  bottom: 0%;
  left: 50%;
  width: 100vw;
  height: 100%;
  transform: translateX(-50%);
  mix-blend-mode: lighten;

  &.short {
    height: 50%;
  }

  img {
    filter: blur(24px);
    transform: scaleX(1.5);
    object-fit: cover;
    background-repeat: no-repeat;
    height: 100%;
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
