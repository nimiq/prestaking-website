<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: null,
  },
  label: {
    type: String,
    required: false,
    default: null,
  },
  image: {
    type: String,
    required: false,
    default: null,
  },
})

defineEmits(['close'])
</script>

<template>
  <div
    class="group relative max-w-508 w-full cursor-pointer border-1 border-gray rounded-t-10 bg-[#e9e9eb] bg-cover bg-center sm:w-[clamp(508px,508px,80vw)] sm:rounded-10"
  >
    <div
      class="relative m-6 mb-0 flex flex-col items-center justify-end overflow-hidden rounded-4 bg-darkblue px-18 pb-24 pt-150 text-center sm:px-55 sm:pb-32"
    >
      <NuxtImg class="absolute left-0 top-0 min-h-full min-w-full object-cover" :src="image" alt="" />
      <div class="absolute bottom-0 left-0 h-3/4 w-full bg-gradient-from-darkblue bg-gradient-to-transparent bg-gradient-to-t" />

      <!-- Content -->
      <h3 class="z-5 mb-0 text-24 text-white font-700">
        {{ title }}
      </h3>
      <div
        v-if="description"
        class="z-5 mt-16 text-white/60"
      >
        {{ description }}
      </div>
      <slot name="link" />
      <div i-custom:close-transparent class="absolute right-16 top-12 size-24 cursor-pointer rounded-full transition-opacity hover:opacity-80" @click="$emit('close')" />
    </div>

    <div
      class="card-content relative pb-20 sm:pb-26"
    >
      <div v-if="label" class="my-20 inline-block w-full text-center text-14 text-darkblue/60' font-bold leading-100% uppercase sm:my-24">
        {{ label }}
      </div>
      <div class="max-w-full w-full flex flex-wrap gap-12 px-20 sm:gap-16 sm:px-32">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.card-content::-webkit-scrollbar-track {
  background: transparent;
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
</style>
