<script lang="ts" setup>
import gsap from 'gsap'
import Flip from 'gsap/dist/Flip'
import earlyBirdData from '~/content/rewards/earlyBird'
import galxeData from '~/content/rewards/galxe'
import underdogData from '~/content/rewards/underdog'
import { formatNumber } from '../../lib/number-formatting'

gsap.registerPlugin(Flip)

const userId = useRoute().params.userId
if (typeof userId !== 'string')
  throw new Error('Invalid userId')

const { data, error } = await useFetch('/api/share', {
  params: { userId },
})
if (!data.value || error.value) {
  throw error.value || new Error('Fetch failed')
}
const user = data.value

const cardLevel = getUserPrestakeCardType(user.stake)

const earlyBirdActive = user.stats.earlyBirdMultipliers.length > 0
const underdogActive = user.stats.underdogMultiplier > 0
const galxeActive = user.stats.galxeMultiplier > 0

// const dropdownOpen: Ref<boolean> = ref(false)
// const dropdown: Ref<HTMLDivElement | null> = ref(null)
// function openDropdown() {
//   dropdownOpen.value = true
// }
// useOutsideClick(dropdown, () => {
//   dropdownOpen.value = false
// })

useHead({
  title: `I already have ${formatNumber(user.totalPoints)} points for the giveaway`,
  meta: [
    { name: 'description', content: `Join the pre-stake for Nimiq's migration to Proof of Stake and win a share of 200 million NIM in rewards! (Ends Nov 10th)` },
  ],
})

onMounted(() => {
  gsap.fromTo(
    '.share-scroll',
    { opacity: 0, translateY: '40px' },
    { opacity: 1, translateY: 0, duration: 0.5, delay: 0.3 },
  )
  setTimeout(() => {
    const state = Flip.getState('.share-scroll > div')

    document.querySelectorAll('.share-scroll > div').forEach((el) => {
      el.classList.toggle('initial')
    })

    Flip.from(state, {
      duration: 0.5,
      absolute: true,
      delay: 0.5,
    })
  }, 500)
})
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center bg-darkblue/95 px-16">
    <NuxtImg src="/img/glowing-hex-bg.webp" class="absolute bottom-0 left-0 size-full max-h-1000 object-cover object-top" />
    <div
      class="group relative size-full flex flex-col items-center justify-center"
    >
      <div class="no-scrollbar max-w-screen w-screen overflow-x-auto">
        <div class="share-scroll relative flex items-center justify-start gap-x-40 py-40 pl-[calc(50vw-160px)] opacity-0 !h-[calc(478px+80px)]">
          <TiltCardWrapper class="initial z-5 !h-478 !max-w-311 !min-w-311">
            <TiltCard :card-type="cardLevel" :identicon-svg="user.identicon" />
          </TiltCardWrapper>
          <TiltCardWrapper v-if="earlyBirdActive" class="initial z-4 !h-478 !min-w-311 !w-311">
            <div i-custom:time-card class="min-h-full min-w-full w-max" />
            <RewardMultiplierBadges
              :multipliers="earlyBirdData.options"
              :active="user.stats.earlyBirdMultipliers"
              color="#24CCA2"
            />
          </TiltCardWrapper>
          <TiltCardWrapper v-if="underdogActive" class="initial z-3 !h-478 !min-w-311 !w-311">
            <div i-custom:underdog-card class="min-h-full min-w-full w-max" />
            <RewardMultiplierBadges
              :multipliers="underdogData.options"
              :active="[user.stats.underdogMultiplier]"
              color="#F33F68"
            />
          </TiltCardWrapper>

          <TiltCardWrapper v-if="galxeActive" class="initial z-2 !h-478 !min-w-311 !w-311">
            <div i-custom:galxe-card class="min-h-full min-w-full w-max" />
            <RewardMultiplierBadges
              :multipliers="galxeData.options"
              :active="[user.stats.galxeMultiplier]"
              color="#A55AE7"
            />
          </TiltCardWrapper>

          <div class="initial tilt-card-container z-1 !h-478 !min-w-[calc(50vw-200px)]" />
        </div>
      </div>
      <div class="mt-32 flex items-center gap-16">
        <div class="text-48 text-white font-bold">
          {{ formatNumber(user.totalPoints) }}
        </div>
        <div i-custom:tickets class="h-35 w-40" />
      </div>
    </div>
  </div>
</template>

<style>
.share-scroll .initial {
  @apply left-[calc(50vw-160px)] top-40 !absolute;
}
/* .share-scroll > div:last-of-type::before {
  @apply absolute size-[calc(50vw-160px)] left-full top-0;
  content: '';
} */
</style>
