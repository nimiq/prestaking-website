<script lang="ts" setup>
const ticketAmount = 0
</script>

<template>
  <div class="z-5 grid grid-cols-3 rounded-16" style="grid-template-rows: repeat(5, minmax(0, max-content))">
    <div class="relative col-start-1 row-start-1 col-end-2 row-end-4 h-full w-full overflow-hidden border-1 border-white/10 rounded-tl-16 p-32">
      <div class="god-rays">
        <img src="~/assets/God-Rays.png" alt="">
      </div>
      <div class="rewards-card-container h-full flex flex-col items-center justify-start gap-y-32 p-32 pt-112">
        <div class="icon-shadow relative size-80">
          <!-- <svg class="size-80" xmlns="http://www.w3.org/2000/svg" viewBox="45 45 90 70" fill="none">
            <path opacity="0.8" d="M134.495 76.25L115.745 43.75C114.395 41.425 111.92 40 109.245 40H71.7445C69.0695 40 66.5945 41.425 65.257 43.75L46.507 76.25C45.1695 78.575 45.1695 81.425 46.507 83.75L65.257 116.25C66.5945 118.575 69.0695 120 71.7445 120H109.245C111.92 120 114.395 118.575 115.732 116.25L134.482 83.75C135.832 81.425 135.832 78.575 134.495 76.25Z" fill="white" />
          </svg> -->
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
      class="col-start-2 col-end-4 border-r-1 border-t-1 border-white/10 rounded-tr-16 bg-[#1F2348] pt-44"
    >
      <div class="px-32 text-white/60 uppercase" style="letter-spacing: 0.8px;">
        Mulitplyers
      </div>
    </div>
    <div
      class="col-start-2 col-end-4 h-full w-full border-r-1 border-white/10 bg-[#1F2348]"
    >
      <!-- Title -->
      <div class="no-scrollbar w-full flex gap-x-24 overflow-auto px-32 pt-32">
        <RewardCard icon="timer" :multiplyers="['1', '2', '3']" />
        <RewardCard icon="fist" :multiplyers="['5']" />
        <RewardCard icon="galex" :multiplyers="['10']" />
      </div>
    </div>
    <div class="relative col-start-1 col-end-4 h-full w-full border-1 border-white/10 rounded-b-16 bg-white/10 pb-66 pt-50">
      <div class="w-full text-center text-22 text-white">
        Earn tickets based on your staked amount
      </div>
      <div class="absolute bottom-0 left-1/2 w-424 flex translate-y-1/2 items-center justify-center gap-x-12 border-6 border-[#26275E] rounded-full bg-[#51527E] px-32 py-24 text-44 text-white/60 leading-70% -translate-x-1/2">
        {{ ticketAmount }} <span class="text-17">Tickets</span>
      </div>
    </div>
  </div>
</template>

<style>

</style>
