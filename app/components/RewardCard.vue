<script lang="ts" setup>
import type { PropType } from 'vue'

defineProps({
  prePreStaking: {
    type: Boolean,
    required: false,
    default: false,
  },
  ticketValue: {
    type: Number,
    default: 0,
    required: false,
  },
  locked: {
    type: Boolean,
    default: true,
    required: false,
  },
  multiplyers: {
    type: Array as PropType<string[]>,
    default: () => [],
    required: false,
  },
  link: {
    type: String,
    default: null,
    required: false,
  },
  card: {
    type: String,
    required: false,
  },
  reward: {
    type: Object as PropType<Reward>,
    required: true,
  },
})

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

function openModal() {
  showModal.value = true
  document.documentElement.style.overflow = 'hidden'
}

function closeModal() {
  showModal.value = false
  document.documentElement.style.overflow = 'auto'
}
</script>

<template>
  <div :class="[!card && 'p-32', card && '!border-0 !bg-transparent !bg-none !bg-blend-normal']" class="rewards-card-container relative mb-40 h-415 min-w-270 w-270 flex flex-col items-center justify-center rounded-6 bg-white transition-colors duration-400" style="">
    <div v-if="!card">
      <div v-if="locked" class="i-custom:lock-outline absolute left-1/2 top-0 text-40 -translate-1/2" />

      <!-- Icon -->
      <div class="icon-shadow mx-auto mb-32 w-fit object-contain object-center">
        <slot name="icon" />
      </div>
      <div class="small-body mx-24 text-center text-white/60">
        <slot name="description" />
      </div>
      <slot name="link" />
      <div v-if="reward.multipliers" class="absolute bottom-32 left-1/2 flex items-center justify-center gap-x-6 -translate-x-1/2">
        <div v-for="item in reward.multipliers" :key="item" class="h-32 flex items-center justify-center border-1 border-white/20 rounded-full px-6 leading-100%">
          <span class="small-body text-white/60 !font-500">{{ item }}x</span>
        </div>
      </div>
    </div>

    <!-- SHOW REWARD CARD -->
    <TiltCard v-else :card="card" />

    <!-- OPEN MODAL -->
    <div class="absolute right-16 top-16 size-32 cursor-pointer rounded-full bg-white/15 transition-colors hover:bg-white/20" @click="openModal">
      <div class="absolute-center i-nimiq:arrow-from-bottom-left text-11 text-white" />
    </div>

    <ModalWrapper :active="showModal">
      <RewardModal
        :type="reward.type"
        :title="reward.modal.title"
        :label="reward.modal.label"
        :description="reward.modal.body"
        :options="reward.modal.options"
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
