<script lang="ts" setup>
// @unocss-include

const socialMedia = [
  { platform: 'X', icon: 'i-nimiq:logos-twitter-mono', link: 'https://x.com/nimiq' },
  { platform: 'Discord', icon: 'i-nimiq:logos-discord-mono', link: 'https://discord.gg/cMHemg8' },
  { platform: 'Telegram', icon: 'i-nimiq:logos-telegram-mono', link: 'https://t.me/nimiq' },
  { platform: 'Reddit', icon: 'i-nimiq:logos-reddit-mono', link: 'https://www.reddit.com/r/Nimiq/' },
  { platform: 'GitHub', icon: 'i-nimiq:logos-github-mono', link: 'https://github.com/nimiq' },
  { platform: 'YouTube', icon: 'i-nimiq:logos-youtube-mono', link: 'https://www.youtube.com/c/Nimiq' },
  { platform: 'Nimiq Forum', icon: 'i-nimiq:logos-nimiq-forum-mono', link: 'https://forum.nimiq.community/' },
  { platform: 'Facebook', icon: 'i-nimiq:logos-facebook-mono', link: 'https://www.facebook.com/nimiq' },
  { platform: 'Instagram', icon: 'i-nimiq:logos-instagram-mono', link: 'https://www.instagram.com/wearenimiq/' },
]

const copyrigthNotice = `© Nimiq Foundation 2017-${new Date().getFullYear()}`
</script>

<template>
  <footer class="dark" data-section nq-no-px nq-no-max-width text-neutral-800>
    <div w-full children:max-w-1172 border="y-1.5 neutral-600" p="x-32 y-40">
      <div mx-auto grid="~ cols-[auto_1px_auto_1fr] md:rows-2 gap-16 md:cols-[320px_1px_auto_auto] lg:cols-[1fr_auto_auto_auto_auto] items-center justify-center lg:rows-1">
        <span nq-label text="sm neutral-700 md:center" col-span="4" lg:hidden>Stay up to date</span>
        <span text="2xl white" lh-none max-lg:hidden>Keep updated</span>
        <NimiqNewsletterEmailInput col-span="4 md:1" relative max-h-33 max-w-7xl />
        <div hidden h-33 w-1 bg-neutral-500 md:block />
        <NuxtLink :to="socialMedia.at(0)!.link" size="36 lg:40" rounded-full bg="white/8" flex="~ items-center justify-center">
          <div :class="socialMedia.at(0)!.icon" text="14 white" />
        </NuxtLink>
        <div h-33 w-1 bg-neutral-500 md:hidden />
        <NuxtLink :to="socialMedia.at(1)!.link" size="36 lg:40" rounded-full bg="white/8" flex="~ items-center justify-center">
          <div :class="socialMedia.at(1)!.icon" text="16 white" />
        </NuxtLink>
      </div>
    </div>

    <div flex="~ col" text="sm neutral-700" nq-mt-96>
      <NuxtLink to="/" group mx-auto w-max flex>
        <div i-nimiq:logos-nimiq-horizontal-mono group-hocus:i-nimiq:logos-nimiq-horizontal text="28 md:30" op-80 />
      </NuxtLink>
      <p text="sm center" mx-auto max-w-33ch nq-mt-16>
        Nimiq is an Inuit word for an object or force that binds things together.
      </p>
      <p text="center white" nq-mt-16>
        Follow us here
      </p>
      <ul role="list" flex="~ items-center gap-2 wrap" text="18 neutral-700" nq-mt-12 mx-auto op-60>
        <li v-for="({ platform, icon, link }) in socialMedia" :key="platform || '123'" self-stretch justify-self-stretch aria-label="Links to some of our social media pages">
          <NuxtLink :title="platform" :field="link" focusable h-max flex rounded-4 p-8 hocus:bg-neutral-200 :aria-label="`Visit Nimiq on ${platform}`">
            <div :class="icon" />
          </NuxtLink>
        </li>
      </ul>

      <div text="neutral-800 hocus:neutral-900" mt-72 transition-colors flex="~ gap-16 wrap items-center" pb="32 md:64">
        <NuxtLink to="https://nimiq.com" font-semibold un-text="neutral-800 hocus:neutral-900" transition-colors>
          Imprint
        </NuxtLink>
        <div aria-hidden size-4 rounded-full bg-current op-40 />
        <NuxtLink to="https://nimiq.com/cookie-policy" font-semibold un-text="neutral-800 hocus:neutral-900" transition-colors>
          Policy
        </NuxtLink>
        <div aria-hidden size-4 rounded-full bg-current op-40 />
        <NuxtLink to="/#faq" font-semibold un-text="neutral-800 hocus:neutral-900" transition-colors>
          FAQ
        </NuxtLink>

        <p ml-48 text-neutral-600>
          {{ copyrigthNotice }}
        </p>
      </div>
    </div>
  </footer>
</template>
