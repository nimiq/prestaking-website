<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <Section dark-mode god-rays>
    <Header
      title="Prestake, get a share of 100 Mio NIM rewards and win up to 3 Mio NIM"
      body="Join in and support the network. Be among the first to earn, get a unique Identicon upgrade and win some NIM.."
      dark-mode
    />
    <div>
      <SectionLabel dark-mode text="The prizes" />
      <div class="mx-auto w-full flex flex-wrap items-center justify-between gap-24 *:min-w-342">
        <StatBlock
          dark-mode
          stat="3 Mio Nim" text="faster transactions" color="blue"
        />
        <StatBlock
          dark-mode
          stat="1.5 Mio Nim" text="faster transactions" color="red"
        />
        <StatBlock
          dark-mode
          stat="500K nim" text="faster transactions" color="orange"
        />
      </div>
    </div>
  </Section>

  <Section>
    <Header
      label="Community"
      title="Join the community and pump up the network"
      body="Nimiq upgrades from Proof of Work to Proof of Stake on its very own Albatross Algorithm.Your wallet and exchanges keep their addresses. No action required."
    />
    <div class="h-165 w-full rounded-8 bg-gold" />
  </Section>

  <hr>

  <Section>
    <Header
      label="Pre-staking Airdrop"
      title="Everyone is a winner"
      body="Nimiq upgrades from Proof of Work to Proof of Stake on its very own Albatross Algorithm.Your wallet and exchanges keep their addresses. No action required."
    />
    <div class="flex gap-x-16">
      <div
        class="bg-gr w-70% flex flex-col items-center justify-center rounded-6 bg-gold px-24 py-32 text-white"
        style="background: radial-gradient(100% 100% at 100% 100%, #EC991C 0%, #E9B213 100%);"
      >
        <div class="text-40 font-600">
          80%
        </div>
        <div class="text-14">
          Prestakers
        </div>
      </div>
      <div
        class="bg-gr w-20% flex flex-col items-center justify-center rounded-6 bg-gold px-24 py-32 text-white"
        style="background: radial-gradient(100% 100% at 100% 100%, #CC3047 0%, #D94432 100%);"
      >
        <div class="text-40 font-600">
          15%
        </div>
        <div class="text-14">
          Prestakers
        </div>
      </div>
      <div
        class="bg-gr w-10% flex flex-col items-center justify-center rounded-6 bg-gold px-24 py-32 text-white"
        style="background: radial-gradient(100% 100% at 100% 100%, #FD6216 0%, #FC8701 100%);"
      >
        <div class="text-40 font-600">
          5%
        </div>
        <div class="text-14">
          Prestakers
        </div>
      </div>
    </div>
  </Section>

  <hr>

  <Section>
    <Header
      title="Prestaking is as easy as staking"
      body="The process is the same. Go to your wallet, pick a validator pool and start staking."
    />
    <div class="flex text-left">
      <!-- <div class="flex grow flex-col py-24"> -->
      <ul class="process-list mt-24 grow self-center p-48">
        <li>
          <h4>
            <span class="mr-10 inline-block aspect-[1/1] w-fit rounded-full bg-darkblue/10 px-8 py-4 text-17 text-darkblue leading-100%">
              1
            </span>
            Go to your wallet
          </h4>
          <p>In the wallet, click on the staking icon next to send and receive.</p>
        </li>
        <li>
          <h4>
            <span class="mr-10 inline-block aspect-[1/1] w-fit rounded-full bg-darkblue/10 px-8 py-4 text-17 text-darkblue leading-100%">
              1
            </span>
            Go to your wallet
          </h4>
          <p>In the wallet, click on the staking icon next to send and receive.</p>
        </li>
        <li>
          <h4>
            <span class="mr-10 inline-block aspect-[1/1] w-fit rounded-full bg-darkblue/10 px-8 py-4 text-17 text-darkblue leading-100%">
              1
            </span>
            Go to your wallet
          </h4>
          <p>In the wallet, click on the staking icon next to send and receive.</p>
        </li>
        <li>
          <h4>
            <span class="mr-10 inline-block aspect-[1/1] w-fit rounded-full bg-darkblue/10 px-8 py-4 text-17 text-darkblue leading-100%">
              1
            </span>
            Go to your wallet
          </h4>
          <p>In the wallet, click on the staking icon next to send and receive.</p>
        </li>
      </ul>
      <!-- </div> -->
      <div class="z-2 aspect-[3/4] h-fit max-w-440 overflow-hidden rounded-16">
        <img src="/video.png" class="h-[110%] w-full object-cover" alt="" srcset="">
      </div>
    </div>
  </Section>

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
    @apply absolute pointer-events-none top-0 left-0 h-full w-110% border-1 border-darkblue/10 rounded-16;
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
