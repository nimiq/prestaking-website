<script lang="ts" setup>

</script>

<template>
  <Section god-rays dark-mode>
    <Header
      dark-mode
      label="Prestake"
      title="Join the prestake, win big and earn eternal glory"
      body="Support the network. Be among the first to earn and get a unique Identicon upgrade. Also, there is 200 Mil NIM to win."
    />
    <div class="grid grid-cols-3 grid-rows-3 w-full gap-32">
      <div class="glass-card col-span-3 row-span-2">
        <Ticket />
        <div class="mx-auto -mt-96">
          <h3 class="text-center text-white">
            Massive prizes await - for example 10 x 3,000,000 NIM
          </h3>
          <p class="text-center text-white/60">
            Win one of the 100 prizes by joining the prestake and the promoting the launch.
          </p>
        </div>
      </div>
      <div class="glass-card col-span-1 row-span-1" />
      <div class="glass-card col-span-1 row-span-1" />
      <div class="glass-card col-span-1 row-span-1" />
    </div>
    <Header
      class="my-200"
      dark-mode
      title="Nimiq needs you. Pre-stake before the 24th for bigger bonuses"
      body="Prestake from the wallet, get a guaranteed reward and join the competition for even greater prizes."
    />
    <img class="absolute bottom-0 left-1/2 -translate-x-1/2" src="~/assets/four-cards.png" alt="" srcset="">
  </Section>
</template>

<style>

</style>
