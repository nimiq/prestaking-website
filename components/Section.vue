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
    <div class="mx-auto max-w-1168 flex flex-col gap-96">
      <slot />
    </div>
  </div>
</template>

<style>
.god-rays {
  pointer-events: none;
  position: absolute;
  top: 0%;
  left: 50%;
  width: 100vw;
  height: 100%;
  transform: translateX(-50%);
  mix-blend-mode: lighten;

  img {
    object-fit: cover;
    height: 100%;
  }
}
</style>
