<script lang="ts" setup>
</script>

<template>
  <div class="grid grid-rows-[repeat(5,_min-content)] grid-cols-1 w-full gap-32 md:grid-rows-[repeat(3,_min-content)] md:grid-cols-3">
    <div class="glass-card col-span-1 row-span-2 md:col-span-3">
      <!-- <Ticket /> -->
      <img class="max-h-370" src="/assets/tickets.png" alt="" srcset="">
      <div class="mx-auto max-w-[480px]">
        <h3 class="mt-0 text-center text-white">
          Massive prizes await - for example 10 x 3,000,000 NIM
        </h3>
        <p class="text-center text-white/60">
          Win one of the 100 prizes by joining the prestake and the promoting the launch.
        </p>
      </div>
    </div>
    <div class="glass-card col-span-1 row-span-1">
      <!-- <SVG80Million class="h-141 w-135" /> -->
      <div class="h-136">
        <img class="mx-auto h-full object-contain object-center" src="/assets/80.png" alt="" srcset="">
      </div>
      <div class="flex flex-col text-center">
        <h4 class="my-0 text-white">
          Airdrop for all
        </h4>
        <p>Prestake and get a piece of the 100 Mil NIM airdrop. </p>
      </div>
    </div>
    <div class="glass-card col-span-1 row-span-1">
      <div class="h-136">
        <img class="mx-auto h-full w-144 object-contain object-center" src="/assets/star-wreath.png" alt="" srcset="">
      </div>
      <div class="flex flex-col text-center">
        <h4 class="my-0 text-white">
          Earn bragging rights
        </h4>
        <p>From Guardian to Hero of the Chain - earn a title and glory.</p>
      </div>
    </div>
    <div class="glass-card col-span-1 row-span-1">
      <div class="h-136">
        <img class="mx-auto h-full object-contain object-center" src="/assets/hex-star.png" alt="" srcset="">
      </div>
      <div class="flex flex-col text-center">
        <h4 class="my-0 text-white">
          Glow up your wallet
        </h4>
        <p>Get an optional upgrade of your identicon in the wallet.</p>
      </div>
    </div>
  </div>
</template>

<style>
.ticket-card-container {
  border-radius: 6px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  background: radial-gradient(
      83.64% 49.88% at 50% 0%,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      101.48% 101.48% at 50% 100%,
      rgba(31, 35, 72, 0) 0%,
      rgba(31, 35, 72, 0.15) 100%
    ),
    rgba(255, 255, 255, 0.05);
  background-blend-mode: normal, color-dodge, normal;
}
</style>
