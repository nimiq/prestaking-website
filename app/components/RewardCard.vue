<script lang="ts" setup>
import type { PropType } from 'vue'

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

const props = defineProps({
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
    required: false,
  },
  reward: {
    type: Object as PropType<Reward>,
    required: true,
  },
})

const emit = defineEmits(['login', 'galxeConnect'])
const showModal: Ref<boolean> = ref(false)

function linkClick() {
  if (props.reward.card.link === 'login') {
    emit('login')
  }
  else if (props.reward.card.link === 'galxe') {
    emit('galxeConnect')
  }
}
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
  <div class="rewards-card-container relative mb-40 h-415 min-w-270 w-270 flex flex-col items-center justify-center rounded-6 bg-white p-32" style="">
    <div v-if="locked" class="i-custom:lock-outline absolute left-1/2 top-0 text-40 -translate-1/2" />

    <!-- Icon -->
    <div class="icon-shadow mx-auto mb-32 object-contain object-center" :class="reward.card.icon" />
    <div class="small-body mx-24 text-center text-white/60">
      {{ prePreStaking ? 'Prestaking is starting soon. Stay tuned!' : reward.card.title }}
    </div>
    <div v-if="reward.card.link" class="mt-24 nq-pill-secondary" @click="linkClick">
      {{ reward.card.linkText }}
    </div>
    <div v-if="reward.multipliers" class="absolute bottom-32 left-1/2 flex items-center justify-center gap-x-6 -translate-x-1/2">
      <div v-for="item in reward.multipliers" :key="item" class="h-32 flex items-center justify-center border-1 border-white/20 rounded-full px-6 leading-100%">
        <span class="small-body text-white/60 !font-500">{{ item }}x</span>
      </div>
    </div>

    <div class="absolute right-16 top-16 size-32 cursor-pointer rounded-full bg-white/15 transition-colors hover:bg-white/30" @click="openModal">
      <div class="absolute-center i-nimiq:arrow-from-bottom-left text-11 text-white" />
    </div>
    <Teleport to="body">
      <Transition name="fade" mode="out-in">
        <ModalWrapper v-if="showModal">
          <TheCard
            :title="reward.modal.title"
            :label="reward.modal.label"
            :description="reward.modal.body"
            :options="reward.modal.options"
            image-url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Images&psig=AOvVaw3csExdp2KKr9y_S4z_LLg0&ust=1723643756834000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLjWnMCP8ocDFQAAAAAdAAAAABAE"
            @close="closeModal"
          />
        </ModalWrapper>
      </Transition>
    </Teleport>
  </div>
</template>

<style>
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
</style>
