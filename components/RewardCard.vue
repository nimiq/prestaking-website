<script lang="ts" setup>
import fist from '@/assets/svg/icons/fist.svg'
import timer from '@/assets/svg/icons/timer.svg'
import galex from '@/assets/svg/icons/galex.svg'

const props = defineProps({
  ticketValue: {
    type: Number,
    default: 0,
    required: false,
  },
  locked: {
    type: Boolean,
    default: true,
    required: false,
  },
  multiplyers: {
    type: Array<string>,
    default: () => [],
    required: false,
  },
  link: {
    type: String,
    default: null,
    required: false,
  },
  icon: {
    type: String,
    default: 'fist',
    required: true,
    validator(value) {
      // The value must match one of these strings
      return ['fist', 'timer', 'galex'].includes(value)
    },
  },
})

const iconList = [
  {
    name: 'fist',
    icon: fist,
  },
  {
    name: 'timer',
    icon: timer,
  },
  {
    name: 'galex',
    icon: galex,
  },
]

const showModal: Ref<boolean> = ref(false)
</script>

<template>
  <div class="rewards-card-container relative mb-40 min-w-fit rounded-6 bg-white p-32 pb-40 pt-120" style="">
    <!-- Lock -->
    <div v-if="locked" class="absolute left-1/2 top-0 -translate-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="44" fill="none" viewBox="0 0 32 44">
        <path fill="#1B1F55" stroke="#1B1F55" stroke-width="2" d="M21.851 15.43a14.99 14.99 0 0 0-12.468 0v-2.4c0-3.246 2.753-5.945 6.234-5.945 3.482 0 6.234 2.7 6.234 5.945v2.4Zm6.256 5.434V13.03c0-6.683-5.63-12.03-12.49-12.03-6.859 0-12.49 5.347-12.49 12.03v7.834c-3.71 5.872-2.468 13.48 2.95 17.974 5.483 4.547 13.597 4.547 19.08 0 5.42-4.494 6.661-12.102 2.95-17.974Zm-12.49 9.549c-1.366 0-2.404-1.054-2.404-2.268 0-1.214 1.038-2.268 2.404-2.268 1.367 0 2.404 1.053 2.404 2.268 0 1.214-1.037 2.268-2.404 2.268Z" />
        <path fill="url(#a)" fill-rule="evenodd" d="M27.107 21.16v-8.13C27.107 6.938 21.963 2 15.617 2 9.272 2 4.127 6.938 4.127 13.03v8.13c-3.624 5.47-2.522 12.668 2.59 16.907 5.112 4.24 12.69 4.24 17.803 0 5.113-4.24 6.214-11.436 2.588-16.909Zm-11.49 10.253c-1.88 0-3.404-1.464-3.404-3.268 0-1.805 1.524-3.268 3.404-3.268 1.881 0 3.404 1.463 3.404 3.268 0 1.804-1.523 3.268-3.404 3.268Zm6.832-15.024a.809.809 0 0 0 .402-.694V13.03c0-3.836-3.238-6.945-7.234-6.945-3.995 0-7.234 3.109-7.234 6.945v2.665c0 .282.153.545.403.694.25.149.562.163.826.038a13.989 13.989 0 0 1 12.01 0c.264.125.576.11.827-.038Z" clip-rule="evenodd" opacity=".5" />
        <defs>
          <radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="rotate(61.899 -3.782 8.394) scale(32.5241 25.7948)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fff" />
            <stop offset="1" stop-color="#fff" stop-opacity=".62" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    <!-- Icon -->
    <div class="icon-shadow h-136">
      <img class="mx-auto h-full w-144 object-contain object-center" :src="iconList.find(x => x.name === props.icon)?.icon" alt="" srcset="">
    </div>
    <div class="small-body mx-24 mb-82 text-center text-white/60">
      Prestake early to add a<br> multiplier
    </div>
    <div class="flex items-center justify-center gap-x-6">
      <div v-for="item in multiplyers" :key="item" class="h-32 flex items-center justify-center border-1 border-white/20 rounded-full px-6 leading-100%">
        <span class="small-label text-white/60">{{ item }}X</span>
      </div>
    </div>
    <!-- <div class="absolute left-1/2 flex translate-y-1/2 items-center justify-center gap-x-12 rounded-full bg-[#51527E] px-32 py-16 text-14 text-white/60 leading-70% -bottom-40 -translate-x-1/2">
      {{ ticketValue }}
    </div> -->
    <div onclick="showModal = true" class="absolute right-16 top-16 size-32 cursor-pointer rounded-full bg-white/15 transition-colors hover:bg-white/30" @click="showModal = true">
      <svg class="absolute-center" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="8" height="1.5" rx="0.75" transform="matrix(-1 0 0 1 8.03906 10.5)" fill="white" />
        <path d="M10.8086 5.96289L10.7398 0.963364L5.74095 1.03142" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <line x1="0.75" y1="-0.75" x2="7.73528" y2="-0.75" transform="matrix(-0.697409 0.716673 0.716673 0.697409 11 1.70898)" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>

    <RewardModal v-if="showModal" @close-modal="showModal = false" />
  </div>
</template>

<style>
.rewards-card-container {
  border-radius: 6px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  background: radial-gradient(
      83.64% 49.88% at 50% 0%,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      101.48% 101.48% at 50% 100%,
      rgba(31, 35, 72, 0) 0%,
      rgba(31, 35, 72, 0.15) 100%
    ),
    rgba(255, 255, 255, 0.05);
  background-blend-mode: normal, color-dodge, normal;
}
</style>
