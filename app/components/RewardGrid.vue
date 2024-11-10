<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'
import { getUserPrestakeCardType } from '~/composables/userPrestakingTickets'
import { formatNumber } from '../lib/number-formatting'

const store = useUserInfo()

const isVisible = ref(false)
onMounted(async () => {
  const isLoggedIn = await store.tryFetch().finally(() => {
    isVisible.value = true
  })

  if (isLoggedIn && store.hasPendingPrestakingTransaction) {
    const { pause } = useIntervalFn(async () => {
      await store.updateStats({
        id: store.userId!,
        address: store.address!,
        galxeUser: store.galxeUser,
      })
      if (!store.hasPendingPrestakingTransaction) {
        pause()
      }
    }, 10e3)
  }
})

const cardType = computed(() => {
  return store.hasClaimed ? getUserPrestakeCardType(store.stake) : undefined
})

const showLoginModal: Ref<boolean> = ref(false)

function openLoginModal() {
  showLoginModal.value = true
  document.documentElement.style.overflow = 'hidden'
}

function closeLoginModal() {
  showLoginModal.value = false
  document.documentElement.style.overflow = 'auto'
}

const rewardTickets: Ref<HTMLDivElement | null> = ref(null)

function trackScroll(e: Event) {
  if (rewardTickets.value) {
    const target = e.target as HTMLDivElement
    rewardTickets.value.scrollLeft = target.scrollLeft
  }
}
</script>

<template>
  <div
    class="z-5 grid grid-cols-1 lg:grid-cols-[min-content_1fr_1fr] md:grid-cols-[min-content_1fr_1fr] lg:mx-0 -ml-32 -mr-32 lg:rounded-16" style="grid-template-rows: repeat(5, max-content)"
    :class="[cardType || 'none', { invisible: !isVisible }]"
  >
    <div id="reward-user" class="relative z-5 w-full border-1 border-white/10 p-32 md:col-start-1 md:row-start-1 lg:col-end-2 md:col-end-2 md:col-end-2 md:row-end-4 lg:rounded-tl-16">
      <div v-if="!cardType" class="absolute left-0 top-0 size-full overflow-hidden">
        <NuxtImg src="/img/God-Rays.png" class="absolute left-1/2 top-0.5 size-full min-w-[600%] scale-[1.4] object-b mix-blend-lighten blur-[12px] -translate-x-1/2" />
      </div>
      <NuxtImg v-if="cardType" src="/img/metal-grain.png" class="absolute left-0.5 top-0.5 size-full opacity-30 mix-blend-multiply md:rounded-tl-16" />
      <CardUserPrestake
        :key="store.stake"
        @open-login-modal="openLoginModal"
      />
      <div class="absolute bottom-0 left-1/2 min-w-max flex translate-1/2 items-center justify-center gap-8 rounded-full bg-[#464A73] px-32 py-8 text-14 text-white/60 -translate-x-1/2">
        <div>{{ store.basePoints }}</div>
        <div class="i-custom:tickets inline-block size-16 opacity-60" />
      </div>
      <div class="absolute right-0 hidden h-fit min-w-max translate-1/2 items-center justify-center gap-8 border-1 border-white/10 rounded-full bg-[#2E3361] p-8 text-14 text-white/60 -bottom-1 md:flex">
        <div i-custom:plus class="size-19" />
      </div>
    </div>
    <div class="radial-bg col-start-2 row-start-2 col-end-4 row-end-5 size-full -z-1" />
    <div
      class="row-start-2 border-r-1 border-t-1 border-white/10 pt-48 lg:col-start-2 md:col-start-2 lg:col-end-4 md:col-end-4 lg:rounded-tr-16"
    >
      <div class="small-label px-32 text-white/60" style="letter-spacing: 0.8px;">
        Multipliers
      </div>
    </div>
    <div
      class="relative z-1 row-start-3 h-max w-full border-r-1 border-white/10 lg:col-start-2 md:col-start-2 lg:col-end-4 md:col-end-6"
    >
      <div class="h-max w-full overflow-hidden">
        <!-- Title -->
        <div id="reward-list" class="no-scrollbar max-w-full w-full flex gap-x-24 overflow-auto px-32 pt-32" @scroll="(e) => trackScroll(e)">
          <CardEarlyBird />
          <CardUnderdog />
          <CardGalxe />
        </div>
      </div>

      <div ref="rewardTickets" class="no-scrollbar pointer-events-none absolute bottom-0 left-0 z-3 h-40 w-full translate-y-1/2 overflow-x-scroll">
        <RewardTicketSubtotals />
      </div>
    </div>
    <div class="relative col-start-1 col-end-6 h-full w-full border-1 border-white/10 bg-white/05 pb-66 pt-50 lg:col-end-4 lg:rounded-b-16">
      <h4 class="w-full px-16 text-center text-28 text-white">
        Earn points by pre-staking NIM
      </h4>
      <div
        class="absolute bottom-0 left-1/2 w-fit translate-y-1/2"
      >
        <!-- :class="store.loggedIn" -->
        <div v-if="store.hasPendingPrestakingTransaction" class="tickets-pill relative flex-col px-32 py-12 text-white/60">
          <span class="text-18 text-white/80 font-600">Scanning for points</span>
          <span class="text-16 text-white/60 font-600">This may take a few minutes</span>
          <i class="i-nimiq:spinner absolute right-24 size-20" />
        </div>
        <div v-else-if="!store.address || !store.stake" class="tickets-pill px-32 py-24 text-white/60 leading-70%">
          0
          <span class="text-17 font-600">Points</span>
        </div>
        <button v-else-if="!store.hasClaimed" disabled class="tickets-pill active px-32 py-24 text-white/60 leading-70%">
          <span class="text-24 text-white">Claim {{ formatNumber(store.totalPoints) }} points</span>
        </button>

        <template v-else>
          <div v-if="store.stake < 10_000 * 1e5" class="tickets-pill relative px-32 py-24 pl-40 text-white/60 leading-70% !min-w-fit !gap-32">
            <div class="flex grow items-center justify-center gap-x-12">
              {{ formatNumber(store.totalPoints) }}
              <span class="text-17 text-white font-600">Points</span>
            </div>
          </div>

          <a v-else :href="`/share/${store.userId}`" class="tickets-pill relative px-32 py-24 pl-40 text-white/60 leading-70% !min-w-fit !gap-32">
            <div class="flex grow items-center justify-center gap-x-12">
              {{ formatNumber(store.totalPoints) }}
              <span class="text-17 text-white font-600">Points</span>
            </div>
            <svg class="absolute right-5 top-5 cursor-pointer sm:right-8 sm:top-8 hover:opacity-80" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="60" rx="30" fill="url(#paint0_radial_214_8648)" />
              <path d="M32.9 33.6979V40.0416L44.5 29.2029L32.9 18.4004V24.5629C21.6263 26.1216 17.1312 33.8429 15.5 41.6004C19.5237 36.1629 24.8525 33.6979 32.9 33.6979Z" fill="white" />
              <defs>
                <radialGradient id="paint0_radial_214_8648" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(-180) scale(60)">
                  <stop stop-color="#0B7FF2" />
                  <stop offset="1" stop-color="#0CA6FE" />
                </radialGradient>
              </defs>
            </svg>
          </a>
        </template>
      </div>
    </div>
    <ModalWrapper :active="showLoginModal">
      <NimiqLoginModal @close="closeLoginModal" />
    </ModalWrapper>
  </div>
</template>

<style>
.none {
  #reward-user {
    background: linear-gradient(0deg, #1f2348 0%, #1f2348 100%),
      linear-gradient(0deg, #1f2348 22.32%, rgba(31, 35, 72, 0) 100%);
  }
  .radial-bg {
    border-radius: 0 16px 0 0;
    background: radial-gradient(50% 50% at 50% 50%, #1f2348 0%, #1f2348 100%);
    opacity: 0.5;
  }
}
.bronze {
  #reward-user {
    background: linear-gradient(180deg, rgba(146, 88, 86, 0.6) 0%, rgba(146, 88, 86, 0.3) 100%),
      linear-gradient(180deg, #1f2348 22.32%, rgba(31, 35, 72, 0) 100%);
  }
  .radial-bg {
    border-radius: 0 16px 0 0;
    background: radial-gradient(50% 50% at 50% 50%, rgba(146, 88, 86, 0.6) 0%, rgba(146, 88, 86, 0.3) 100%);
    opacity: 0.5;
  }
}
.silver {
  #reward-user {
    background: linear-gradient(180deg, rgba(218, 230, 236, 0.4) 0%, rgba(218, 230, 236, 0.2) 100%),
      linear-gradient(180deg, #1f2348 22.32%, rgba(31, 35, 72, 0) 100%);
  }
  .radial-bg {
    border-radius: 0 16px 0 0;
    background: radial-gradient(50% 50% at 50% 50%, rgba(218, 230, 236, 0.6) 0%, rgba(218, 230, 236, 0.3) 100%);
    opacity: 0.5;
  }
}
.gold {
  #reward-user {
    background: linear-gradient(180deg, rgba(236, 210, 127, 0.4) 0%, rgba(236, 210, 127, 0.2) 100%),
      linear-gradient(180deg, #1f2348 22.32%, rgba(31, 35, 72, 0) 100%);
  }
  .radial-bg {
    border-radius: 0 16px 0 0;
    background: radial-gradient(50% 50% at 50% 50%, rgba(236, 210, 127, 0.6) 0%, rgba(236, 210, 127, 0.3) 100%);
    opacity: 0.5;
  }
}
.platinum {
  #reward-user {
    background: linear-gradient(180deg, rgba(218, 230, 236, 0.4) 0%, rgba(218, 230, 236, 0.2) 100%),
      linear-gradient(180deg, #1f2348 22.32%, rgba(31, 35, 72, 0) 100%);
  }
  .radial-bg {
    border-radius: 0 16px 0 0;
    background: radial-gradient(50% 50% at 50% 50%, rgba(236, 238, 255, 0.6) 0%, rgba(242, 238, 255, 0.3) 100%);
    opacity: 0.5;
  }
}
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
