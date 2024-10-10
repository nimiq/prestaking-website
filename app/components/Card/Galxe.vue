<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'
import galxeRewardData from '~/content/rewards/galxe'

const store = useUserInfo()

const cardColor = '#A55AE7'

const showModal: Ref<boolean> = ref(false)

function openModal() {
  showModal.value = true
  document.documentElement.style.overflow = 'hidden'
}

function closeModal() {
  showModal.value = false
  document.documentElement.style.overflow = 'auto'
}

const activatedMultipliers = computed(() => {
  return store.hasClaimed && store.galxeMultiplier > 0 ? [store.galxeMultiplier] : []
})

const activateCard = computed(() => {
  return activatedMultipliers.value && activatedMultipliers.value.length > 0
})
</script>

<template>
  <div :class="[!activateCard && 'p-32', activateCard && 'active !border-0 !bg-transparent !bg-none !bg-blend-normal']" class="rewards-card-container" style="">
    <div v-if="!activateCard">
      <div v-if="!store.hasClaimed" class="i-custom:lock-outline absolute left-1/2 top-0 text-40 -translate-1/2" title="Claim your points to unlock this card" />

      <!-- Icon -->
      <template v-if="!store.galxeUser || !('Avatar' in store.galxeUser) || !('EVMAddress' in store.galxeUser)">
        <div class="icon-shadow mx-auto mb-32 w-fit object-contain object-center">
          <div class="i-custom:galxe h-28 w-144" />
        </div>
        <div class="small-body text-center text-white/60">
          Share the news with Galxe to multiply your points.
        </div>
        <button v-if="!store.address" disabled class="mx-auto mt-24 cursor-pointer nq-pill-secondary">
          Connect
        </button>
        <a v-else href="/api/galxe/connect" class="mx-auto mt-24 cursor-pointer nq-pill-secondary">Connect</a>
      </template>
      <template v-else>
        <div class="icon-shadow mx-auto mb-8 w-fit object-contain object-center">
          <img :src="store.galxeUser.Avatar || `https://api.galxe.com/v1/avatar?size=128&variant=marble&name=${store.galxeUser.EVMAddress}`" class="relative h-64 w-64 rounded-full">
        </div>
        <div class="small-body text-center text-white">
          {{ store.galxeUser.Name }}
        </div>
        <p class="small-body mt-16 text-center text-white/60">
          Earn points by participating in Galxe quests.
        </p>
      </template>

      <RewardMultiplierBadges
        :multipliers="galxeRewardData.options"
        :active="[]"
        :color="cardColor"
      />
      <!-- OPEN MODAL -->
      <button class="absolute right-16 top-16 z-10 size-32 cursor-pointer rounded-full bg-white/15 transition-colors hover:bg-white/20" @click="openModal">
        <i class="absolute-center i-nimiq:arrow-from-bottom-left text-11 text-white" />
      </button>
    </div>

    <!-- SHOW REWARD CARD -->
    <TiltCardWrapper v-else reduced-movement class="relative min-w-full">
      <div i-custom:galxe-card class="min-h-full min-w-full w-max" />
      <RewardMultiplierBadges
        :multipliers="galxeRewardData.options"
        :active="activatedMultipliers"
        :color="cardColor"
      />
      <!-- OPEN MODAL -->
      <button class="absolute right-16 top-16 z-10 size-32 cursor-pointer rounded-full bg-white/15 transition-colors hover:bg-white/20" @click="openModal">
        <i class="absolute-center i-nimiq:arrow-from-bottom-left text-11 text-white" />
      </button>
    </TiltCardWrapper>

    <ModalWrapper :active="showModal">
      <RewardModal
        :title="galxeRewardData.modal.title"
        :label="galxeRewardData.modal.label"
        :description="galxeRewardData.modal.body"
        image="/img/reward-cards/modals/galxe.png"
        @close="closeModal"
      >
        <template #link>
          <a href="https://galxe.com/nimiq" class="mt-20 text-white font-bold">Visit Galxe<div class="i-nimiq:arrow-top-right ml-8 inline-block text-12 text-white" /></a>
        </template>
        <div class="w-full">
          <RewardAchievement
            :checkmark="false"

            color="#CDA0FF"
            :active="activateCard"
          >
            <div class="relative w-full pt-48">
              <svg class="absolute left-0 top-0 transition-all duration-500 -translate-x-1/2" :style="`left: ${store.galxePercentile * 100}%;`" width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.6303 11.6257L28.63 11.6251L23.005 1.87514L23.0043 1.87393C22.5101 1.02278 21.6032 0.5 20.6219 0.5H9.37194C8.3911 0.5 7.48304 1.0226 6.99229 1.87568L1.3676 11.6251L1.36729 11.6257C0.877244 12.4775 0.877244 13.5225 1.36729 14.3743L1.3676 14.3749L6.99229 24.1243C7.48304 24.9774 8.3911 25.5 9.37194 25.5H20.6219C21.6028 25.5 22.5108 24.9774 23.0016 24.1243L28.6256 14.3761C28.6257 14.3759 28.6258 14.3757 28.6259 14.3755C29.1207 13.5229 29.1203 12.4774 28.6303 11.6257Z" :fill="activateCard ? '#604C8B' : '#1F2348'" :opacity="activateCard ? 'full' : '15'" />
                <path v-if="activateCard" d="M10.8972 13.132L13.6341 15.7805L19.1078 10.4834" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.8658 38.5C15.4809 39.1667 14.5186 39.1667 14.1337 38.5L9.5149 30.5C9.13 29.8333 9.61113 29 10.3809 29L19.6185 29C20.3883 29 20.8695 29.8333 20.4846 30.5L15.8658 38.5Z" :fill="activateCard ? '#604C8B' : '#1F2348'" :opacity="activateCard ? '50' : '15'" />#CDA0FF
              </svg>

              <div class="h-50 w-full flex rounded-full text-24 font-600" :bg="activateCard ? '[var(--bg-solid)]' : 'neutral/6'" :text="activateCard ? 'white' : 'neutral/40'">
                <div class="relative w-[10%] flex items-center justify-center gap-2 rounded-l-full" :bg="activateCard ? 'neutral/64' : 'neutral/16'">
                  5<span class="text-16">x</span>
                  <span class="absolute text-12 -bottom-20 -right-16" :text="activateCard ? 'neutral/60' : 'neutral/25'">10%</span>
                </div>
                <div class="relative w-[15%] flex items-center justify-center gap-2" :bg="activateCard ? 'neutral/32' : 'neutral/8'">
                  3<span class="text-16">x</span>
                  <span class="absolute text-12 -bottom-20 -right-16" :text="activateCard ? 'neutral/60' : 'neutral/25'">25%</span>
                </div>
                <div class="relative w-[25%] flex items-center justify-center gap-2" :bg="activateCard ? 'neutral/16' : 'neutral/4'">
                  2<span class="text-16">x</span>
                  <span class="absolute text-12 -bottom-20 -right-16" :text="activateCard ? 'neutral/60' : 'neutral/25'">50%</span>
                </div>
                <div class="relative w-[25%] flex items-center justify-center gap-2" :bg="activateCard ? 'neutral/8' : 'neutral/2'">
                  1<span class="text-16">x</span>
                  <span class="absolute text-12 -bottom-20 -right-16" :text="activateCard ? 'neutral/60' : 'neutral/25'">75%</span>
                </div>
                <div class="w-[25%] flex items-center justify-center gap-2">
                  0<span class="text-16">x</span>
                </div>
              </div>
            </div>
          </RewardAchievement>
          <p class="mt-14 text-center text-16">
            Example: fall in the top 10% for a whopping 5x multiplier.
          </p>
        </div>
      </RewardModal>
    </ModalWrapper>
  </div>
</template>
