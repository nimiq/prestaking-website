<script lang="ts" setup>
import gsap from 'gsap'
import Flip from 'gsap/dist/Flip'
import earlyBirdData from '~/content/rewards/earlyBird'
import galxeData from '~/content/rewards/galxe'
import underdogData from '~/content/rewards/underdog'

defineEmits(['close'])
gsap.registerPlugin(Flip)
const route = useRoute()
const router = useRouter()
onMounted(() => {
  if (!route.query.cardLevel || !route.query.tickets) {
    router.push('/')
  }
})

const cardLevel = computed(() => {
  return route.query.cardLevel ? route.query.cardLevel.toString() : 'none'
})

const earlyBirdActive = true
const underdogActive = true
const galxeActive = true

const dropdownOpen: Ref<boolean> = ref(false)
const dropdown: Ref<HTMLDivElement | null> = ref(null)
function openDropdown() {
  dropdownOpen.value = true
}
useOutsideClick(dropdown, () => {
  dropdownOpen.value = false
})

onMounted(() => {
  gsap.from('.share-scroll', { opacity: 0, translateY: '40px', duration: 0.5, delay: 0.3 })
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
    <div
      class="group relative size-full flex flex-col items-center justify-center"
    >
      <div class="no-scrollbar max-w-screen w-screen overflow-x-auto">
        <div class="share-scroll relative flex items-center justify-start gap-x-40 py-40 pl-[calc(50vw-160px)] !h-[calc(478px+80px)]">
          <TiltCardWrapper class="initial z-5 !h-478 !max-w-311 !min-w-311">
            <TiltCard :card-type="cardLevel" />
          </TiltCardWrapper>
          <TiltCardWrapper v-if="earlyBirdActive" class="initial z-4 !h-478 !min-w-311 !w-311">
            <div i-custom:time-card class="min-h-full min-w-full w-max" />
            <RewardMultiplierBadges
              :multipliers="earlyBirdData.options"
              :active="[3, 2]"
              color="#24CCA2"
            />
          </TiltCardWrapper>
          <TiltCardWrapper v-if="underdogActive" class="initial z-3 !h-478 !min-w-311 !w-311">
            <div i-custom:underdog-card class="min-h-full min-w-full w-max" />
            <RewardMultiplierBadges
              :multipliers="underdogData.options"
              :active="[3]"
              color="#F33F68"
            />
          </TiltCardWrapper>

          <TiltCardWrapper v-if="galxeActive" class="initial z-2 !h-478 !min-w-311 !w-311">
            <div i-custom:galxe-card class="min-h-full min-w-full w-max" />
            <RewardMultiplierBadges
              :multipliers="galxeData.options"
              :active="[5]"
              color="#A55AE7"
            />
          </TiltCardWrapper>
        </div>
      </div>
      <div class="mt-32 flex items-center gap-16">
        <div class="text-48 text-white font-bold">
          {{ route.query.tickets }} tickets
        </div>
        <div i-custom:tickets class="h-35 w-40" />
      </div>
      <div class="mx-auto text-white/80">
        Join the frey and prestake your NIM.
      </div>
      <div class="mx-auto mt-32 flex items-center gap-16">
        <div class="h-40 scale-105 cursor-pointer nq-pill-lg nq-pill-blue">
          Join the prestake
        </div>
        <div class="relative min-h-40 min-w-40 flex cursor-pointer items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/20" @click="openDropdown">
          <svg class="" width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M12.433 10.4649V14.6941L20.1663 7.46827L12.433 0.266602V4.37493C4.91718 5.4141 1.92051 10.5616 0.833008 15.7333C3.51551 12.1083 7.06801 10.4649 12.433 10.4649Z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.share-scroll .initial {
  @apply left-[calc(50vw-160px)] top-40 !absolute;
}
.share-scroll > div:last-of-type::before {
  @apply absolute size-[calc(50vw-160px)] left-full top-0;
  content: '';
}
</style>
