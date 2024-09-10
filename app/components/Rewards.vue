<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'
import { getUserStakedNIM } from '~/composables/userPrestakingTickets'

defineProps({
  prePreStaking: {
    type: Boolean,
    required: true,
  },
})

const store = useUserInfo()

const ticketAmount = 0

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

const scrollLeft: Ref<number> = ref(0)
const rewardTickets: Ref<HTMLDivElement | null> = ref(null)

function trackScroll(e: Event) {
  if (rewardTickets.value) {
    const target = e.target as HTMLDivElement
    rewardTickets.value.scrollLeft = target.scrollLeft
  }
}
const getscrollLeft = computed(() => {
  return scrollLeft.value
})
</script>

<template>
  <div class="z-5 grid grid-cols-1 lg:grid-cols-[min-content_1fr_1fr] md:grid-cols-[min-content_1fr_1fr] lg:mx-0 -ml-32 -mr-32 lg:rounded-16" style="grid-template-rows: repeat(5, max-content)">
    <div id="reward-user" class="relative z-5 w-full border-1 border-white/10 p-32 md:col-start-1 md:row-start-1 lg:col-end-2 md:col-end-2 md:col-end-2 md:row-end-4 lg:rounded-tl-16">
      <div class="god-rays max-w-full !h-auto">
        <NuxtImg src="/img/God-Rays.png" alt="" />
      </div>
      <UserCard
        :key="userNIM"
        :locked="store.loggedIn === false"
        @open-login-modal="openLoginModal"
      />
      <div class="absolute bottom-0 left-1/2 min-w-max flex translate-1/2 items-center justify-center gap-8 rounded-full bg-[#464A73] px-32 py-8 text-14 text-white/60 -translate-x-1/2">
        <div>{{ getUserStakedNIM() / 1000 }} Tickets</div>
        <div class="i-custom:tickets inline-block size-16 opacity-60" />
      </div>
      <div class="absolute bottom-0 right-0 h-fit min-w-max flex translate-1/2 items-center justify-center gap-8 border-1 border-white/10 rounded-full bg-[#2E3361] p-8 text-14 text-white/60">
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
          <RewardEarlyBird />
          <RewardUnderdog />

          <RewardGalxe @open-galxe-modal="openGalxeModal" />
        </div>
      </div>
      <div ref="rewardTickets" :style="`transform: translate(-${getscrollLeft}px, 50%)`" class="no-scrollbar pointer-events-none absolute bottom-0 left-0 z-3 max-w-full flex translate-y-1/2 items-center gap-50 overflow-x-scroll">
        <div class="min-w-30" />
        <div class="min-w-max flex items-center justify-center gap-8 rounded-full bg-[#464A73] px-32 py-8 text-14 text-white/60">
          <div>8000 Tickets</div>
          <div class="i-custom:tickets inline-block size-16 opacity-60" />
        </div>
        <div class="h-fit min-w-max flex items-center justify-center gap-8 border-1 border-white/10 rounded-full bg-[#2E3361] p-8 text-14 text-white/60">
          <div i-custom:plus class="size-11" />
        </div>
        <div class="min-w-max flex items-center justify-center gap-8 rounded-full bg-[#464A73] px-32 py-8 text-14 text-white/60">
          <div>8000 Tickets</div>
          <div class="i-custom:tickets inline-block size-16 opacity-60" />
        </div>
        <div class="h-fit min-w-max flex items-center justify-center gap-8 border-1 border-white/10 rounded-full bg-[#2E3361] p-8 text-14 text-white/60">
          <div i-custom:plus class="size-11" />
        </div>
        <div class="min-w-max flex items-center justify-center gap-8 rounded-full bg-[#464A73] px-32 py-8 text-14 text-white/60">
          <div>8000 Tickets</div>
          <div class="i-custom:tickets inline-block size-16 opacity-60" />
        </div>
        <div class="min-w-300" />
      </div>
    </div>
    <div class="relative col-start-1 col-end-6 h-full w-full border-1 border-white/10 bg-white/10 pb-66 pt-50 lg:col-end-4 lg:rounded-b-16">
      <h4 class="w-full text-center text-22 text-white">
        Earn tickets based on your staked amount
      </h4>
      <div class="absolute bottom-0 left-1/2 w-312 flex translate-y-1/2 items-center justify-center gap-x-12 border-1 border-white/10 rounded-full bg-[#51527E] px-32 py-24 text-32 text-white/60 leading-70% md:w-424 -translate-x-1/2 md:text-44">
        {{ ticketAmount }} <span class="text-17">Tickets</span>
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

</style>
