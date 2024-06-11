<script setup lang="ts">
// const { consensus, head } = storeToRefs(useNimiqNetwork())

// const { share } = useShare()
// function startShare() {
//   share({
//     title: 'Hello',
//     text: 'Hello my friend!',
//     url: location.href,
//   })
// }
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <Clock />

  <div class="relative mx-16 mx-auto mb-40 box-border block max-w-1440 w-auto overflow-hidden rounded-24 bg-white shadow">
    <AutoScrollBanner>
      June 22nd - Nimiq 2.0 Launch
    </AutoScrollBanner>

    <div class="mx-auto max-w-1172 px-80 pb-96 pt-160">
      <h1 class="mb-32 mt-0">
        Nimiq 2.0 goes live on June 22nd
      </h1>
      <p class="text-32 text-neutral-600 leading-140%">
        Switching from Proof-of-Work to the new Proof-of-Stake network. Your wallet and exchanges keep their addresses. No action required.
      </p>
    </div>

    <div class="flex items-center border-y">
      <div class="w-1/2 flex items-center justify-between px-48 py-40">
        <StatBlock class="text-red">
          <template #icon>
            <div i-nimiq:hamburger-menu class="text-48" />
          </template>
          <template #stat>
            60%
          </template>
          <template #text>
            faster transactions
          </template>
        </StatBlock>
        <StatBlock class="text-lightblue">
          <template #icon>
            <div i-nimiq:hamburger-menu class="text-48" />
          </template>
          <template #stat>
            60%
          </template>
          <template #text>
            faster transactions
          </template>
        </StatBlock>
        <StatBlock class="text-green">
          <template #icon>
            <div i-nimiq:hamburger-menu class="text-48" />
          </template>
          <template #stat>
            60%
          </template>
          <template #text>
            faster transactions
          </template>
        </StatBlock>
      </div>

      <div class="w-1/2 flex items-center justify-between gap-x-28 border-l px-48 py-40">
        <div i-nimiq:icons-lg-seeding text-64 text-green />
        <div class="shrink text-24 text-green">
          and the easiest, most accessible staking ever.
        </div>
        <div grow>
          <a href="./" class="arrow pill-lg pill-green">Join the prestake</a>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col items-center border-b px-80 py-160">
      <p w-fit text-12 label>
        MIGRATION TIMETABLE
      </p>
      <div class="h-380 w-full content-center border-1">
        <h1 mx-auto w-fit>
          Timetable
        </h1>
      </div>
    </div>

    <div class="w-full flex flex-col items-center px-80 py-160">
      <div class="mb-96 max-w-1168 max-w-840 text-center">
        <p w-full text-12 label>
          Staking
        </p>
        <h2 my-16>
          You’ve never got so much for so little.
        </h2>
        <p class="text-24 text-neutral-600 leading-140%">
          You only need 1,000 NIM to start staking with the wallet. Get rewards while securing the network. Join the prestake to be amongst the first.
        </p>
      </div>
      <div class="grid grid-cols-4 grid-rows-4 h-800 w-full gap-32">
        <div class="col-span-3 row-span-3 rounded-8 bg-green" />
        <div class="col-span-1 row-span-3 rounded-8 bg-neutral-400" />
        <div class="col-span-4 row-span-1 rounded-8 bg-gold" />
      </div>
    </div>

    <div class="w-full flex flex-col items-center bg-darkblue px-80 py-160">
      <div class="mb-96 max-w-1168 max-w-840 text-center">
        <p w-full text-12 label>
          Albatross
        </p>
        <h2 my-16 text-white>
          The powerhouse behind
        </h2>
        <p class="text-24 text-neutral-600 leading-140%">
          Take a deep dive into Albatross, the optimistic consensus algo, developed by Nimiq and designed for single-chain performance and easy staking.
        </p>
      </div>
      <div class="grid grid-cols-6 grid-rows-4 h-800 w-full gap-32">
        <div class="col-span-2 row-span-1 rounded-8 bg-neutral-700" />
        <div class="col-span-2 row-span-1 rounded-8 bg-neutral-700" />
        <div class="col-span-2 row-span-4 rounded-8 bg-neutral-700" />
        <div class="col-span-4 row-span-3 rounded-8 bg-neutral-700" />
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-1440 w-full flex flex-col items-center px-80 py-160">
    <div class="mb-96 max-w-1168 max-w-840 text-center">
      <p w-full text-12 label>
        Faqs
      </p>
      <h2 my-16>
        Get answers to frequently asked questions
      </h2>
    </div>
    <div class="grid grid-rows-[repeat(4,_min-content)] grid-cols-2 h-800 w-full gap-x-48 gap-y-32">
      <faq class="col-span-1">
        <template #question>
          Why is naming things so hard?
        </template>
        <template #answer>
          Because it just is.
        </template>
      </faq>
      <faq class="col-span-1">
        <template #question>
          Why is naming things so hard?
        </template>
        <template #answer>
          Because it just is.
        </template>
      </faq>
      <faq class="col-span-1">
        <template #question>
          Why is naming things so hard?
        </template>
        <template #answer>
          Because it just is.
        </template>
      </faq>
      <faq class="col-span-1">
        <template #question>
          Why is naming things so hard?
        </template>
        <template #answer>
          Because it just is.
        </template>
      </faq>
    </div>
  </div>
</template>
