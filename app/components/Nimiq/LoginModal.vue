<script lang="ts" setup>
import type { FetchError } from 'ofetch'
import { useUserInfo } from '@/stores/userInfo'
import HubApi from '@nimiq/hub-api'
import { RESTRICTED_TERRITORY_ERROR } from '../../../server/config'

const emit = defineEmits(['close'])

let hub: HubApi | undefined

async function acceptTC() {
  hub = hub || new HubApi('https://hub.nimiq.com')
  const { address } = await hub.chooseAddress({
    appName: 'Nimiq Pre-staking',
    disableContracts: true,
  })

  // TODO: Set loading indicator

  const user = await $fetch('/api/auth/login', {
    method: 'POST',
    body: { address },
  }).catch((err: FetchError) => {
    if (err.data.statusCode === 500) {
      window.alert(err.data.message) // eslint-disable-line no-alert
    }
    else if (err.data.statusCode === 403) {
      if (err.data.message === RESTRICTED_TERRITORY_ERROR) {
        window.alert('You are accessing the pre-staking campaign page from a restricted territory. Please refer to the Pre-Staking Terms for details.') // eslint-disable-line no-alert
      }
      else {
        window.alert(err.data.message) // eslint-disable-line no-alert
      }
    }
    console.dir(err.data) // eslint-disable-line no-console
    throw err
  })

  await useUserInfo().updateStats({
    id: user.id,
    address: user.address,
    galxeUser: user.galxeUser,
  })
  emit('close')
}
</script>

<template>
  <Transition name="modal-switch" mode="out-in" appear>
    <div class="relative max-w-420 overflow-hidden rounded-t-6 bg-white px-36 py-46 text-center sm:rounded-6">
      <!-- BG Elements and close -->
      <div i-custom:hex class="absolute size-500 opacity-30 -bottom-150 -left-250" />
      <div i-custom:hex class="absolute size-500 opacity-30 -right-300 -top-250" />
      <div i-custom:close class="absolute right-16 top-12 z-1 size-24 cursor-pointer transition-opacity hover:opacity-80" @click="$emit('close')" />
      <!--  T & C Modal -->
      <div>
        <div i-custom:document class="relative z-1 mx-auto mb-56 mt-60 size-120" />
        <div class="relative z-1 mb-90">
          <h4 font-bold>
            Terms and Conditions
          </h4>
          <p mt-8 text-16 text-neutral>
            Please read the terms and conditions of the giveaway campaign before participating.
          </p>
          <!-- TODO: Add t&c here -->
          <a href="/Nimiq_Pre-staking_Campaign_ToS.pdf" target="_blank" class="mx-auto mt-24 w-fit flex items-center rounded-full px-16 py-6 text-darkblue ring-1.5 ring-darkblue/30 transition-colors md:mx-auto hover:bg-darkblue hover:text-white hover:ring-darkblue">
            <div class="i-nimiq:icons-lg-document mr-8 text-inherit" />
            <span class="text-14">Terms and Conditions</span>
          </a>
        </div>
        <button class="mx-auto px-48 py-20 tracking-widest uppercase nq-pill-lg nq-pill-blue" @click="acceptTC">
          Accept Terms
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
