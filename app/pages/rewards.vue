<script lang="ts" setup>
import type { Winner } from '../../server/api/winners.get'
import pageContent from '@/content/prestaking'
import gsap from 'gsap'

onMounted(() => {
  nextTick(() => {
    gsap.timeline({ })
      .fromTo('#hero-container .rays', { opacity: 0 }, { opacity: 1, delay: 0, duration: 3 })
      .fromTo('#hero', { opacity: 0 }, { opacity: 1, duration: 2 }, '-=3')
      .fromTo('#rewards', { opacity: 0, translateY: '40px' }, { translateY: 0, opacity: 1, duration: 1, clearProps: 'scale,left, transform, translate' }, '-=2')
      .fromTo('#reward-list', { opacity: 0, transform: 'translate(50%, 0%)' }, { opacity: 1, transform: 'translate(0%, 0%)', duration: 1 }, '-=1.5')
  })
})

useHead({
  title: pageContent.hero.title,
  meta: [
    { name: 'description', content: pageContent.hero.body },
  ],
})

defineOgImage({ url: '/img/open-graph/index.jpg' })

const winners = ref<{
  3: Winner[]
  1.5: Winner[]
  0.5: Winner[]
}>({
  3: [],
  1.5: [],
  0.5: [],
})
const { data, error } = await useFetch('/api/winners')

if (error.value) {
  console.error(error.value)
}
else {
  winners.value = data.value!
}
</script>

<template>
  <main>
    <Section id="hero-container" god-rays dark-mode>
      <svg width="147" height="76" viewBox="0 0 147 76" fill="none" xmlns="http://www.w3.org/2000/svg" class="md:mx-auto -mb-64">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4 10.3A30.1 30.1 0 0 0 1 19.6c-.4.4-.5 1-.3 1.5l14 37.6c.2.6.7 1 1.2 1 .5.1 1.1-.2 1.4-.6.3-.5 9.6-12.3 24.4-9.2A25.3 25.3 0 0 0 66 42.1l5.9 15.1-6.2 16c-.3.7.1 1.5.9 1.8l.5.1c.6 0 1.2-.4 1.4-1l5-12.8 5 12.8c.2.6.8 1 1.4 1h.5c.8-.4 1.2-1.2.9-2l-6.2-15.9 5.9-15a25.3 25.3 0 0 0 24.3 7.7c14.8-3 24.1 8.7 24.4 9.2.3.4.9.7 1.4.6.5 0 1-.4 1.2-1l14-37.6c.2-.5.1-1-.3-1.5a30.1 30.1 0 0 0-27.4-9.3 22.1 22.1 0 0 1-22.5-8.8c-.3-.5-.8-.7-1.4-.7-.6.1-1 .4-1.2 1l-14.4 37L73.5 53l-5.6-14.4-14.4-37c-.2-.5-.6-.8-1.2-.9-.6 0-1.1.2-1.4.7-.3.5-7.7 11.5-22.5 8.8ZM34.9 35c-4.8-.4-9.1.5-12.7 2l-4.5-11.6c3.6-1.4 7.9-2.3 12.8-1.7L34.9 35Zm16.1-.8-4.4-11.6c4.5-1.9 7.6-4.8 9.3-6.6l4.4 11.3a23.9 23.9 0 0 1-9.3 7ZM31.6 22.3l-3.6-9c5.1.8 9.5.2 13.1-1l3.6 9.5a23.4 23.4 0 0 1-13.1.5ZM50.1 36l4 10.5a22.5 22.5 0 0 1-12.2.5h-.6l-4-10.2h.1c5 1 9.2.4 12.7-.8ZM25.3 49c-4 2-7 4.5-8.7 6.3l-4-10.7c1.2-1.2 4.3-3.9 8.7-5.9l4 10.3Zm-9.5-24.4c-4 1.8-6.9 4.1-8.5 5.6L3.9 21a30 30 0 0 1 8.3-5.7l3.6 9.4ZM112.1 35c4.8-.4 9.1.5 12.7 2l4.5-11.6a26.1 26.1 0 0 0-12.8-1.7L112.1 35ZM96 34.1l4.4-11.6a27.8 27.8 0 0 1-9.3-6.6l-4.4 11.3c1.3 1.6 4.4 5 9.3 7Zm19.4-11.8 3.6-9c-5.1.8-9.5.2-13.1-1l-3.6 9.5a23.4 23.4 0 0 0 13.1.5ZM96.9 36l-4 10.5c3.3 1.1 7.2 1.5 11.7.6h.6l.5-.2 4-10h-.1c-5 .8-9.2.3-12.7-.9Zm24.8 13c4 2 7 4.5 8.7 6.3l4-10.7a31.1 31.1 0 0 0-8.7-5.9l-4 10.3Zm9.5-24.4c4 1.8 6.9 4.1 8.5 5.6l3.4-9.3a30 30 0 0 0-8.3-5.7l-3.6 9.4Z" fill="url(#a)" />
        <defs>
          <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(146 74 -60 118 .3 .5)">
            <stop stop-color="#fff" />
            <stop offset="1" stop-color="#fff" stop-opacity=".6" />
          </radialGradient>
        </defs>
      </svg>
      <Header
        id="hero"
        :title="pageContent.hero.title"
        :body="pageContent.hero.body"
        dark-mode
      />
      <RewardGrid id="rewards" />

      <Header
        :label="pageContent.communityGoals.label"
        :title="pageContent.communityGoals.title"
        :body="pageContent.communityGoals.body"
        dark-mode
      />
      <NimiqGoalBar
        :total-goal="pageContent.communityGoals.goalBar.totalGoal"
        :milestones="pageContent.communityGoals.goalBar.milestones"
        class="mb-64"
      />
    </Section>

    <Section dark-mode>
      <Header
        id="competition-winners"
        label="Competition Winners"
        title="100 lucky winners!"
        body="The randomly selected winners will be announced in 3 rounds."
        dark-mode
      />
      <div class="grid grid-cols-1 mx-auto w-full gap-24 lg:grid-cols-3 md:grid-cols-2">
        <StatBlock
          v-for="stat in pageContent.hero.prizes"
          :key="stat.value"
          dark-mode
          class="last:lg:col-span-1 last:md:col-span-2"
          stat-small="NIM"
          :stat="stat.value"
          :text="stat.text"
          :color="stat.color"
        />
      </div>

      <Header
        id="hall-of-fame"
        label="Hall of Fame"
        title="Discover the champions"
        body="Here’s our wall of fame for all the lucky winners. Browse through them, maybe you’ll find yourself or someone you know."
        dark-mode
      />
      <div>
        <div class="stat-block-container orange">
          <div class="stat w-fit flex items-center gap-x-12 rounded-full px-24 py-20 text-32 text-white font-600 leading-100% md:mx-auto lg:px-32 lg:py-24 lg:text-44">
            <span class="relative">3 Mio</span>
            <span class="text-18 font-600">NIM</span>
          </div>
          <p class="mb-40 mt-20 text-16 text-white/60 leading-none lg:mb-48 lg:mt-24 md:text-center lg:text-18">
            10 pre-stakers will get 3 Million NIM.
          </p>
        </div>
        <div class="grid grid-cols-2 mx-auto w-full gap-16 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 md:gap-24">
          <HallOfFame v-for="winner in winners[3]" :key="`winner-${winner.address}`" dark-mode :winner="winner" />
          <HallOfFame v-for="i in 10 - winners[3].length" :key="`placeholder-${i}`" dark-mode />
        </div>
      </div>
      <div>
        <div class="stat-block-container red">
          <div class="stat w-fit flex items-center gap-x-12 rounded-full px-24 py-20 text-32 text-white font-600 leading-100% md:mx-auto lg:px-32 lg:py-24 lg:text-44">
            <span class="relative">1,5 Mio</span>
            <span class="text-18 font-600">NIM</span>
          </div>
          <p class="mb-40 mt-20 text-16 text-white/60 leading-none lg:mb-48 lg:mt-24 md:text-center lg:text-18">
            25 pre-stakers will get 1,5 Million NIM.
          </p>
        </div>
        <div class="grid grid-cols-2 mx-auto w-full gap-16 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 md:gap-24">
          <HallOfFame v-for="winner in winners[1.5]" :key="`winner-${winner.address}`" dark-mode :winner="winner" />
          <HallOfFame v-for="i in 25 - winners[1.5].length" :key="`placeholder-${i}`" dark-mode />
        </div>
      </div>
      <div>
        <div class="stat-block-container blue">
          <div class="stat w-fit flex items-center gap-x-12 rounded-full px-24 py-20 text-32 text-white font-600 leading-100% md:mx-auto lg:px-32 lg:py-24 lg:text-44">
            <span class="relative">500 k</span>
            <span class="text-18 font-600">NIM</span>
          </div>
          <p class="mb-40 mt-20 text-16 text-white/60 leading-none lg:mb-48 lg:mt-24 md:text-center lg:text-18">
            65 pre-stakers will get 500k NIM.
          </p>
        </div>
        <div class="grid grid-cols-2 mx-auto w-full gap-16 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 md:gap-24">
          <HallOfFame v-for="winner in winners[0.5]" :key="`winner-${winner.address}`" dark-mode :winner="winner" />
          <HallOfFame v-for="i in 65 - winners[0.5].length" :key="`placeholder-${i}`" dark-mode />
        </div>
      </div>
    </Section>

    <!-- <Section dark-mode>
      <div>
        <SectionLabel text="What you need to know" dark-mode />
        <FAQ :faqs="pageContent.faqs" />
      </div>
    </Section> -->
  </main>
</template>

<style>
@media (max-width: 768px) {
  .grid-item:nth-child(2n-1):last-child {
    background: pink;
    grid-column: 1 / -1;
  }
}

.wrapper {
  display: grid;
  grid-template-columns:
    minmax(16px, 1fr)
    min(calc(100% - 32px), 1172px)
    minmax(16px, 1fr);
}
.wrapper > * {
  grid-column: 2;
}
.full-bleed {
  width: 100%;
  grid-column: 1 / 4;
}
</style>
