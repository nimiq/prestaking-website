<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'
import underdogRewardData from '~/content/rewards/underdog'

const store = useUserInfo()

const cardColor = '#F33F68'

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
  return store.hasClaimed && store.underdogMultiplier > 0 ? [store.underdogMultiplier] : []
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
      <div class="icon-shadow mx-auto mb-32 w-fit object-contain object-center">
        <div class="i-custom:fist h-64 w-72" />
      </div>
      <div class="small-body text-center text-white/60">
        Prestake with an underdog to multiply your points
      </div>
      <RewardMultiplierBadges
        :multipliers="underdogRewardData.options"
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
      <div i-custom:underdog-card class="min-h-full min-w-full w-max" />
      <RewardMultiplierBadges
        :multipliers="underdogRewardData.options"
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
        :title="underdogRewardData.modal.title"
        :label="underdogRewardData.modal.label"
        :description="underdogRewardData.modal.body"
        image="/img/reward-cards/modals/underdog.png"
        @close="closeModal"
      >
        <RewardAchievement
          v-for="item in underdogRewardData.options"
          :key="item.label"
          :active="activatedMultipliers.includes(item.multiplier!)"
          color="#F33F68"
          :button-text="`${item.multiplier}x`"
          label=""
        />
      </RewardModal>
    </ModalWrapper>
  </div>
</template>
