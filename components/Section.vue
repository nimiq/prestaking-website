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
})
</script>

<template>
  <div class="relative px-16 py-200 md:px-32" :class="{ 'bg-darkblue': darkMode }">
    <div v-if="darkMode && godRays" class="god-rays">
      <img src="~/assets/God-Rays.png" alt="">
      <div class="absolute left-0 top-0 h-100 w-full bg-gradient-from-darkblue bg-gradient-to-transparent bg-gradient-to-b" />
    </div>
    <!-- <div v-if="darkMode" class="god-rays">
      <img src="~/assets/God-Rays.png" alt="">
    </div>
    <div v-if="darkMode" class="god-rays">
      <img src="~/assets/God-Rays.png" alt="">
    </div> -->
    <div class="mx-auto max-w-1168 flex flex-col gap-96">
      <slot />
    </div>
  </div>
</template>

<style>
.god-rays {
  pointer-events: none;
  position: absolute;
  bottom: -20%;
  left: 50%;
  width: 100vw;
  height: 100%;
  transform: translateX(-50%);
  mix-blend-mode: lighten;
  /* opacity: 0.6; */
  transform-origin: 50% 100%;

  /* &:nth-child(2) {
    animation: left-right 5s ease 0s infinite alternate both;
  }

  &:nth-child(3) {
    animation: right-left 5s ease 0s infinite alternate both;
  } */

  img {
    object-fit: cover;
    height: 100%;
  }
}
/* @keyframes left-right {
  0% {
    transform: translate(-50%) rotate(-5deg);
  }
  100% {
    transform: translate(-50%) rotate(5deg);
  }
}

@keyframes right-left {
  0% {
    transform: translate(-50%) rotate(5deg);
  }
  100% {
    transform: translate(-50%) rotate(-5deg);
  }
} */
</style>
