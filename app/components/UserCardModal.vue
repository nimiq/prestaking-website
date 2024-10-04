<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'
import { getUserPrestakeCardType } from '~/composables/userPrestakingTickets'

const emits = defineEmits(['close', 'learnMore', 'logout'])

const store = useUserInfo()

async function logOut() {
  await $fetch('/api/auth/logout', {
    method: 'POST',
  }).catch((err: Error) => {
    window.alert(err.message) // eslint-disable-line no-alert
    throw err
  })
  store.logout()
  emits('close')
}

const dropdownOpen: Ref<boolean> = ref(false)
const dropdown: Ref<HTMLDivElement | null> = ref(null)

const container: Ref<HTMLDivElement | null> = ref(null)
function openDropdown() {
  dropdownOpen.value = true
}

useOutsideClick(container, () => {
  if (!dropdownOpen.value) {
    emits('close')
  }
})
</script>

<template>
  <div
    ref="container"
    class="group relative flex flex-col"
  >
    <TiltCardWrapper class="mx-auto">
      <TiltCard :card-type="getUserPrestakeCardType()" />
    </TiltCardWrapper>
    <div class="mt-32 flex items-center justify-center gap-16">
      <div class="text-48 text-white font-bold">
        {{ store.totalPoints }}
      </div>
      <div i-custom:tickets class="h-35 w-40" />
    </div>
    <!-- <div class="mx-auto text-white/80">
      100000 NIM = 1000 Tickets
    </div> -->
    <div class="mx-auto mt-32 flex items-center gap-16">
      <div class="h-40 scale-105 cursor-pointer nq-pill-lg nq-pill-blue" @click="$emit('learnMore')">
        Learn more <div class="i-nimiq:arrow-from-bottom-left ml-8 text-11 text-white" />
      </div>
      <div class="relative w-fit cursor-pointer rounded-full bg-white/10 px-18 py-10" @click="openDropdown">
        <div i-custom:dots class="h-20 w-4 text-white" />
        <div v-if="dropdownOpen" ref="dropdown" class="absolute bottom-0 left-0 rounded-8 bg-white p-24" @mouseleave="dropdownOpen = false">
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
