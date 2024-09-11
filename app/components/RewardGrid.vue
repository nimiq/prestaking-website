<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'
import { getUserPrestakeCardType, getUserStakedNIM } from '~/composables/userPrestakingTickets'

defineProps({
  prePreStaking: {
    type: Boolean,
    required: true,
  },
})

const store = useUserInfo()

const showLoginModal: Ref<boolean> = ref(false)
const showGalxeModal: Ref<boolean> = ref(false)

function openLoginModal() {
  showLoginModal.value = true
  document.documentElement.style.overflow = 'hidden'
}

function closeLoginModal() {
  showLoginModal.value = false
  document.documentElement.style.overflow = 'auto'
}
function openGalxeModal() {
  showGalxeModal.value = true
  document.documentElement.style.overflow = 'hidden'
}

function closeGalxeModal() {
  showGalxeModal.value = false
  document.documentElement.style.overflow = 'auto'
}

const userNIM = computed(() => {
  return store.user.prestakedNIMAmount
})

const rewardTickets: Ref<HTMLDivElement | null> = ref(null)

function trackScroll(e: Event) {
  if (rewardTickets.value) {
    const target = e.target as HTMLDivElement
    rewardTickets.value.scrollLeft = target.scrollLeft
  }
}

function claimTickets() {
  store.setClaimedTickets()
}
</script>

<template>
  <div class="z-5 grid grid-cols-1 lg:grid-cols-[min-content_1fr_1fr] md:grid-cols-[min-content_1fr_1fr] lg:mx-0 -ml-32 -mr-32 lg:rounded-16" style="grid-template-rows: repeat(5, max-content)">
    <div id="reward-user" class="relative z-5 w-full border-1 border-white/10 p-32 md:col-start-1 md:row-start-1 lg:col-end-2 md:col-end-2 md:col-end-2 md:row-end-4 lg:rounded-tl-16">
      <div class="absolute left-0 top-0 h-full w-full overflow-hidden">
        <div class="god-rays">
          <NuxtImg class="!blur-15" src="/img/God-Rays.png" alt="" />
        </div>
      </div>
      <CardUserPrestake
        :key="userNIM"
        :locked="store.loggedIn === false"
        @open-login-modal="openLoginModal"
      />
      <div class="absolute bottom-0 left-1/2 min-w-max flex translate-1/2 items-center justify-center gap-8 rounded-full bg-[#464A73] px-32 py-8 text-14 text-white/60 -translate-x-1/2">
        <div>{{ getUserStakedNIM() / 1000 }}</div>
        <div class="i-custom:tickets inline-block size-16 opacity-60" />
      </div>
      <div class="absolute bottom-0 right-0 hidden h-fit min-w-max translate-1/2 items-center justify-center gap-8 border-1 border-white/10 rounded-full bg-[#2E3361] p-8 text-14 text-white/60 md:flex">
        <div i-custom:plus class="size-18" />
      </div>
    </div>
    <div
      class="row-start-2 border-r-1 border-t-1 border-white/10 bg-[#1F2348] pt-48 lg:col-start-2 md:col-start-2 lg:col-end-4 md:col-end-4 lg:rounded-tr-16"
    >
      <div class="small-label px-32 text-white/60" style="letter-spacing: 0.8px;">
        Mulitpliers
      </div>
    </div>
    <div
      class="relative row-start-3 h-max w-full border-r-1 border-white/10 lg:col-start-2 md:col-start-2 lg:col-end-4 md:col-end-6"
    >
      <div class="h-max w-full overflow-hidden">
        <!-- Title -->
        <div id="reward-list" class="no-scrollbar max-w-full w-full flex gap-x-24 overflow-auto bg-[#1F2348] px-32 pt-32" @scroll="(e) => trackScroll(e)">
          <CardEarlyBird />
          <CardUnderdog />
          <CardGalxe @open-galxe-modal="openGalxeModal" />
        </div>
      </div>

      <div ref="rewardTickets" class="no-scrollbar pointer-events-none absolute bottom-0 left-0 z-3 h-40 w-full translate-y-1/2 overflow-x-scroll">
        <RewardTicketSubtotals />
      </div>
    </div>
    <div class="relative col-start-1 col-end-6 h-full w-full border-1 border-white/10 bg-white/10 pb-66 pt-50 lg:col-end-4 lg:rounded-b-16">
      <h4 class="w-full text-center text-22 text-white">
        Earn tickets based on your staked amount
      </h4>
      <div
        class="absolute bottom-0 left-1/2 w-fit translate-y-1/2"
      >
        <!-- :class="store.loggedIn" -->
        <div v-if="!store.loggedIn" class="tickets-pill px-32 py-24 text-white/60 leading-70%">
          0
          <span class="text-17">Tickets</span>
        </div>
        <div v-else-if="store.loggedIn && store.user.prestakedNIMAmount === 0" class="tickets-pill px-32 py-24 text-white/60 leading-70%">
          <span class="text-24">Claim tickets</span>
        </div>
        <div
          v-else-if="store.loggedIn && store.user.prestakedNIMAmount > 0 && store.user.totalTickets !== store.user.prestakedNIMAmount / 1000"
          class="tickets-pill active px-32 py-24 text-white/60 leading-70%"
          @click="claimTickets"
        >
          <span class="text-24 text-white">Claim tickets</span>
        </div>

        <NuxtLink
          v-else-if="store.user.totalTickets === store.user.prestakedNIMAmount / 1000"
          :to="{ name: 'share', query: { tickets: store.user.totalTickets, cardLevel: getUserPrestakeCardType() } }"
          class="tickets-pill relative px-32 py-24 pl-40 text-white/60 leading-70% !min-w-fit !gap-32"
          @click="claimTickets"
        >
          <div class="flex grow items-center justify-center gap-x-12">
            {{ store.user.totalTickets }}
            <span class="text-17 text-white">Tickets</span>
          </div>
          <svg class="absolute right-8 top-8 cursor-pointer hover:opacity-80" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="60" rx="30" fill="url(#paint0_radial_214_8648)" />
            <path d="M32.9 33.6979V40.0416L44.5 29.2029L32.9 18.4004V24.5629C21.6263 26.1216 17.1312 33.8429 15.5 41.6004C19.5237 36.1629 24.8525 33.6979 32.9 33.6979Z" fill="white" />
            <defs>
              <radialGradient id="paint0_radial_214_8648" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(-180) scale(60)">
                <stop stop-color="#0B7FF2" />
                <stop offset="1" stop-color="#0CA6FE" />
              </radialGradient>
            </defs>
          </svg>
        </NuxtLink>
      </div>
    </div>
    <ModalWrapper :active="showLoginModal">
      <NimiqLoginModal @close="closeLoginModal" />
    </ModalWrapper>
    <ModalWrapper :active="showGalxeModal">
      <NimiqGalxeModal @close="closeGalxeModal" />
    </ModalWrapper>
  </div>
</template>

<style>
.tickets-pill {
  @apply flex items-center items-center w-320 md:w-424 justify-center gap-x-12 border-1 text-32 border-white/10 rounded-full bg-[#51527E] -translate-x-1/2 md:text-40;

  &.active {
    cursor: pointer;
    transition: background 0.3s ease;
    background: radial-gradient(100% 100% at 100% 100%, #0b7ff2 0%, #0ca6fe 100%);

    &:hover {
      background: radial-gradient(100% 100% at 100% 100%, #0b74dd 0%, #0f92dd 100%);
    }
  }
}
</style>
