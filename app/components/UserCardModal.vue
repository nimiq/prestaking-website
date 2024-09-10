<script lang="ts" setup>
import type { PropType } from 'vue'
import { useUserInfo } from '@/stores/userInfo'

defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: null,
  },
  label: {
    type: String,
    required: false,
    default: null,
  },
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
})

defineEmits(['close'])

const store = useUserInfo()

interface Option {
  text: string
  value: string
  color: string
}

const dropdownOpen: Ref<boolean> = ref(false)
const dropdown: Ref<HTMLDivElement | null> = ref(null)

function openDropdown() {
  dropdownOpen.value = true
}

useOutsideClick(dropdown, () => {
  dropdownOpen.value = false
})

function switchAddress() {
  console.error('switchAddress')
}
function logOut() {
  console.error('log out')
}
</script>

<template>
  <div
    class="group relative flex flex-col"
  >
    <TiltCard :card="store.getUserTicketLevel" />
    <div class="mt-32 flex items-center gap-16">
      <div class="text-48 text-white font-bold">
        {{ store.user.prestakedNIMAmount }} NIM
      </div>
      <div i-custom:tickets class="h-35 w-40" />
    </div>
    <div class="mx-auto text-white/80">
      100000 NIM = 1000 Tickets
    </div>
    <div class="mx-auto mt-32 flex items-center gap-16">
      <div class="h-40 scale-105 cursor-pointer nq-pill-lg nq-pill-blue">
        Learn more <div class="i-nimiq:arrow-from-bottom-left ml-8 text-11 text-white" />
      </div>
      <div class="relative w-fit cursor-pointer rounded-full bg-white/10 px-18 py-10" @click="openDropdown">
        <div i-custom:dots class="h-20 w-4 text-white" />
        <div v-if="dropdownOpen" ref="dropdown" class="absolute left-0 top-0 rounded-8 bg-white p-24">
          <div class="mb-24 w-max flex items-center font-600 hover:text-darkblue" @click="switchAddress">
            <div i-custom:code class="mr-8 inline-block size-16 stroke-current" />
            Switch Address
          </div>
          <div class="w-max flex items-center font-600 hover:text-darkblue" @click="logOut">
            <div i-custom:arrow class="mr-8 inline-block size-16 stroke-current" />
            Log out
          </div>
        </div>
      </div>
    </div>
    <div i-custom:close-transparent class="fixed right-16 top-12 size-24 cursor-pointer rounded-full transition-opacity hover:opacity-80" @click="$emit('close')" />
  </div>
</template>

<style>
.card-content::-webkit-scrollbar-track {
  background: transparent;
}
.god-rays {
  pointer-events: none;
  position: absolute;
  bottom: 0%;
  left: 50%;
  width: 100vw;
  height: 100%;
  transform: translateX(-50%);
  mix-blend-mode: lighten;

  &.short {
    height: 50%;
  }

  img {
    filter: blur(24px);
    transform: scaleX(1.5);
    object-fit: cover;
    background-repeat: no-repeat;
    height: 100%;
  }
}
</style>
