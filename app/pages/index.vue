<script setup lang="ts">
import gsap from 'gsap'
import pageContent from '~/content/home'

const prestaking = true

onMounted(() => {
  nextTick(() => {
    gsap.timeline()
      .fromTo('#hero', { translateY: '-40px', opacity: 0 }, { translateY: '0', opacity: 1, delay: 0.5, duration: 0.5 })
  })
})
</script>

<template>
  <main>
    <div id="hero-container" class="relative overflow-hidden bg-darkblue pb-200">
      <Clock />

      <Header
        id="hero"
        class="relative z-10 mx-auto"
        :title="pageContent.hero.title"
        title-tag="h1"
        :body="pageContent.hero.body"
        :button-link="pageContent.hero.buttonLink"
        :button-text="pageContent.hero.buttonLabel"
        button force-centered-text dark-mode
        :pre-pre-staking="prestaking"
      />
    </div>

    <Section>
      <Header
        :title="pageContent.cryptoStats.title"
        :body="pageContent.cryptoStats.body"
      />

      <div>
        <SectionLabel :text="pageContent.cryptoStats.statBlockLabel" />
        <div class="mx-auto w-full flex flex-wrap items-center justify-between gap-20 *:min-w-342 md:gap-24">
          <StatBlock
            v-for="stat in pageContent.cryptoStats.stats"
            :key="stat.value"
            :stat="stat.value" :text="stat.text" :color="stat.color"
          />
        </div>
      </div>

      <div>
        <SectionLabel :text="pageContent.prestakeCalculator.label" />
        <div class="grid grid-cols-3 grid-rows-5 h-493 w-full md:grid-rows-3">
          <NimiqPrestakingCalculator />
          <!-- Side Bar -->
          <div class="relative col-span-3 row-span-2 h-fit flex flex-col md:col-span-1 md:row-span-3 md:h-auto">
            <div class="border-b-1 border-darkblue/10 p-32">
              <h3 class="mb-12 mt-0">
                {{ pageContent.prestakeCalculator.sidePanel.title }}
              </h3>
              <p>{{ pageContent.prestakeCalculator.sidePanel.body }}</p>
              <a :href="pageContent.prestakeCalculator.sidePanel.link" class="mt-16 block whitespace-nowrap text-blue font-bold nq-arrow">{{ pageContent.prestakeCalculator.sidePanel.linkText }}</a>
            </div>
            <div class="no-scrollbar relative max-w-full flex grow overflow-x-scroll pb-24 md:block md:overflow-y-scroll">
              <NimiqPoolsList />
            </div>
            <!-- Borders -->
            <div class="pointer-events-none absolute bottom-0 right-0 h-full w-32 rounded-br-8 from-white to-transparent bg-gradient-to-l md:h-64 md:w-[calc(100%+10px)] md:bg-gradient-to-t" />
            <div class="pointer-events-none absolute right-0 z-2 h-[calc(100%+10px)] w-full border-1 border-darkblue/10 rounded-b-8 -top-10 md:top-0 md:h-full md:w-[calc(100%+10px)] md:rounded-r-8" />
          </div>
        </div>
      </div>
    </Section>

    <hr>

    <Section dark-mode>
      <Header
        dark-mode
        :label="pageContent.albatross.label"
        :title="pageContent.albatross.title"
        :body="pageContent.albatross.body"
      >
        <NimiqAlbatrossDetails />
      </Header>
      <NimiqAlbatrossLiveview />
    </Section>

    <hr class="border-white/10 bg-darkblue">

    <Section dark-mode god-rays>
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
      <NuxtImg class="absolute left-1/2 w-800 scale-120 -bottom-[160px] -translate-x-1/2 md:-bottom-[200px]" src="/img/four-cards.png" alt="" />
      <Ember class="absolute bottom-460 left-25 md:bottom-323" />
      <Ember class="hide-glow absolute bottom-423 left-325 scale-70 opacity-40" />
      <Ember class="hide-glow absolute bottom-270 right-40 scale-60 opacity-30" />
      <Ember class="absolute bottom-0 right-100 md:right-290" />
    </Section>

    <Section dark-mode>
      <div>
        <SectionLabel text="What you need to know" dark-mode />
        <FAQ :faqs="pageContent.faqs" />
      </div>
    </Section>
  </main>
</template>

<style>
.glass-card {
  @apply p-24 md:p-32;
  border-radius: 6px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  background: radial-gradient(83.64% 49.88% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%),
    rgba(255, 255, 255, 0.05);
  background-blend-mode: normal, color-dodge, normal;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  &.glass-clear {
    position: relative;
    border-radius: 12px;
    border: 1px solid rgba(31, 34, 52, 0.15);

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 12px;
      background: radial-gradient(101.48% 101.48% at 50% 100%, rgba(31, 35, 72, 0) 0%, rgba(31, 35, 72, 0.15) 100%),
        rgba(31, 35, 72, 0.01);
      opacity: 0.15;
      pointer-events: none;
    }
  }
}
</style>
