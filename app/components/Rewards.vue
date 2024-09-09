<script lang="ts" setup>
import data from '@/content/rewards'

defineProps({
  prePreStaking: {
    type: Boolean,
    required: true,
  },
})

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
</script>

<template>
  <div class="z-5 grid grid-cols-1 lg:grid-cols-[min-content_1fr_1fr] md:grid-cols-[min-content_1fr_1fr] lg:mx-0 -ml-32 -mr-32 lg:rounded-16" style="grid-template-rows: repeat(5, minmax(0, max-content))">
    <div class="relative w-full overflow-hidden border-1 border-white/10 p-32 md:col-start-1 md:row-start-1 lg:col-end-2 md:col-end-2 md:col-end-2 md:row-end-4 lg:rounded-tl-16">
      <div class="god-rays">
        <NuxtImg src="/img/God-Rays.png" alt="" />
      </div>
      <RewardCard
        :pre-pre-staking="prePreStaking"
        :reward="data.rewards[0]"
        :locked="false"
        class="mx-auto !mb-0 !h-478 !min-w-311 !w-311"
        @login="openLoginModal"
        @galxe-connect="openGalxeModal"
      />
    </div>
    <div
      class="row-start-2 border-r-1 border-t-1 border-white/10 bg-[#1F2348] pt-48 lg:col-start-2 md:col-start-2 lg:col-end-4 md:col-end-4 lg:rounded-tr-16"
    >
      <div class="small-label px-32 text-white/60" style="letter-spacing: 0.8px;">
        Mulitpliers
      </div>
    </div>
    <div
      class="row-start-3 h-full w-full overflow-hidden border-r-1 border-white/10 lg:col-start-2 md:col-start-2 lg:col-end-4 md:col-end-6"
    >
      <!-- Title -->
      <div id="reward-list" class="no-scrollbar w-full flex gap-x-24 overflow-auto bg-[#1F2348] px-32 pt-32">
        <RewardCard :reward="data.rewards[1]" :multiplyers="['1', '2', '3']" icon="i-custom:fist" />
        <RewardCard :reward="data.rewards[2]" :multiplyers="['5']" />
        <RewardCard
          :reward="data.rewards[3]" :multiplyers="['10']"
          @galxe-connect="openGalxeModal"
        />
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
