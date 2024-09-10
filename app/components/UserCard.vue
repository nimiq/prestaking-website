<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'
import rewards from '~/content/rewards'
import { getUserPrestakeCardLevel } from '~/composables/userPrestakingTickets'

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

const userRewardData = rewards.rewards[0] as Reward

interface Option {
  text: string
  value: string
  color: string
}

interface Reward {
  type: string
  multipliers?: Array<number>
  card: {
    icon: string
    title: string
    link: string
    linkText: string
  }
  modal: {
    title: string
    body: string
    label: string
    options: Option[]
  }
}

const showModal: Ref<boolean> = ref(false)

const cardType = computed(() => {
  return store.loggedIn && store.user.prestakedNIMAmount > 0 ? getUserPrestakeCardLevel() : undefined
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
  <div :class="[!cardType && 'p-32', cardType && '!border-0 !bg-transparent !bg-none !bg-blend-normal']" class="rewards-card-container relative mx-auto mb-40 flex flex-col items-center justify-center rounded-6 bg-white transition-colors duration-400 !mb-0 !h-478 !min-w-311 !w-311" style="">
    <div v-if="!cardType">
      <div v-if="locked" class="i-custom:lock-outline absolute left-1/2 top-0 text-40 -translate-1/2" />

      <!-- Icon -->
      <div class="icon-shadow mx-auto mb-32 w-fit object-contain object-center">
        <div v-if="!store.loggedIn" :class="userRewardData?.card.icon" />
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
        {{ userRewardData?.card.linkText }}
      </div>
      <div v-else-if="store.loggedIn && store.user.prestakedNIMAmount === 0" class="mx-auto mt-24 cursor-pointer nq-pill-secondary" @click="getUserWalletData">
        Got to wallet
      </div>

      <!-- OPEN MODAL -->
      <div class="absolute right-16 top-16 size-32 cursor-pointer rounded-full bg-white/15 transition-colors hover:bg-white/20" @click="openModal">
        <div class="absolute-center i-nimiq:arrow-from-bottom-left text-11 text-white" />
      </div>
    </div>

    <!-- SHOW REWARD CARD -->
    <TiltCardWrapper v-else reduced-movement @click="openModal">
      <TiltCard :card="cardType" class="cursor-pointer" />
    </TiltCardWrapper>

    <ModalWrapper :active="showModal">
      <RewardModal
        v-if="getUserPrestakeCardLevel() === 'none'"
        :type="userRewardData.type"
        :title="userRewardData.modal.title"
        :label="userRewardData.modal.label"
        :description="userRewardData.modal.body"
        :options="userRewardData.modal.options"
        image-url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Images&psig=AOvVaw3csExdp2KKr9y_S4z_LLg0&ust=1723643756834000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLjWnMCP8ocDFQAAAAAdAAAAABAE"
        @close="closeModal"
      />
      <UserCardModal
        v-else
        :type="userRewardData.type"
        :title="userRewardData.modal.title"
        :label="userRewardData.modal.label"
        :description="userRewardData.modal.body"
        :options="userRewardData.modal.options"
        image-url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Images&psig=AOvVaw3csExdp2KKr9y_S4z_LLg0&ust=1723643756834000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLjWnMCP8ocDFQAAAAAdAAAAABAE"
        @close="closeModal"
      />
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
