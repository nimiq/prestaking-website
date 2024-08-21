<script lang="ts" setup>
import Svg80Million from '~/assets/svg/icons/80Million.svg'
import StarWreath from '~/assets/svg/icons/star-wreath.svg'
import HexOutlineStar from '~/assets/svg/icons/hex-outline-star.svg'
</script>

<template>
  <Section god-rays dark-mode>
    <Header
      dark-mode
      label="Prestake"
      title="Join the prestake, win big and earn eternal glory"
      body="Support the network. Be among the first to earn and get a unique Identicon upgrade. Also, there is 200 Mil NIM to win."
    />
    <div class="grid grid-rows-[repeat(5,_min-content)] grid-cols-1 w-full gap-32 md:grid-rows-[repeat(3,_min-content)] md:grid-cols-3">
      <div class="glass-card col-span-1 row-span-2 md:col-span-3">
        <Ticket />
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
          <img class="mx-auto h-full object-contain object-center" :src="Svg80Million" alt="" srcset="">
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
          <img class="mx-auto h-full w-144 object-contain object-center" :src="StarWreath" alt="" srcset="">
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
          <img class="mx-auto h-full object-contain object-center" :src="HexOutlineStar" alt="" srcset="">
        </div>
        <div class="flex flex-col text-center">
          <h4 class="my-0 text-white">
            Glow up your wallet
          </h4>
          <p>Get an optional upgrade of your identicon in the wallet.</p>
        </div>
      </div>
    </div>
    <Header
      class="my-96"
      dark-mode
      title="Nimiq needs you. Pre-stake before the 24th for bigger bonuses"
      body="Prestake from the wallet, get a guaranteed reward and join the competition for even greater prizes."
      button
      button-link="/prestaking"
      button-text="Prestaking"
    />
    <img class="absolute left-1/2 -bottom-[160px] -translate-x-1/2 md:-bottom-[200px]" src="~/assets/four-cards.png" alt="" srcset="">
  </Section>
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
