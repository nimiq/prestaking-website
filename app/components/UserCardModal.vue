<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'
import { getUserPrestakeCardType } from '~/composables/userPrestakingTickets'
import { formatNumber } from '../lib/number-formatting'

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
</script>

<template>
  <div class="group relative flex flex-col">
    <TiltCardWrapper class="mx-auto">
      <TiltCard :card-type="getUserPrestakeCardType(store.stake)" :address="store.address!" />
    </TiltCardWrapper>
    <div class="mt-32 flex items-center justify-center gap-16">
      <div class="text-48 text-white font-bold">
        {{ formatNumber(store.totalPoints) }}
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
      <button class="relative w-fit flex cursor-pointer items-center gap-8 rounded-full bg-white px-18 py-10 text-neutral/75 font-600 transition-color hover:text-neutral" @click="logOut">
        <div i-custom:arrow class="size-16" />
        Log out
      </button>
    </div>
    <div i-custom:close-transparent class="fixed right-16 top-12 size-24 cursor-pointer rounded-full transition-opacity hover:opacity-80" @click="$emit('close')" />
  </div>
</template>
