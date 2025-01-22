<script lang="ts" setup>
</script>

<template>
  <div class="grid grid-rows-[repeat(5,_min-content)] grid-cols-1 w-full gap-32 md:grid-rows-[repeat(3,_min-content)] md:grid-cols-3">
    <div class="glass-card col-span-1 row-span-2 md:col-span-3">
      <!-- <Ticket /> -->
      <NuxtImg class="max-h-370" src="/img/tickets.png" alt="" />
      <div class="mx-auto max-w-[480px]">
        <h3 class="mt-0 text-center text-white">
          The winners of the massive give-away will soon be announced
        </h3>
        <p class="text-center text-white/80">
          100 pre-stakers will win substantial NIM rewards,<br>like 10 x 3 Million NIM.
        </p>

        <nuxt-link to="/rewards" class="mt-32 text-20 transition-all nq-pill-lg nq-pill-blue md:mx-auto">
          Rewards page
        </nuxt-link>
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
