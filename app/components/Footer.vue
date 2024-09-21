<script lang="ts" setup>
import { SocialMedia } from '~/stores/global-content'

const navigationBlocks = [
  {
    areaName: 'project',
    label: 'Project',
    links: [
      { linkLabel: 'About', href: 'https://nimiq.com/about' },
      { linkLabel: 'Team', href: 'https://nimiq.com/team' },
      { linkLabel: 'Roadmap', href: 'https://nimiq.com/roadmap' },
      { linkLabel: 'Blog', href: 'https://nimiq.com/Blog' },
    ],
  },
  {
    areaName: 'tech',
    label: 'Tech',
    links: [
      { linkLabel: 'Onepager', href: 'https://nimiq.com/onepager' },
      { linkLabel: 'OASIS', href: 'https://nimiq.com/oasis/integrate' },
      { linkLabel: 'Developers', href: 'https://nimiq.com/developers' },
      { linkLabel: 'Litepaper', href: 'https://nimiq.com/litepaper' },
      { linkLabel: 'Albatross', href: 'https://nimiq.com/albatross' },
      { linkLabel: 'Bug Bounty Program', href: 'https://nimiq.com/bug-bounty-pos' },
    ],
  },
  {
    areaName: 'apps',
    label: 'Apps',
    links: [
      { linkLabel: 'Wallet', href: 'https://nimiq.com/wallet' },
      { linkLabel: 'Cryptopayment.link', href: 'https://nimiq.com/cryptopaymentlink' },
      { linkLabel: 'Crypto Map', href: 'https://map.nimiq.com' },
      { linkLabel: 'Nimiq Pay', href: 'https://nimiq.com/nimiq-pay' },
      { linkLabel: 'SuperSimpleSwap', href: 'https://nimiq.com/supersimpleswap' },
      { linkLabel: 'All apps', href: 'https://nimiq.com/apps' },
    ],
  },
  {
    areaName: 'get-started',
    label: 'Get started',
    links: [
      { linkLabel: 'Login', href: 'https://wallet.nimiq.com' },
      { linkLabel: 'New wallet', href: 'https://wallet.nimiq.com' },
      { linkLabel: 'Buy NIM', href: 'https://nimiq.com/buy-and-sell' },
    ],
  },
  {
    areaName: 'community',
    label: 'Community',
    links: [
      { linkLabel: 'Overview', href: 'https://nimiq.com/community' },
      { linkLabel: 'Community Funding', href: 'https://nimiq.com/community/funding' },
      { linkLabel: 'Blog', href: 'https://nimiq.com/blog' },
      { linkLabel: 'Podcast', href: 'https://nimiq.com/podcast' },
    ],
  },
  {
    areaName: 'and-more',
    label: '...and more',
    links: [
      { linkLabel: 'Mining', href: 'https://nimiq.com/mining' },
      { linkLabel: 'Contact', href: 'https://nimiq.com/contact' },
      { linkLabel: 'Community Funding', href: 'https://nimiq.com/community/funding' },
    ],
  },
]

// @unocss-include

const socialMedia = [
  { platform: 'X', icon: 'i-nimiq:logos-twitter-mono', link: 'https://x.com/nimiq' },
  { platform: 'Telegram', icon: 'i-nimiq:logos-telegram-mono', link: 'https://t.me/nimiq' },
  { platform: 'Reddit', icon: 'i-nimiq:logos-reddit-mono', link: 'https://www.reddit.com/r/Nimiq/' },
  { platform: 'GitHub', icon: 'i-nimiq:logos-github-mono', link: 'https://github.com/nimiq' },
  { platform: 'YouTube', icon: 'i-nimiq:logos-youtube-mono', link: 'https://www.youtube.com/c/Nimiq' },
  { platform: 'Discord', icon: 'i-nimiq:logos-discord-mono', link: 'https://discord.gg/cMHemg8' },
  { platform: 'Nimiq Forum', icon: 'i-nimiq:logos-nimiq-forum-mono', link: 'https://forum.nimiq.community/' },
  { platform: 'Facebook', icon: 'i-nimiq:logos-facebook-mono', link: 'https://www.facebook.com/nimiq' },
  { platform: 'Instagram', icon: 'i-nimiq:logos-instagram-mono', link: 'https://www.instagram.com/wearenimiq/' },
]

const copyrigthNotice = `© Nimiq Foundation 2017-${new Date().getFullYear()}`
</script>

<template>
  <footer class="dark" grid="~ gap-40 md:gap-64 items-start xl:gap-104" px="32 md:64 xl:72" pb="40 md:80 xl:104 2xl:136" data-section w-full max-w="$nq-max-width" text-neutral-800>
    <div flex="~ col" area-contact text-sm>
      <p>
        Sign up for our monthly newsletter
      </p>
      <NimiqNewsletterEmailInput nq-mt-16 />
      <p nq-mt-16>
        or follow us here
      </p>
      <ul mx--8 op-60 role="list" flex="~ items-center gap-2 wrap" text="18 neutral-700">
        <li v-for="({ platform, icon, link }) in socialMedia" :key="platform || '123'" self-stretch justify-self-stretch aria-label="Links to some of our social media pages">
          <NuxtLink :title="platform" :field="link" focusable h-max flex rounded-4 p-8 hocus:bg-neutral-200 :aria-label="`Visit Nimiq on ${platform}`">
            <div :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div text="sm neutral-700" self-end area-meta>
      <NuxtLink to="/" group w-max flex>
        <div i-nimiq:logos-nimiq-horizontal-mono group-hocus:i-nimiq:logos-nimiq-horizontal text="20 md:22" op-80 />
      </NuxtLink>
      <p nq-mt-16>
        Nimiq is an Inuit word for an object or force that binds things together.
      </p>

      <!-- The new nimiq.com will have some redirects, so the links will exist -->
      <!-- <div text="neutral-800 hocus:neutral-900" nq-mt-32 transition-colors flex="~ gap-16 items-center">
        <NuxtLink to="https://nimiq.com/privacy-policy" font-semibold un-text="neutral-800 hocus:neutral-900" transition-colors>
          Privacy Policy
        </NuxtLink>
        <div aria-hidden size-4 rounded-full bg-current op-40 />
        <NuxtLink to="https://nimiq.com/cookie-policy" font-semibold un-text="neutral-800 hocus:neutral-900" transition-colors>
          Cookie Policy
        </NuxtLink>
      </div> -->

      <p nq-mt-32 text-neutral-600>
        {{ copyrigthNotice }}
      </p>
    </div>

    <div v-for="({ areaName, label, links }) in navigationBlocks" :key="areaName" :style="`grid-area ${areaName}`">
      <p w-full text="xs neutral-700/80" nq-label>
        {{ label }}
      </p>
      <ul nq-mt-32 :aria-label="`${label} links`" role="list">
        <li v-for="({ href, linkLabel }, j) in links" :key="j" nq-mt-16>
          <NuxtLink :field="href" font-semibold un-text="sm neutral-800 hocus:neutral-900" transition-colors>
            {{ linkLabel }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <hr sr-only relative h-1 w-full bg-neutral-600 area-hr-1>
    <hr sr-only relative h-1 w-full bg-neutral-600 area-hr-2 lg:hidden>
    <hr sr-only relative h-1 w-full bg-neutral-600 area-hr-3 md:hidden>
  </footer>
</template>

<style scoped>
footer {
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'project tech'
    'hr-1 hr-1'
    'apps get-started'
    'hr-2 hr-2'
    'community and-more'
    'hr-3 hr-3'
    'contact contact'
    'meta meta';

  @screen md {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'contact project tech'
      'contact hr-1 hr-1'
      'contact apps get-started'
      'contact hr-2 hr-2'
      'meta community and-more';
  }

  @screen lg {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-template-areas:
      'contact project tech apps'
      'contact hr-1 hr-1 hr-1'
      'meta get-started community and-more';
  }
}
</style>
