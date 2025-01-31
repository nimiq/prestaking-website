<script setup lang="ts">
import gsap from 'gsap'
import pageContent from '~/content/home'

onMounted(() => {
  gsap.timeline()
    .fromTo('#hero', { translateY: '-40px', opacity: 0 }, { translateY: '0', opacity: 1, delay: 0.5, duration: 0.5 })
})

useHead({
  title: pageContent.hero.title,
  meta: [
    { name: 'description', content: pageContent.hero.body },
  ],
})

defineOgImage({ url: '/img/open-graph/index.jpg' })
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
        dark-mode button force-centered-text
        pre-pre-staking="Migration successful"
      />
    </div>

    <Section overlap-element>
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
    </Section>
    <Section dark-mode>
      <InHonour :content="pageContent.inHonour" />
    </Section>
    <Section dark-mode god-rays>
      <Header
        dark-mode
        :label="pageContent.prestake.label"
        :title="pageContent.prestake.title"
        :body="pageContent.prestake.body"
        pre-pre-staking="Pre-staking successful"
      />
      <TicketSection />
      <!-- <Ember class="absolute bottom-575 left-25 md:bottom-323 sm:bottom-460" />
      <Ember class="hide-glow absolute bottom-423 left-325 scale-70 opacity-40" />
      <Ember class="hide-glow absolute bottom-270 right-40 scale-60 opacity-30" />
      <Ember class="absolute bottom-0 right-100 md:right-290" /> -->
    </Section>

    <!-- <Section id="faq" dark-mode class="border-t-1 border-t-white/10 !pb-0">
      <Header
        dark-mode
        title="What you need to know"
      />
      <div v-for="topic in pageContent.faqs" :key="topic.label">
        <SectionLabel :text="topic.label" dark-mode />
        <FAQ :faqs="topic.faqs" />
      </div>
    </Section> -->
  </main>
</template>

<style>
#hero {
  opacity: 0;
}
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
