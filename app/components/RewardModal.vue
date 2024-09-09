<script lang="ts" setup>
import type { PropType } from 'vue'

interface Option {
  text: string
  value: string
  color: string
}

defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
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
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
})

defineEmits(['close'])
</script>

<template>
  <div
    class="group relative h-624 w-[clamp(508px,508px,80vw)] flex flex-col cursor-pointer border-1 border-gray rounded-6 bg-[#e9e9eb] bg-cover bg-center p-6 pb-0"
  >
    <div
      class="relative flex grow flex-col items-center justify-end overflow-hidden rounded-4 bg-darkblue px-55 py-48 text-center"
    >
      <!-- Background Elements -->
      <div class="god-rays !w-full">
        <NuxtImg src="/img/God-Rays.png" alt="" />
      </div>
      <NuxtImg class="absolute left-1/2 top-1/2 w-full -translate-1/2" src="/img/3-cards.png" alt="" />
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
      <div i-custom:close-transparent class="absolute right-16 top-12 size-24 cursor-pointer rounded-full transition-opacity hover:opacity-80" @click="$emit('close')" />
    </div>

    <div
      class="card-content relative max-h-2/5 flex flex-col justify-between gap-24 overflow-auto p-32"
    >
      <div v-if="label" class="inline-block w-full text-center text-14 text-darkblue/60' font-bold leading-100% uppercase">
        {{ label }}
      </div>
      <NimiqRewardsTickets v-if="type === 'ticket'" />
      <NimiqRewardsTime v-if="type === 'time'" />
      <NimiqRewardsUnderdog v-if="type === 'underdog'" />
      <NimiqRewardsGalxe v-if="type === 'galxe'" />
      <!-- <div v-if="type === 'ticket'" class="flex flex-wrap gap-x-16 gap-y-24">
        <RewardAchievement v-for="item in options" :key="item.text" :active="true" :value="item.value" :text="item.text" />
      </div>
      <div v-else-if="type === 'underdog'" class="flex flex-wrap gap-x-16 gap-y-24">
        <RewardAchievement v-for="item in options" :key="item.text" :active="true" :value="item.value" :text="item.text" />
      </div> -->
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
