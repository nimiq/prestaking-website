<script lang="ts" setup>
import rewards from '~/content/rewards'
import { useUserInfo } from '@/stores/userInfo'
import type { Reward } from '~/types/rewards'

defineProps({
  locked: {
    type: Boolean,
    default: true,
    required: false,
  },
})

const store = useUserInfo()

const earlyBirdRewardData = rewards.rewards[1] as Reward

const cardColor = '#24CCA2'

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
  if (store.getUserTimeLevel) {
    return store.getUserTimeLevel.filter(x => x.amount > 0).map(x => x.multiplier)
  }
  return []
})

const activateCard = computed(() => {
  return activatedMultipliers.value && activatedMultipliers.value.length > 0
})
</script>

<template>
  <div :class="[!activateCard && 'p-32', activateCard && '!border-0 !bg-transparent !bg-none !bg-blend-normal']" class="rewards-card-container relative mb-40 h-415 min-w-270 w-270 flex flex-col items-center justify-center rounded-6 bg-white transition-colors duration-400" style="">
    <div v-if="!activateCard">
      <div v-if="locked" class="i-custom:lock-outline absolute left-1/2 top-0 text-40 -translate-1/2" />

      <!-- Icon -->
      <div class="icon-shadow mx-auto mb-32 w-fit object-contain object-center">
        <div class="i-custom:timer h-68 w-51" />
      </div>
      <div class="small-body mx-24 text-center text-white/60">
        Prestake early to add a multiplier
      </div>
      <RewardMultiplierBadges
        :multipliers="earlyBirdRewardData.options"
        :active="[]"
        :color="cardColor"
      />
    </div>

    <!-- SHOW REWARD CARD -->
    <TiltCardWrapper v-else reduced-movement class="relative min-w-full">
      <div i-custom:time-card class="min-h-full min-w-full w-max" />
      <RewardMultiplierBadges
        :multipliers="earlyBirdRewardData.options"
        :active="activatedMultipliers"
        :color="cardColor"
      />
    </TiltCardWrapper>

    <!-- OPEN MODAL -->
    <div class="absolute right-16 top-16 z-10 size-32 cursor-pointer rounded-full bg-white/15 transition-colors hover:bg-white/20" @click="openModal">
      <div class="absolute-center i-nimiq:arrow-from-bottom-left text-11 text-white" />
    </div>

    <ModalWrapper :active="showModal">
      <RewardModal
        :title="earlyBirdRewardData.modal.title"
        :label="earlyBirdRewardData.modal.label"
        :description="earlyBirdRewardData.modal.body"
        @close="closeModal"
      >
        <RewardAchievement
          v-for="item in earlyBirdRewardData.options"
          :key="item.label"
          :active="activatedMultipliers.includes(item.multiplier)"
          :color="item.color"
          :button-text="`${item.multiplier}x`"
          :label="item.label"
        />
      </RewardModal>
    </ModalWrapper>
  </div>
</template>

<style>
.card-identicon path:first-of-type {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.rewards-card-container {
  border-radius: 6px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  background: radial-gradient(83.64% 49.88% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%),
    radial-gradient(101.48% 101.48% at 50% 100%, rgba(31, 35, 72, 0) 0%, rgba(31, 35, 72, 0.15) 100%),
    rgba(255, 255, 255, 0.05);
  background-blend-mode: normal, color-dodge, normal;
}

.rewards-card-container:hover {
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  background: radial-gradient(83.64% 49.88% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%),
    radial-gradient(101.48% 101.48% at 50% 100%, rgba(31, 35, 72, 0) 0%, rgba(31, 35, 72, 0.15) 100%),
    rgba(255, 255, 255, 0.07);
  background-blend-mode: normal, color-dodge, normal;
}
</style>
