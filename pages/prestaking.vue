<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <div class="mx-auto h-[calc(100vw*0.42)] max-w-1172 px-80 pb-96 pt-160 text-center">
    <svg class="mx-auto" width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.6" x="21.8075" y="22.1432" width="96.3854" height="96.3854" rx="48.1927" stroke="#E9B213" stroke-width="3.0237" />
      <rect opacity="0.4" x="11.9803" y="12.3157" width="116.04" height="116.04" rx="58.0202" stroke="#E9B213" stroke-width="3.0237" />
      <rect opacity="0.2" x="2.15221" y="2.48815" width="135.696" height="135.696" rx="67.8478" stroke="#E9B213" stroke-width="3.0237" />
      <rect x="28.2324" y="28.5689" width="83.5341" height="83.5341" rx="41.7671" fill="url(#paint0_radial_354_91993)" />
      <line x1="69.5539" y1="69.8948" x2="69.5539" y2="90.6616" stroke="white" stroke-width="4.0316" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M88.893 64.6064C88.893 77.0056 82.3982 83.5004 69.999 83.5004C69.999 65.9349 75.4606 64.6064 88.893 64.6064Z" stroke="white" stroke-width="4.0316" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M53.4629 53.9823C53.4629 67.4147 57.5959 74.0571 69.9951 74.0571C69.9951 60.6247 68.9619 53.9823 53.4629 53.9823Z" stroke="white" stroke-width="4.0316" stroke-linecap="round" stroke-linejoin="round" />
      <defs>
        <radialGradient id="paint0_radial_354_91993" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(111.767 112.103) rotate(-180) scale(83.5341)">
          <stop stop-color="#EC991C" />
          <stop offset="1" stop-color="#E9B213" />
        </radialGradient>
      </defs>
    </svg>

    <!-- <div class="rounded-full p-24 bg-gradient-gold w-fit">
      <div i-nimiq:icons-lg-seeding class="text-white text-56 mx-auto"></div>
    </div> -->
    <h1 class="my-32">
      Prestake and earn eternal glory
    </h1>
    <p class="text-32 text-neutral-600 leading-140%">
      All NIM holders are called to prestake and help secure the network. Be among the first to earn and get a unique Identicon upgrade.
    </p>
  </div>

  <!-- Content -->
  <div
    class="relative mx-16 mx-auto mb-40 box-border block max-w-1440 w-auto overflow-hidden rounded-24 bg-white shadow"
  >
    <div class="h-112 p-16">
      <div class="h-full w-full bg-amber" />
    </div>

    <div class="mx-auto max-w-1172 px-80 pb-96 pt-160 text-center">
      <h2 class="mb-32 mt-0">
        Prestaked NIM
      </h2>
      <p class="subline">
        The not-for-profit Nimiq Foundation funds and supports the development and progress of the Nimiq Blockchain and Ecosystem.
      </p>
    </div>

    <div class="grid grid-cols-3 grid-rows-1 mx-auto mb-48 max-w-1168 w-full border rounded-8 py-48">
      <div class="h-full w-full px-48">
        <div i-nimiq:logos-nimiq-hexagon-outline class="mb-24 text-32 opacity-40" />
        <h3 mb-16 mt-0>
          Be amongst the first to earn.
        </h3>
        <p class="text-darkblue opacity-60">
          Lock your NIM with real validators and start earning as soon as the network goes live.
        </p>
      </div>
      <div class="h-full w-full border-x px-48">
        <div i-nimiq:logos-nimiq-hexagon-outline class="mb-24 text-32 opacity-40" />
        <h3 mb-16 mt-0>
          Be amongst the first to earn.
        </h3>
        <p class="text-darkblue opacity-60">
          Lock your NIM with real validators and start earning as soon as the network goes live.
        </p>
      </div>
      <div class="h-full w-full px-48">
        <div i-nimiq:logos-nimiq-hexagon-outline class="mb-24 text-32 opacity-40" />
        <h3 mb-16 mt-0>
          Be amongst the first to earn.
        </h3>
        <p class="text-darkblue opacity-60">
          Lock your NIM with real validators and start earning as soon as the network goes live.
        </p>
      </div>
    </div>

    <div class="mx-auto mb-48 max-w-1168 w-full flex items-center justify-between gap-x-48 rounded-8 bg-darkblue bg-op-7 py-48">
      <div class="col-span-3 flex items-center justify-between pl-48">
        <div i-nimiq:logos-nimiq-hexagon-outline class="mr-32 text-32 opacity-40" />
        <h3 class="my-0">
          Help securing the network
        </h3>
        <div class="mx-48 w-1 self-stretch border" />
        <p class="my-0 text-darkblue opacity-60">
          The more NIM are locked, the harder it will be to attack the young network.
        </p>
      </div>
      <div class="col-span-2 pr-48">
        <a href="./" class="pill-lg pill-blue">Claim Prestaking upgrade</a>
      </div>
    </div>

    <div class="mx-auto max-w-1172 px-80 pb-96 pt-160 text-center">
      <h2 class="mb-32 mt-0">
        Milestones
      </h2>
      <p class="subline">
        The not-for-profit Nimiq Foundation funds and supports the development and progress of the Nimiq Blockchain and Ecosystem.
      </p>
    </div>

    <MilestoneCards />

    <div class="mx-auto max-w-1172 px-80 pb-96 pt-160 text-center">
      <h2 class="mb-32 mt-0">
        How to participate
      </h2>
      <p class="subline">
        The not-for-profit Nimiq Foundation funds and supports the development and progress of the Nimiq Blockchain and Ecosystem.
      </p>
    </div>
  </div>
</template>
