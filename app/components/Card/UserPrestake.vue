<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'
import prestakeRewardData from '~/content/rewards/userPrestake'
import { getUserPrestakeCardType } from '~/composables/userPrestakingTickets'

defineProps({
  prePreStaking: {
    type: Boolean,
    required: false,
    default: false,
  },
  locked: {
    type: Boolean,
    default: true,
    required: false,
  },
})

defineEmits(['openLoginModal'])

const store = useUserInfo()

const showModal: Ref<boolean> = ref(false)

const cardType = computed(() => {
  return store.loggedIn && store.user.prestakedNIMAmount > 0 ? getUserPrestakeCardType() : undefined
})

function openModal() {
  showModal.value = true
  document.documentElement.style.overflow = 'hidden'
}

function closeModal() {
  showModal.value = false
  document.documentElement.style.overflow = 'auto'
}

function getUserWalletData() {
  store.setPrestake()
}
</script>

<template>
  <div :class="[!cardType && 'p-32', cardType && 'active !border-0 !bg-transparent !bg-none !bg-blend-normal']" class="rewards-card-container !mb-0 !h-478 !min-w-311 !w-311" style="">
    <div v-if="!cardType">
      <div v-if="locked" class="i-custom:lock-outline absolute left-1/2 top-0 text-40 -translate-1/2" />

      <!-- Icon -->
      <div class="icon-shadow mx-auto mb-32 w-fit object-contain object-center">
        <div v-if="!store.loggedIn" class="i-custom:hex h-80 w-89" />
        <div v-else class="relative">
          <img src="/img/identicon.svg" alt="">
        </div>
      </div>
      <!-- Description -->
      <div class="small-body mx-24 text-center text-white/60">
        {{ store.loggedIn ? 'Prestake NIM to participate.The more you prestake, the higher your score.' : 'Log in to participate!' }}
      </div>
      <!-- Buttons -->
      <div v-if="!store.loggedIn" class="mx-auto mt-24 cursor-pointer nq-pill-secondary" @click="$emit('openLoginModal')">
        Login and enter
      </div>
      <div v-else-if="store.loggedIn && store.user.prestakedNIMAmount === 0" class="mx-auto mt-24 cursor-pointer nq-pill-secondary" @click="getUserWalletData">
        Go to wallet
      </div>

      <!-- OPEN MODAL -->
      <div class="absolute right-16 top-16 size-32 cursor-pointer rounded-full bg-white/15 transition-colors hover:bg-white/20" @click="openModal">
        <div class="absolute-center i-nimiq:arrow-from-bottom-left text-11 text-white" />
      </div>
    </div>

    <!-- SHOW REWARD CARD -->
    <TiltCardWrapper v-else reduced-movement rounding="12" @click="openModal">
      <TiltCard :card="cardType" class="cursor-pointer" />
    </TiltCardWrapper>

    <ModalWrapper :active="showModal" :bottom-on-mobile="getUserPrestakeCardType() === 'none' ? true : false">
      <RewardModal
        v-if="getUserPrestakeCardType() === 'none'"
        :title="prestakeRewardData.modal.title"
        :label="prestakeRewardData.modal.label"
        :description="prestakeRewardData.modal.body"
        @close="closeModal"
      >
        <RewardAchievement
          v-for="item in prestakeRewardData.options"
          :key="item.cardType"
          :active="item.cardType === cardType"
          :color="item.color"
          :button-text="item.buttonText"
          :label="item.label"
        />
      </RewardModal>

      <UserCardModal
        v-else
        @close="closeModal"
      />
    </ModalWrapper>
  </div>
</template>

<!-- <style>
.card-identicon path:first-of-type {
  display: none;
}
</style> -->
