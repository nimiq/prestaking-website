<script setup lang="ts">
import pageContent from '@/content/home'
</script>

<template>
  <main>
    <div id="hero" class="relative pb-200">
      <Clock />

      <Header
        class="-mt-0 relative z-10 mx-auto"
        :title="pageContent.hero.title"
        :body="pageContent.hero.body"
        :button-link="pageContent.hero.buttonLink"
        :button-text="pageContent.hero.buttonLabel"
        button force-centered-text dark-mode
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
              <a :href="pageContent.prestakeCalculator.sidePanel.link" class="arrow-blue whitespace-nowrap text-blue font-bold arrow">{{ pageContent.prestakeCalculator.sidePanel.linkText }}</a>
            </div>
            <div class="no-scrollbar relative max-w-full flex grow overflow-x-scroll md:block md:overflow-y-scroll">
              <NimiqPoolsList />
            </div>
            <!-- Borders -->
            <div class="pointer-events-none absolute bottom-0 right-0 h-full w-10% rounded-br-8 from-white to-transparent bg-gradient-to-l md:h-[20%] md:w-[calc(100%+10px)] md:bg-gradient-to-t" />
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
        <a :href="pageContent.albatross.techSpecLink" class="mt-24 w-fit flex items-center gap-x-8 border-1 border-white/30 rounded-full px-20 py-10 text-white font-bold md:mx-auto">
          <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0308136 17.5519C0.0308136 18.9009 1.12162 19.9917 2.47888 20H13.3453C14.2446 19.9917 14.9773 19.2589 14.9856 18.3588V4.92943C14.9773 4.02182 14.2446 3.28906 13.3453 3.28823H2.47055V3.28906C2.03756 3.28074 1.67951 2.93101 1.67951 2.49802C1.67951 2.03172 2.04589 1.66535 2.51218 1.66535H13.7283C14.1863 1.66535 14.561 1.29064 14.561 0.832674C14.561 0.366377 14.1863 0 13.7283 0H2.51218C1.12994 0 0.0141602 1.11578 0.0141602 2.49802L0.0308136 17.5519ZM7.94122 12.2228H11.2719V12.222C11.6133 12.222 11.8964 12.4968 11.8964 12.8465C11.8881 13.1879 11.6133 13.4627 11.2719 13.471H7.94122C7.5915 13.471 7.31671 13.1879 7.31671 12.8465C7.31671 12.4968 7.5915 12.222 7.94122 12.222V12.2228ZM3.75203 9.12528C3.51056 8.87547 3.51889 8.47579 3.76036 8.23431C4.00184 7.99284 4.38487 7.99284 4.62634 8.23431L6.70803 10.316H6.7072C6.94867 10.5575 6.94867 10.9488 6.7072 11.1903C6.69887 11.1903 6.69887 11.1903 6.69887 11.1903L4.61718 13.272C4.37571 13.5135 3.97602 13.5218 3.72622 13.2803C3.47642 13.0388 3.46809 12.6392 3.70957 12.3894C3.70957 12.381 3.7179 12.3727 3.7179 12.3727L5.20838 10.8822C5.28332 10.799 5.28332 10.6657 5.20838 10.5825C5.20006 10.5741 5.20006 10.5741 5.20006 10.5741L3.75203 9.12528Z" fill="url(#paint0_radial_1576_49600)" />
            <defs>
              <radialGradient id="paint0_radial_1576_49600" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.8856 2.94347) rotate(60.0569) scale(16.8719 13.929)">
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0.62" />
              </radialGradient>
            </defs>
          </svg>
          <span>Technical details</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <rect x="7.98584" y="10" width="1.5" height="3.375" rx="0.75" transform="rotate(-180 7.98584 10)" fill="white" />
              <rect x="7.98584" y="5.5" width="1.5" height="1.5" rx="0.75" transform="rotate(-180 7.98584 5.5)" fill="white" />
              <path d="M6.98584 1C7.77377 1 8.55399 1.15519 9.28194 1.45672C10.0099 1.75825 10.6713 2.20021 11.2285 2.75736C11.7856 3.31451 12.2276 3.97595 12.5291 4.7039C12.8306 5.43185 12.9858 6.21207 12.9858 7C12.9858 7.78793 12.8306 8.56815 12.5291 9.2961C12.2276 10.0241 11.7856 10.6855 11.2285 11.2426C10.6713 11.7998 10.0099 12.2417 9.28194 12.5433C8.55399 12.8448 7.77377 13 6.98584 13C6.19791 13 5.41769 12.8448 4.68974 12.5433C3.96178 12.2417 3.30035 11.7998 2.7432 11.2426C2.18605 10.6855 1.74409 10.0241 1.44256 9.2961C1.14103 8.56814 0.985839 7.78793 0.98584 7C0.98584 6.21207 1.14104 5.43185 1.44256 4.7039C1.74409 3.97594 2.18605 3.31451 2.7432 2.75736C3.30035 2.20021 3.96179 1.75825 4.68974 1.45672C5.4177 1.15519 6.19791 0.999999 6.98584 1L6.98584 1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            </g>
          </svg>

        </a>
      </Header>
      <NimiqAlbatrossDemo />
    </Section>

    <hr class="border-white/10 bg-darkblue">

    <Section dark-mode god-rays>
      <Header
        dark-mode
        :label="pageContent.prestake.label"
        :title="pageContent.prestake.title"
        :body="pageContent.prestake.body"
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
      <img class="absolute left-1/2 -bottom-[160px] -translate-x-1/2 md:-bottom-[200px]" src="~/assets/img/four-cards.png" alt="" srcset="">
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
  border-radius: 6px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  background: radial-gradient(
      83.64% 49.88% at 50% 0%,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 50%
    ),
    radial-gradient(
      101.48% 101.48% at 50% 100%,
      rgba(31, 35, 72, 0) 0%,
      rgba(31, 35, 72, 0.05) 179%
    ),
    rgba(255, 255, 255, 0.05);
  background-blend-mode: normal, color-dodge, normal;

  display: flex;
  padding: 32px;
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
      background: radial-gradient(
          101.48% 101.48% at 50% 100%,
          rgba(31, 35, 72, 0) 0%,
          rgba(31, 35, 72, 0.15) 100%
        ),
        rgba(31, 35, 72, 0.01);
      opacity: 0.15;
    }
  }
}
</style>
