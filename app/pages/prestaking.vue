<script  lang="ts" setup>
import pageContent from '@/content/prestaking'
import gsap from 'gsap'

const prestaking = true

onMounted(() => {
  nextTick(() => {
    gsap.timeline({ })
      .fromTo('#hero-container .rays', { opacity: 0 }, { opacity: 1, delay: 0, duration: 3 })
      .fromTo('#hero', { opacity: 0 }, { opacity: 1, duration: 2 }, '-=3')
      .fromTo('#rewards', { opacity: 0, translateY: '40px' }, { translateY: 0, opacity: 1, duration: 1, clearProps: 'scale,left, transform, translate' }, '-=2')
      .fromTo('#reward-list', { opacity: 0, transform: 'translate(50%, 0%)' }, { opacity: 1, transform: 'translate(0%, 0%)', duration: 1 }, '-=1.5')
  })
})
</script>

<template>
  <main>
    <Section id="hero-container" god-rays dark-mode>
      <Header
        id="hero"
        :title="pageContent.hero.title"
        :body="pageContent.hero.body"
        dark-mode
      />
      <RewardGrid id="rewards" :pre-pre-staking="prestaking" />
      <div>
        <SectionLabel dark-mode text="The prizes" />
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
      </div>
      <div class="mb-40 md:mb-90">
        <SectionLabel dark-mode text="Extra Bonuses" />
        <div class="grid grid-cols-1 mx-auto w-full gap-24 lg:grid-cols-3 md:grid-cols-2">
          <div class="glass-card min-w-1/3 !flex-row">
            <NuxtImg class="h-80" src="/img/100.svg" alt="" />
            <div class="flex flex-col">
              <p class="text-white/80">
                Prestake and get a piece of the 100 Mil NIM airdrop.
              </p>
            </div>
          </div>
          <div class="glass-card min-w-1/3 !flex-row">
            <NuxtImg class="h-80" src="/img/star-wreath.png" alt="" />
            <div class="flex flex-col">
              <p class="text-white/80">
                From Guardian to Hero of the Chain - earn a title and glory.
              </p>
            </div>
          </div>
          <div class="glass-card min-w-1/3 lg:col-span-1 md:col-span-2 !flex-row lg:justify-start md:justify-center">
            <NuxtImg class="h-80" src="/img/hex-star.png" alt="" />
            <div class="flex flex-col">
              <p class="text-white/80">
                Get a shiny wallet with a unique identicon.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Header
        :title="pageContent.rules.title"
        :body="pageContent.rules.body"
        dark-mode
        title-tag="h3"
        button
        :button-text="pageContent.rules.buttonText"
        :button-link="pageContent.rules.buttonLink"
        button-arrow
      />
      <Ember class="absolute bottom-240 left-25 md:bottom-323" />
      <Ember class="hide-glow absolute bottom-223 left-325 scale-70 opacity-40" />
      <Ember class="hide-glow absolute bottom-10 right-40 scale-60 opacity-30" />
      <Ember class="absolute right-100 -bottom-100 md:right-290" />
    </Section>

    <Section>
      <Header
        :label="pageContent.communityGoals.label"
        :title="pageContent.communityGoals.title"
        :body="pageContent.communityGoals.body"
      />
      <NimiqGoalBar
        :total-goal="pageContent.communityGoals.goalBar.totalGoal"
        :milestones="pageContent.communityGoals.goalBar.milestones"
      />

      <div>
        <span class="small-label mb-24 inline-block w-full text-center text-darkblue/60">
          {{ pageContent.prestakeInfo.label }}
        </span>
        <div class="grid grid-cols-1 w-full gap-x-24 gap-y-20 lg:grid-cols-3 md:grid-cols-2">
          <InfoCard
            v-for="item in pageContent.prestakeInfo.cards"
            :key="item.icon"
            class="lg:last:col-span-1 md:last:col-span-2"
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
          />
        </div>
      </div>
      <div>
        <span class="small-label mb-24 inline-block w-full text-center text-darkblue/60">
          {{ pageContent.supportInfo.label }}
        </span>
        <div class="grid grid-cols-1 w-full gap-x-24 gap-y-20 lg:grid-cols-3 md:grid-cols-2">
          <InfoCard
            v-for="item in pageContent.supportInfo.cards"
            :key="item.icon"
            class="lg:last:col-span-1 md:last:col-span-2"
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
          />
        </div>
      </div>
    </Section>

    <hr>

    <Section class="!pt-40 xl:!pt-0">
      <div class="relative w-[calc(100%+64px)] flex justify-center -ml-32 -mr-32">
        <NuxtImg src="/img/100M.png" class="min-w-900 w-full bg-cover object-center" alt="" />
      </div>
      <Header
        class="z-5 -mt-160"
        :title="pageContent.prestakeReward.title"
        :body="pageContent.prestakeReward.body"
      />
      <div class="flex flex-col items-center justify-center gap-32 sm:flex-row">
        <p>
          100 Mil. NIM will be split<br> between all prestakers
        </p>
        <div class="i-custom:gauge-chart h-144 w-144" />

        <p class="text-gold">
          The more you prestake,<br> the bigger your cut
        </p>
      </div>
    </Section>

    <hr>

    <Section hexs>
      <Header
        :title="pageContent.walletSetup.title"
        :body="pageContent.walletSetup.body"
      />
      <div class="flex flex-col text-left md:flex-row">
        <ul class="process-list mt-24 grow self-center p-32 md:p-48">
          <li
            v-for="(item, index) in pageContent.walletSetup.instructions"
            :key="index"
          >
            <h4 class="flex flex-col gap-12 text-center md:flex-row md:gap-0">
              <span class="mr-10 inline-block aspect-[1/1] w-fit rounded-full bg-darkblue/10 px-8 py-4 text-17 text-darkblue leading-100%">
                {{ index + 1 }}
              </span>
              {{ item.title }}
            </h4>
            <p class="text-center md:text-left">
              {{ item.description }}
            </p>
          </li>
        </ul>
        <!-- </div> -->
        <div class="z-2 aspect-[3/4] w-[calc(100%+48px)] overflow-hidden rounded-12 md:m-0 -mx-24 -mt-2 md:h-fit md:max-w-440 md:w-unset md:rounded-16">
          <NuxtImg src="/img/video.png" width="874" height="1120" class="h-[110%] object-cover" alt="" />
        </div>
      </div>
      <Header
        class="mt-96"
        title="Now start the process"
        title-tag="h3"
        body="The not-for-profit Nimiq Foundation funds and supports the development and progress of the Nimiq Blockchain and Ecosystem."
        button
        button-link="https://wallet.nimiq.com"
        button-text="Go to wallet"
      />
    </Section>

    <!-- <Section god-rays dark-mode>
      <Header
        dark-mode
        :label="pageContent.prestake.label"
        :title="pageContent.prestake.title"
        :body="pageContent.prestake.body"
        :pre-pre-staking="prestaking"
      />
      <TicketSection />
      <Header
        class="my-96"
        dark-mode
        :title="pageContent.prestake.bottomHeader.title"
        :body="pageContent.prestake.bottomHeader.body"
        button
        :button-link="pageContent.prestake.bottomHeader.buttonLink"
        :button-text="pageContent.prestake.bottomHeader.buttonLabel"
      />
      <NuxtImg class="absolute left-1/2 -bottom-[160px] -translate-x-1/2 md:-bottom-[200px]" src="/img/four-cards.png" alt="" />
    </Section> -->

    <Section dark-mode>
      <div>
        <SectionLabel text="What you need to know" dark-mode />
        <FAQ :faqs="pageContent.faqs" />
      </div>
    </Section>
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

.process-list {
  @apply w-full;
  position: relative;
  li {
    @apply border-b-1 border-darkblue/10;
    padding-block: 24px;
  }
  p {
    margin: 0;
  }
  h4 {
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 12px;
  }
  &::before {
    @apply absolute pointer-events-none top-0 left-0 h-full w-full md:w-110% border-1 border-darkblue/10 rounded-b-0 rounded-12 md:rounded-b-16 md:rounded-16;
    content: '';
  }
}

.process-list li:first-child {
  padding-top: 0;
  padding-bottom: 24px;
}
.process-list li:last-child {
  border: none;
  padding-top: 24px;
  padding-bottom: 0px;
}
</style>
