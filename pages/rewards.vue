<script setup>
// User? or shared account (changes ui shown after sign in)
const accountType = ref('user')

const userInfo = ref(null)

function setUser(user) {
  userInfo.value = user
  accountType.value = user.accountType
}
</script>

<template>
  <div class="grid grid-rows-[min-content_1fr] grid-cols-1 min-h-screen bg-darkblue px-16 md:grid-cols-2 md:grid-rows-1 md:px-0">
    <div class="h-full w-full flex items-center justify-center pt-160 md:pt-0">
      <div v-if="!userInfo" class="mx-auto h-fit max-w-412 flex flex-col items-start gap-16 text-center md:text-start">
        <h1 class="my-0 text-40 text-white font-bold md:text-64">
          Are you worthy?
        </h1>
        <p class="text-24 opacity-60">
          The Nimiq community salutes you. May your rewards be plenty and your keys in self-custody.
        </p>
      </div>

      <div v-else-if="accountType === 'user'" class="max-w-420">
        <div class="w-fit border border-white/15 rounded-full px-12 py-9">
          <p class="m-0">
            50% currently staked <a class="text-lightblue" href="/">Stake all</a>
          </p>
        </div>
        <h1 class="my-16 text-64 text-white">
          Protector of the Chain
        </h1>
        <p class="text-24 opacity-60">
          The Nimiq community salutes you. May your rewards be plenty and your keys in self-custody.
        </p>
        <a href="./" class="mt-32 h-48 pl-20 pr-8 font-400 pill-lg pill-green">You are now a Protector <span class="ml-16 rounded-full bg-white px-12 py-6 text-darkblue">Share</span></a>
      </div>

      <div v-else-if="accountType === 'shared'" class="max-w-420">
        <h1 class="my-16 text-64 text-white">
          Protector of the Chain
        </h1>
        <p class="text-24 opacity-60">
          The Nimiq community salutes you. May your rewards be plenty and your keys in self-custody.
        </p>
        <a href="./" class="mt-32 h-48 pl-20 pr-8 font-400 pill-lg pill-green">Become a Protector too</a>
      </div>
    </div>

    <div class="hex-background relative h-full min-h-700 w-full flex items-center justify-center overflow-visible">
      <!-- Login Form, hide if logged in -->
      <NIMAuth v-if="!userInfo" @user-authenticated="setUser" />
      <!-- Logged In -> show Card -->
      <div v-else class="z-2">
        <NIMCard
          class="w-400"
          img="/Card.png"
          foil="/shaded-mask.png"
          mask="/shaded-foil.png"
        />
        <!-- <img class="w-500" src="/placeholder-card.png" alt=""> -->
      </div>
    </div>
  </div>
</template>

<style>
.hex-background::before {
  content: ''; /* empty but necessary */
  position: absolute;
  background: url('/hex-bg-dark.svg');
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
}
@media (max-width: 768px) {
  .hex-background::before {
    bottom: 0;
    top: auto;
    left: -16px;
    height: 70vh;
    width: 70vh;
    transform: rotate(90deg);
  }
}
</style>
