<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'

const emit = defineEmits(['close'])

const store = useUserInfo()

const termsConditionsAccepted = ref(false)

function acceptTC() {
  termsConditionsAccepted.value = true
}

function login() {
  store.logIn()
  emit('close')
}
</script>

<template>
  <Transition name="modal-switch" mode="out-in" appear>
    <div :key="termsConditionsAccepted" class="relative max-w-420 overflow-hidden rounded-t-6 bg-white px-50 py-46 text-center sm:rounded-6">
      <!-- BG Elements and close -->
      <div i-custom:hex class="absolute size-500 opacity-30 -bottom-150 -left-250" />
      <div i-custom:hex class="absolute size-500 opacity-30 -right-300 -top-250" />
      <div i-custom:close class="absolute right-16 top-12 z-1 size-24 cursor-pointer transition-opacity hover:opacity-80" @click="$emit('close')" />
      <!--  T & C Modal -->
      <div v-if="!termsConditionsAccepted">
        <div i-custom:document class="relative z-1 mx-auto mb-56 mt-60 size-120" />
        <div class="relative z-1 mb-90">
          <h4>Terms and conditions</h4>
          <p>Pre-staking NIM secures the network and is the quickest way to staking rewards.</p>
          <!-- TODO: Add t&c here -->
          <a href="www.google.com" class="mx-auto mt-24 w-fit flex items-center rounded-full px-16 py-6 text-darkblue ring-1.5 ring-darkblue/30 transition-colors md:mx-auto hover:bg-darkblue hover:text-white hover:ring-darkblue">
            <span class="text-14">Terms and conditions</span>
            <div class="i-nimiq:info ml-8 text-inherit" />
          </a>
        </div>
        <button class="mx-auto mb-20 scale-150 nq-pill-lg nq-pill-blue" @click="acceptTC">
          Accept Terms
        </button>
      </div>
      <!-- LOGIN MODAL -->
      <div v-else>
        <div i-custom:lock class="relative z-1 mx-auto mb-56 mt-60 size-120" />
        <div class="relative z-1 mb-90">
          <h4>Login</h4>
          <p>{ NIMIQ LOGIN FUNCTION GOES HERE }</p>
          <div class="mx-auto cursor-pointer nq-pill-lg nq-pill-blue" @click="login">
            LOGIN (TEST)
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-switch-enter-active,
.modal-switch-leave-active {
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease;
}
.modal-switch-enter-from {
  translate: 0% 40px;
  opacity: 0;
}
.modal-switch-leave-to {
  translate: 0% 40px;
  opacity: 0;
}
</style>
