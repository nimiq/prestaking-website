<script setup>
const emit = defineEmits(['userAuthenticated'])
// Track state of page
const stage = ref('entry')

// User? or shared account (changes ui shown after sign in)
// const accountType = ref('user')

// NIM Auth API logic here
function checkLoginDetails() {
  stage.value = 'logged in'
  const user = {
    number: 'lkj7a6sd98',
    accountType: 'user',
  }
  emit('userAuthenticated', user)
}
</script>

<template>
  <div
    class="z-5 mx-auto h-480 w-322 flex items-end border-24 border-white rounded-2xl bg-darkblue p-24"
    :class="{ 'items-end': stage === 'entry', 'items-center': stage === 'login' }"
  >
    <a v-if="stage === 'entry'" class="mx-auto font-400 arrow pill-lg pill-blue" @click="stage = 'login'">Claim your reward</a>
    <div v-else-if="stage === 'login'">
      <p>Enter your NIM address and find out</p>
      <!-- NIM ADDRESS LOGIN SHOULD GO HERE -->
      <div class="h-107 w-205 border-2 border-white rounded-8" />
      <a class="mt-auto self-end font-400 arrow pill-lg pill-blue" @click="checkLoginDetails">Ask the blockchain</a>
    </div>
  </div>
</template>
