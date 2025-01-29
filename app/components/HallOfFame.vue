<script lang="ts" setup>
import type { Winner } from '../../server/api/winners.get'

defineProps({
  darkMode: {
    type: Boolean,
    required: false,
    default: false,
  },
  winner: {
    type: Object as () => Winner,
    required: false,
  },
})
</script>

<template>
  <div
    :class="[darkMode ? 'dark border-white/20' : 'border-darkblue/10 bg-darkblue/02']"
    class="winner-container relative aspect-ratio-2/3 h-full flex grow items-center justify-center overflow-hidden border-2 rounded-8 p-16 md:p-24"
  >
    <div v-if="!winner" class="radial-gradient absolute left-0 top-0 h-full w-full blur-[50px]" />
    <div class="h-full w-full flex flex-col items-center justify-center">
      <img v-if="!winner" src="../assets/svg/winners-questionmark.svg" alt="Winners" class="w-3/5">
      <template v-else>
        <TiltCard :card-type="getUserPrestakeCardType(winner.stake) || 'bronze'" :address="winner.address" class="mb-4" />
        <div class="bottom-gradient absolute left-0 top-0 z-10 h-full w-full flex flex-col items-center justify-end pb-18 md:pb-24">
          <div
            class="flex flex-row items-center gap-8 rounded-full py-10 pl-20 pr-16 text-18 text-darkblue/70 font-semibold leading-none md:py-12 md:pl-24 md:pr-20 md:text-24"
            :class="{
              bronze: 'bg-[#B2684D]',
              silver: 'bg-[#D0CECD]',
              gold: 'bg-[#FFC31F]',
              platinum: 'bg-[#D0CECD]',
            }[getUserPrestakeCardType(winner.stake) || 'bronze']"
          >
            {{ winner.totalPoints }}
            <div class="i-custom:tickets-dark inline-block size-20 opacity-70" />
          </div>
          <div class="mt-12 text-16 text-white font-semibold leading-none md:mt-16 md:text-16">
            {{ winner.address.substring(0, 4) }}&hellip;{{ winner.address.substring(40) }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.winner-container {
  &.dark {
    background: radial-gradient(101.48% 101.48% at 50% 100%, rgba(31, 35, 72, 0) 0%, rgba(31, 35, 72, 0.15) 100%),
      radial-gradient(83.64% 49.88% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%),
      rgba(255, 255, 255, 0.02);
    background-blend-mode: color-dodge, normal, normal;
  }
}

.radial-gradient {
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 40%,
    rgba(255, 255, 255, 0) 40%
  );
  mix-blend-mode: overlay;
}

.bottom-gradient {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.02) 85%),
    linear-gradient(180deg, rgba(31, 35, 72, 0) 25%, rgba(31, 35, 72, 1) 85%);
}
</style>
