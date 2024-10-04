<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'
import { Identicon } from '@nimiq/vue3-components'
import { getUserPrestakeCardType } from '~/composables/userPrestakingTickets'
import prestakeRewardData from '~/content/rewards/userPrestake'

defineProps({
  prePreStaking: {
    type: Boolean,
    required: false,
    default: false,
  },
})

defineEmits(['openLoginModal'])

const store = useUserInfo()

const showModal: Ref<boolean> = ref(false)
const showDetails: Ref<boolean> = ref(false)

const cardType = computed(() => {
  return store.address && store.stake > 0 ? getUserPrestakeCardType() : undefined
})

function openModal() {
  showModal.value = true
  document.documentElement.style.overflow = 'hidden'
}

function closeModal() {
  showModal.value = false
  showDetails.value = false
  document.documentElement.style.overflow = 'auto'
}

function activateDetails() {
  showDetails.value = true
}
</script>

<template>
  <div :class="[!cardType && 'p-32', cardType && 'active !border-0 !bg-transparent !bg-none !bg-blend-normal']" class="rewards-card-container !mb-0 !h-478 !min-w-311 !w-311" style="">
    <div v-if="!cardType">
      <div v-if="!store.address" class="i-custom:lock-outline absolute left-1/2 top-0 text-40 -translate-1/2" />

      <!-- Icon -->
      <div class="icon-shadow mx-auto mb-32 w-fit object-contain object-center">
        <div v-if="!store.address" class="i-custom:hex h-80 w-89" />
        <div v-else class="relative">
          <Identicon :address="store.address" class="h-80 w-80" />
        </div>
      </div>
      <!-- Description -->
      <div class="small-body text-center text-white">
        Pre-staking is starting soon.<br>Stay tuned!
      </div>
      <!-- Buttons -->
      <button v-if="!store.address" class="mx-auto mt-24 cursor-pointer nq-pill-blue" @click="$emit('openLoginModal')">
        Login & enter
      </button>
      <a v-else-if="store.address && store.stake === 0" href="https://wallet.nimiq.com" class="mx-auto mt-24 cursor-pointer nq-pill-secondary">
        Go to wallet
      </a>

      <!-- OPEN MODAL -->
      <button class="absolute right-16 top-16 size-32 cursor-pointer rounded-full bg-white/15 transition-colors hover:bg-white/20" @click="openModal">
        <i class="absolute-center i-nimiq:arrow-from-bottom-left text-11 text-white" />
      </button>
    </div>

    <!-- SHOW REWARD CARD -->
    <TiltCardWrapper v-else reduced-movement rounding="12" @click="openModal">
      <TiltCard :card="cardType" class="cursor-pointer" />
    </TiltCardWrapper>

    <ModalWrapper :active="showModal" :bottom-on-mobile="!cardType || showDetails ? true : false">
      <AllCardsModal
        v-if="!cardType || showDetails"
        :title="prestakeRewardData.modal.title"
        :label="prestakeRewardData.modal.label"
        :description="prestakeRewardData.modal.body"
        @close="closeModal"
      >
        <CardAchievement
          v-for="item in prestakeRewardData.options"
          :key="item.cardType"
          :active="item.cardType === cardType"
          :color="item.color"
          :button-text="item.buttonText"
          :label="item.label"
        />
      </AllCardsModal>

      <UserCardModal
        v-else
        @close="closeModal"
        @learn-more="activateDetails"
      />
    </ModalWrapper>
  </div>
</template>

<style>
.custom-shadow {
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.11);
}
</style>
