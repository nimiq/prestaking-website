<script lang="ts" setup>
import { useUserInfo } from '@/stores/userInfo'

const emits = defineEmits(['close'])

const store = useUserInfo()

function connectGalxe() {
  store.galxeConnect()
  emits('close')
}
</script>

<template>
  <Transition name="modal-switch" mode="out-in" appear>
    <div class="relative max-w-420 overflow-hidden rounded-8 bg-white px-50 py-46 text-center">
      <!-- BG Elements and close -->
      <div i-custom:hex class="absolute size-500 opacity-30 -bottom-150 -left-250" />
      <div i-custom:hex class="absolute size-500 opacity-30 -right-300 -top-250" />
      <div i-custom:close class="absolute right-16 top-12 z-1 size-24 cursor-pointer transition-opacity hover:opacity-80" @click="$emit('close')" />
      <!--  T & C Modal -->
      <div>
        <div i-custom:galxe-dark class="relative z-1 mx-auto mb-56 mt-60 h-50 w-200 -translate-x-10" />
        <div class="relative z-1 mb-90">
          <h4>Connect to Galxe</h4>
          <p>{ FUNCTIONALITY NEEDS TO BE ADDED}</p>
        </div>
        <button class="mx-auto mb-20 scale-150 nq-pill-lg nq-pill-blue" @click="connectGalxe">
          Link
        </button>
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
