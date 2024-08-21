<script lang="ts" setup>
const ticketAmount = 0
</script>

<template>
  <div class="z-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-5 lg:mx-0 -ml-32 -mr-32 lg:rounded-16" style="grid-template-rows: repeat(5, minmax(0, max-content))">
    <div class="relative w-full overflow-hidden border-1 border-white/10 p-32 md:col-start-1 md:row-start-1 lg:col-end-2 md:col-end-2 md:col-end-3 md:row-end-4 lg:rounded-tl-16">
      <div class="god-rays">
        <img src="~/assets/God-Rays.png" alt="">
      </div>
      <div class="rewards-card-container mx-auto h-full flex flex-col items-center justify-start gap-y-32 p-32 pt-112">
        <div class="icon-shadow relative size-80">
          <img class="h-full w-full object-contain object-center" src="/assets//svg/icons/hex.svg" alt="">
        </div>
        <p class="m-0 text-center text-16 text-white/80">
          Prestake NIM to participate. The more you prestake, the higher your score.
        </p>
        <NuxtLink to="https://google.com" class="pill pill-lg pill-blue">
          Login & enter
        </NuxtLink>
      </div>
    </div>
    <div
      class="row-start-2 border-r-1 border-t-1 border-white/10 bg-[#1F2348] pt-44 lg:col-start-2 md:col-start-3 lg:col-end-4 md:col-end-6 lg:rounded-tr-16"
    >
      <div class="px-32 text-white/60 uppercase" style="letter-spacing: 0.8px;">
        Mulitplyers
      </div>
    </div>
    <div
      class="row-start-3 h-full w-full border-r-1 border-white/10 bg-[#1F2348] lg:col-start-2 md:col-start-3 lg:col-end-4 md:col-end-6"
    >
      <!-- Title -->
      <div class="no-scrollbar w-full flex gap-x-24 overflow-auto px-32 pt-32">
        <RewardCard icon="timer" :multiplyers="['1', '2', '3']" />
        <RewardCard icon="fist" :multiplyers="['5']" />
        <RewardCard icon="galex" :multiplyers="['10']" />
      </div>
    </div>
    <div class="relative col-start-1 col-end-6 h-full w-full border-1 border-white/10 bg-white/10 pb-66 pt-50 lg:col-end-4 lg:rounded-b-16">
      <h4 class="w-full text-center text-22 text-white">
        Earn tickets based on your staked amount
      </h4>
      <div class="absolute bottom-0 left-1/2 w-312 flex translate-y-1/2 items-center justify-center gap-x-12 border-6 border-[#26275E] rounded-full bg-[#51527E] px-32 py-24 text-32 text-white/60 leading-70% md:w-424 -translate-x-1/2 md:text-44">
        {{ ticketAmount }} <span class="text-17">Tickets</span>
      </div>
    </div>
  </div>
</template>

<style>

</style>
