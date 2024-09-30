<script lang="ts" setup>
</script>

<template>
  <div class="grid grid-rows-[repeat(5,_min-content)] grid-cols-1 w-full gap-32 md:grid-rows-[repeat(3,_min-content)] md:grid-cols-3">
    <div class="glass-card col-span-1 row-span-2 md:col-span-3">
      <!-- <Ticket /> -->
      <NuxtImg class="max-h-370" src="/img/tickets.png" alt="" />
      <div class="mx-auto max-w-[480px]">
        <h3 class="mt-0 text-center text-white">
          Massive giveaways await - for example 10 x 3'000'000 NIM
        </h3>
        <p class="text-center text-white/80">
          Win one of the 100 giveaways in NIM by joining the pre-stake and promoting the launch.
        </p>
      </div>
    </div>
    <div class="glass-card col-span-1 row-span-1">
      <NuxtImg class="h-136" src="/img/200.svg" alt="" />
      <div class="flex flex-col text-center">
        <h4 class="my-0 text-white">
          Rewards for all
        </h4>
        <p class="mt-8 text-balance text-white/80">
          Prestake and get a piece of the 200&nbsp;Mil&nbsp;NIM rewards.
        </p>
      </div>
    </div>
    <div class="glass-card col-span-1 row-span-1">
      <NuxtImg class="h-136" src="/img/star-wreath.png" alt="" />
      <div class="flex flex-col text-center">
        <h4 class="my-0 text-white">
          Earn bragging rights
        </h4>
        <p class="mt-8 text-balance text-white/80">
          From Guardian to Hero of the Chain - earn a title and glory.
        </p>
      </div>
    </div>
    <div class="glass-card col-span-1 row-span-1">
      <NuxtImg class="h-136" src="/img/hex-star.png" alt="" />
      <div class="flex flex-col text-center">
        <h4 class="my-0 text-white">
          Glow up your wallet
        </h4>
        <p class="mt-8 text-balance text-white/80">
          Get an optional upgrade of your identicon in the wallet.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.ticket-card-container {
  border-radius: 6px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  background: radial-gradient(83.64% 49.88% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%),
    radial-gradient(101.48% 101.48% at 50% 100%, rgba(31, 35, 72, 0) 0%, rgba(31, 35, 72, 0.15) 100%),
    rgba(255, 255, 255, 0.05);
  background-blend-mode: normal, color-dodge, normal;
}
</style>
