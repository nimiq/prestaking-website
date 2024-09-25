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
</script>

<template>
  <footer class="dark" data-section nq-no-px nq-no-max-width text-neutral-800>
    <div w-full children:max-w-1172 border="y-1.5 white/10" p="x-32 y-40">
      <div mx-auto grid="~ cols-[auto_1px_auto_1fr] md:rows-2 gap-16 md:cols-[320px_1px_auto_auto] lg:cols-[1fr_auto_auto_auto_auto] items-center justify-center lg:rows-1">
        <span nq-label text="sm neutral-700 md:center" col-span="4" lg:hidden>Stay up to date</span>
        <span text="2xl white" lh-none max-lg:hidden font-600>Keep updated</span>
        <NimiqNewsletterEmailInput col-span="4 md:1" relative max-h-33 max-w-7xl />
        <div hidden h-33 w-1 bg-neutral-500 md:block />
        <NuxtLink :to="socialMedia.at(0)!.link" size="36 lg:40" rounded-full transition-colors bg="white/8 hover:white/12" flex="~ items-center justify-center" title="X (Twitter)">
          <div :class="socialMedia.at(0)!.icon" text="14 white" />
        </NuxtLink>
        <div h-33 w-1 bg-neutral-500 md:hidden />
        <NuxtLink :to="socialMedia.at(1)!.link" size="36 lg:40" rounded-full transition-colors bg="white/8 hover:white/12" flex="~ items-center justify-center" title="Discord">
          <div :class="socialMedia.at(1)!.icon" text="16 white" />
        </NuxtLink>
      </div>
    </div>

    <div flex="~ col" text="sm neutral-700" nq-mt-96 px-32>
      <NuxtLink to="https://www.nimiq.com" group w-max flex md:mx-auto>
        <div i-nimiq:logos-nimiq-horizontal-mono text="28 md:30" op-80 hover:op-100 transition-opacity />
      </NuxtLink>
      <p text="sm md:center left" max-w-33ch md:mx-auto nq-mt-16>
        Nimiq is an Inuit word for an object or force that binds things together.
      </p>
      <p text="md:center neutral-700" nq-mt-16 text-16>
        Follow us here:
      </p>
      <ul role="list" flex="~ md:justify-center md:items-center gap-4 wrap" text="18 neutral-700" nq-mt-12>
        <li v-for="({ platform, icon, link }) in socialMedia" :key="platform || '123'" self-stretch justify-self-stretch aria-label="Links to some of our social media pages">
          <NuxtLink :title="platform" :to="link" focusable h-max flex rounded-full p-8 bg="white/10 hocus:white/15" class="text-white/50 hover:text-white/75" transition-colors :aria-label="`Visit Nimiq on ${platform}`">
            <div :class="icon" />
          </NuxtLink>
        </li>
      </ul>

      <div mt-72 transition-colors flex="~ gap-16 wrap items-center" pb="32 md:64">
        <!-- <NuxtLink to="https://nimiq.com" font-semibold un-text="neutral-800 hocus:neutral-900" transition-colors>
          Imprint
        </NuxtLink>
        <div aria-hidden size-4 rounded-full bg-current op-40 /> -->
        <!-- <NuxtLink to="https://nimiq.com/cookie-policy" font-semibold un-text="neutral-800 hocus:neutral-900" transition-colors>
          Policy
        </NuxtLink>
        <div aria-hidden size-4 rounded-full bg-current op-40 /> -->
        <NuxtLink to="/#faq" font-semibold un-text="neutral-800 hocus:neutral-900" transition-colors>
          FAQ
        </NuxtLink>

        <p sm:ml-48>
          © Nimiq Foundation 2024
        </p>
      </div>
    </div>
  </footer>
</template>
