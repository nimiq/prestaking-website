<script setup>
import pageContent from '@/content/prestaking'
</script>

<template>
  <main>
    <Section god-rays dark-mode>
      <Header
        :title="pageContent.hero.title"
        :body="pageContent.hero.body"
        dark-mode
      />
      <Rewards />
      <div>
        <SectionLabel dark-mode text="The prizes" />
        <div class="mx-auto w-full flex flex-wrap items-center justify-between gap-24">
          <StatBlock
            v-for="stat in pageContent.hero.prizes"
            :key="stat.value"
            dark-mode
            stat-small="NIM"
            :stat="stat.value"
            :text="stat.text"
            :color="stat.color"
          />
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
        <img src="~/assets/img/image.png" class="min-w-900 w-full bg-cover object-center" alt="">
      </div>
      <Header
        class="z-5 -mt-160"
        :title="pageContent.prestakeReward.title"
        :body="pageContent.prestakeReward.body"
      />
      <div class="flex items-center justify-center gap-32">
        <p>
          80 Mil. NIM will be split<br> between all prestakers
        </p>
        <svg width="145" height="137" viewBox="0 0 145 137" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.06">
            <mask id="path-1-outside-1_1628_19428" maskUnits="userSpaceOnUse" x="-0.0156309" y="-0.371099" width="112" height="137" fill="black">
              <rect fill="white" x="-0.0156309" y="-0.371099" width="112" height="137" />
              <path d="M110.813 17.6483C111.229 17.1516 111.165 16.4102 110.661 16.0021C101.051 8.21922 89.4746 3.22934 77.2014 1.59173C64.5399 -0.0976743 51.6591 1.85037 40.0635 7.2083C28.4679 12.5662 18.6361 21.1129 11.7165 31.85C4.79692 42.5871 1.07519 55.0714 0.986012 67.8447C0.896837 80.6181 4.4439 93.1531 11.2129 103.986C17.9819 114.818 27.6934 123.502 39.2131 129.021C50.7328 134.54 63.5851 136.668 76.2689 135.155C88.5638 133.689 100.208 128.862 109.927 121.214C110.436 120.813 110.511 120.072 110.101 119.57L86.0585 90.0904C85.6487 89.5879 84.9105 89.5151 84.3907 89.9026C80.6193 92.7139 76.171 94.4924 71.4867 95.0509C66.4132 95.6559 61.2723 94.8049 56.6644 92.5971C52.0565 90.3894 48.1719 86.9162 45.4643 82.5831C42.7567 78.25 41.3379 73.236 41.3736 68.1267C41.4092 63.0173 42.8979 58.0236 45.6658 53.7288C48.4336 49.4339 52.3663 46.0153 57.0046 43.8721C61.6428 41.7289 66.7951 40.9497 71.8597 41.6255C76.5358 42.2494 80.9588 44.0898 84.6905 46.9535C85.2049 47.3482 85.944 47.2857 86.3608 46.789L110.813 17.6483Z" />
            </mask>
            <path d="M110.813 17.6483C111.229 17.1516 111.165 16.4102 110.661 16.0021C101.051 8.21922 89.4746 3.22934 77.2014 1.59173C64.5399 -0.0976743 51.6591 1.85037 40.0635 7.2083C28.4679 12.5662 18.6361 21.1129 11.7165 31.85C4.79692 42.5871 1.07519 55.0714 0.986012 67.8447C0.896837 80.6181 4.4439 93.1531 11.2129 103.986C17.9819 114.818 27.6934 123.502 39.2131 129.021C50.7328 134.54 63.5851 136.668 76.2689 135.155C88.5638 133.689 100.208 128.862 109.927 121.214C110.436 120.813 110.511 120.072 110.101 119.57L86.0585 90.0904C85.6487 89.5879 84.9105 89.5151 84.3907 89.9026C80.6193 92.7139 76.171 94.4924 71.4867 95.0509C66.4132 95.6559 61.2723 94.8049 56.6644 92.5971C52.0565 90.3894 48.1719 86.9162 45.4643 82.5831C42.7567 78.25 41.3379 73.236 41.3736 68.1267C41.4092 63.0173 42.8979 58.0236 45.6658 53.7288C48.4336 49.4339 52.3663 46.0153 57.0046 43.8721C61.6428 41.7289 66.7951 40.9497 71.8597 41.6255C76.5358 42.2494 80.9588 44.0898 84.6905 46.9535C85.2049 47.3482 85.944 47.2857 86.3608 46.789L110.813 17.6483Z" fill="#1F2348" />
            <path d="M110.813 17.6483C111.229 17.1516 111.165 16.4102 110.661 16.0021C101.051 8.21922 89.4746 3.22934 77.2014 1.59173C64.5399 -0.0976743 51.6591 1.85037 40.0635 7.2083C28.4679 12.5662 18.6361 21.1129 11.7165 31.85C4.79692 42.5871 1.07519 55.0714 0.986012 67.8447C0.896837 80.6181 4.4439 93.1531 11.2129 103.986C17.9819 114.818 27.6934 123.502 39.2131 129.021C50.7328 134.54 63.5851 136.668 76.2689 135.155C88.5638 133.689 100.208 128.862 109.927 121.214C110.436 120.813 110.511 120.072 110.101 119.57L86.0585 90.0904C85.6487 89.5879 84.9105 89.5151 84.3907 89.9026C80.6193 92.7139 76.171 94.4924 71.4867 95.0509C66.4132 95.6559 61.2723 94.8049 56.6644 92.5971C52.0565 90.3894 48.1719 86.9162 45.4643 82.5831C42.7567 78.25 41.3379 73.236 41.3736 68.1267C41.4092 63.0173 42.8979 58.0236 45.6658 53.7288C48.4336 49.4339 52.3663 46.0153 57.0046 43.8721C61.6428 41.7289 66.7951 40.9497 71.8597 41.6255C76.5358 42.2494 80.9588 44.0898 84.6905 46.9535C85.2049 47.3482 85.944 47.2857 86.3608 46.789L110.813 17.6483Z" stroke="#1F2348" stroke-width="1.56545" mask="url(#path-1-outside-1_1628_19428)" />
          </g>
          <path d="M120.183 17.6469C120.6 17.1502 121.341 17.0846 121.831 17.51C129.007 23.748 134.784 31.4386 138.776 40.0781C142.932 49.073 145.051 58.8746 144.982 68.7831C144.913 78.6917 142.657 88.4627 138.375 97.3987C134.263 105.982 128.38 113.591 121.117 119.728C120.622 120.147 119.882 120.071 119.472 119.568L95.4291 90.089C95.0193 89.5865 95.0963 88.8488 95.5804 88.4175C98.2414 86.0467 100.408 83.1685 101.952 79.9474C103.664 76.373 104.567 72.4646 104.594 68.5012C104.622 64.5378 103.774 60.6171 102.112 57.0192C100.614 53.7769 98.487 50.8687 95.8594 48.461C95.3813 48.0229 95.3146 47.2842 95.7314 46.7875L120.183 17.6469Z" fill="url(#paint0_radial_1628_19428)" />
          <path d="M120.42 76H118.28L126.6 61.9H128.74L120.42 76ZM118.44 70.32C117.307 70.32 116.42 69.9333 115.78 69.16C115.14 68.3867 114.82 67.3333 114.82 66C114.82 64.6533 115.14 63.6 115.78 62.84C116.433 62.08 117.32 61.7 118.44 61.7C119.573 61.7 120.46 62.0867 121.1 62.86C121.74 63.6333 122.06 64.68 122.06 66C122.06 67.3333 121.74 68.3867 121.1 69.16C120.46 69.9333 119.573 70.32 118.44 70.32ZM118.44 68.72C118.933 68.72 119.313 68.5 119.58 68.06C119.86 67.62 120 66.9333 120 66C120 65.0533 119.86 64.3733 119.58 63.96C119.313 63.5333 118.933 63.32 118.44 63.32C117.947 63.32 117.56 63.5267 117.28 63.94C117.013 64.3533 116.88 65.04 116.88 66C116.88 66.96 117.013 67.6533 117.28 68.08C117.56 68.5067 117.947 68.72 118.44 68.72ZM128.58 76.2C127.447 76.2 126.56 75.8133 125.92 75.04C125.28 74.2533 124.96 73.1933 124.96 71.86C124.96 70.5133 125.28 69.4667 125.92 68.72C126.573 67.96 127.46 67.58 128.58 67.58C129.713 67.58 130.6 67.9667 131.24 68.74C131.88 69.5 132.2 70.54 132.2 71.86C132.2 73.1933 131.88 74.2533 131.24 75.04C130.6 75.8133 129.713 76.2 128.58 76.2ZM128.58 74.58C129.073 74.58 129.453 74.3667 129.72 73.94C130 73.5 130.14 72.8067 130.14 71.86C130.14 70.9133 130 70.2333 129.72 69.82C129.453 69.3933 129.073 69.18 128.58 69.18C128.087 69.18 127.7 69.3933 127.42 69.82C127.153 70.2333 127.02 70.9133 127.02 71.86C127.02 72.82 127.153 73.5133 127.42 73.94C127.7 74.3667 128.087 74.58 128.58 74.58Z" fill="white" />
          <defs>
            <radialGradient id="paint0_radial_1628_19428" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(144.983 119.999) rotate(-180) scale(49.8194 102.771)">
              <stop stop-color="#EC991C" />
              <stop offset="1" stop-color="#E9B213" />
            </radialGradient>
          </defs>
        </svg>

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
        <div class="z-2 aspect-[3/4] w-[calc(100%+48px)] overflow-hidden rounded-12 md:m-0 -ml-24 -mr-24 -mt-2 md:h-fit md:max-w-440 md:w-unset md:rounded-16">
          <img src="/video.png" class="h-[110%] w-full object-cover" alt="" srcset="">
        </div>
      </div>
      <Header
        class="mt-96"
        title="Now start the process"
        title-tag="h3"
        body="The not-for-profit Nimiq Foundation funds and supports the development and progress of the Nimiq Blockchain and Ecosystem."
        button
        button-link="/"
        button-text="Go to wallet"
      />
    </Section>

    <Section god-rays dark-mode>
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
