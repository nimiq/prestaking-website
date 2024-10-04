<script lang="ts" setup>
import userPrestake from '~/content/rewards/userPrestake'

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

const store = useUserInfo()
</script>

<template>
  <div
    class="group relative w-full border-1 border-gray rounded-t-10 bg-[#e9e9eb] bg-cover bg-center sm:w-[clamp(508px,508px,80vw)] sm:rounded-10"
  >
    <div
      class="relative m-6 flex flex-col items-center justify-end overflow-hidden rounded-4 bg-darkblue px-0 pb-32 pt-42 text-center"
    >
      <NuxtImg class="pointer-events-none absolute left-1/2 h-150% min-w-300% blur-10 brightness-120 -bottom-70% -translate-x-1/2" src="/img/God-Rays.png" alt="" />

      <!-- Content -->
      <div class="px-32 pb-32">
        <h3 class="z-5 mb-0 text-24 text-white font-700">
          {{ title }}
        </h3>
        <div
          v-if="description"
          class="z-5 mt-16 text-white/80 font-500"
        >
          {{ description }}
        </div>
      </div>

      <div i-custom:close-transparent class="absolute right-16 top-12 size-24 cursor-pointer rounded-full transition-opacity hover:opacity-80" @click="$emit('close')" />

      <div class="no-scrollbar z-5 max-w-full w-full overflow-auto">
        <div class="cards-scroll flex gap-16 px-32">
          <div
            v-for="card in userPrestake.options" :key="card.cardType" class="relative mb-10 h-358 min-w-248"
          >
            <NuxtImg
              class="relative block h-358 w-248"
              :src="`/img/reward-cards/modals/${card.cardType}.png`"
              :class="{ 'border-2 border-[#A55AE7] rounded-8': store.stake >= card.min && store.stake < card.max }"
              alt=""
            />
            <div v-if="store.stake >= card.min && store.stake < card.max" class="absolute bottom-0 left-1/2 translate-y-1/2 text-[#A55AE7] -translate-x-1/2">
              <div class="absolute left-1/2 top-1/2 size-8 bg-white -translate-1/2" />
              <div class="i-nimiq:icons-lg-verified-filled text-20 text-[#A55AE7]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cards-scroll > div:last-of-type::before {
  @apply absolute size-32 left-full top-0;
  content: '';
}
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
