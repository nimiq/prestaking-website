<script setup lang="ts">
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->

  <div id="hero" class="relative pb-200">
    <Clock class="" />

    <Header
      class="-mt-0 relative z-10 mx-auto"
      title="Made for crypto payments at sub-second speed"
      body="Nimiq upgrades from Proof of Work to Proof of Stake on its very own Albatross Algorithm.
      Your wallet and exchanges keep their addresses. No action required."
      dark-mode
    />
  </div>
  <!-- <Section id="hero" class="box-border min-h-screen !max-w-1440 !gap-y-0" dark-mode>
    <Clock class="" />

    <Header
      class="relative z-10 -mt-96"
      title="Made for crypto payments at sub-second speed"
      body="Nimiq upgrades from Proof of Work to Proof of Stake on its very own Albatross Algorithm.
          Your wallet and exchanges keep their addresses. No action required."
      dark-mode
    />
  </Section> -->

  <!-- <GodRays /> -->

  <Section>
    <Header
      title="Made for crypto payments at sub-second speed"
      body="Nimiq upgrades from Proof of Work to Proof of Stake on its very own Albatross Algorithm.
          Your wallet and exchanges keep their addresses. No action required."
    />

    <div>
      <SectionLabel text="Adoption-GRade Performance" />
      <div class="mx-auto w-full flex flex-wrap items-center justify-between gap-24 *:min-w-342">
        <StatBlock
          stat="60%" text="faster transactions" color="blue"
        />
        <StatBlock
          stat="100x" text="faster transactions" color="red"
        />
        <StatBlock
          stat="350x" text="faster transactions" color="orange"
        />
      </div>
    </div>

    <div>
      <SectionLabel text="Competitive rewards" />
      <div class="grid grid-cols-4 grid-rows-3 h-800 w-full gap-32">
        <div class="col-span-3 row-span-3 rounded-8 bg-green" />
        <div class="col-span-1 row-span-3 rounded-8 bg-neutral-400" />
      </div>
    </div>
  </Section>

  <hr>

  <Section>
    <div>
      <SectionLabel text="LAUNCH TIMETABLE" />
      <div class="h-380 w-full content-center border-1 rounded-10 bg-darkblue/10">
        <h1 mx-auto w-fit>
          Timetable
        </h1>
      </div>
    </div>
    <div
      class="flex flex-col items-center"
    >
      <h3 class="text-center">
        Keep me updated
      </h3>
      <div class="flex items-center gap-16">
        <input type="text" placeholder="Enter email address..." class="w-300 rounded-full">
        <div class="h-32 w-1 bg-darkblue/10" />
        <div class="rounded-full bg-darkblue/07 p-11">
          <div class="text-darkblue" i-nimiq:logos-twitter-mono />
        </div>
        <div class="rounded-full bg-darkblue/07 p-11">
          <div class="text-darkblue" i-nimiq:logos-discord-mono />
        </div>
      </div>
    </div>
  </Section>

  <hr>

  <Section dark-mode>
    <Header
      dark-mode
      label="Albatross"
      title="The powerhouse behind"
      body="Take a deep dive into Albatross, the optimistic consensus algo, developed by Nimiq and designed for single-chain performance and easy staking."
    />
    <div class="grid grid-cols-6 grid-rows-4 h-800 w-full gap-32">
      <div class="col-span-2 row-span-1 rounded-8 bg-neutral-700" />
      <div class="col-span-2 row-span-1 rounded-8 bg-neutral-700" />
      <div class="col-span-2 row-span-4 rounded-8 bg-neutral-700" />
      <div class="col-span-4 row-span-3 rounded-8 bg-neutral-700" />
    </div>
  </Section>

  <hr>

  <!-- Repeated Section -->
  <TicketSection />

  <Section dark-mode>
    <div>
      <SectionLabel text="What you need to know" dark-mode />
      <Faqs />
    </div>
  </Section>

  <Footer />
</template>

<style>
.glass-card {
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  /* opacity: 0.5; */
  display: flex;
  padding: 48px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
</style>
