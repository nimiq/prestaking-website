<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

// Code for hide/show navbar
const localState = reactive({
  selectedApp: 0,
  prevScrollPos: 0,
  isSticky: false,
  isScrolled: false,
  activeModal: 0,
})

const root$ = ref(null)

function handleHeaderStyles() {
  const currentScrollPos = window.pageYOffset

  if (root$.value) {
    localState.isScrolled = currentScrollPos > 0
    localState.isSticky = currentScrollPos > 0 && localState.prevScrollPos > currentScrollPos
  }

  localState.prevScrollPos = currentScrollPos
}

function initHeader() {
  localState.prevScrollPos = window.pageYOffset
  handleHeaderStyles()

  if (root$.value) {
    document.addEventListener('scroll', handleHeaderStyles, {
      passive: true,
    })
  }
}

onMounted(() => {
  document.readyState !== 'loading' ? initHeader() : document.addEventListener('DOMContentLoaded', initHeader)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleHeaderStyles)
  document.removeEventListener('DOMContentLoaded', initHeader)
})
</script>

<template>
  <header
    ref="root$"
    class="fixed left-0 top-16 z-100 mt-0 w-full px-16 transition-opacity duration-400 ease-nimiq"
    :class="[{
      'pointer-events-none opacity-0': localState.isScrolled,
      '!pointer-events-auto !opacity-100': localState.isSticky,
    }]"
  >
    <div
      ref="root$"
      class="transition-[border-radius,opacity,background,box-shadow] w-full flex items-center justify-between gap-x-16 rounded-8 p-16 text-left duration-400 shadow ease-nimiq"
      :class="{
        'bg-white': localState.isSticky,
        'bg-transparent': !localState.isSticky,
      }"
    >
      <NuxtLink
        class="cursor-pointer opacity-100 transition-opacity hover:opacity-70"
        to="/"
      >
        <div v-if="localState.isSticky" i-nimiq:logos-nimiq-horizontal class="h-25px w-100px text-white" />
        <svg v-else width="102" height="24" viewBox="0 0 102 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.6972 10.875L21.0722 1.125C20.6672 0.4275 19.9247 0 19.1222 0H7.87219C7.06969 0 6.32719 0.4275 5.92594 1.125L0.300938 10.875C-0.100313 11.5725 -0.100313 12.4275 0.300938 13.125L5.92594 22.875C6.32719 23.5725 7.06969 24 7.87219 24H19.1222C19.9247 24 20.6672 23.5725 21.0684 22.875L26.6934 13.125C27.0984 12.4275 27.0984 11.5725 26.6972 10.875Z" fill="url(#paint0_radial_1734_35592)" />
          <path d="M46.6875 4.875H49.1325V19.125H47.25L39.5625 9.1875V19.125H37.125V4.875H39L46.6875 14.8125V4.875Z" fill="white" />
          <path d="M54 19.25V5H56.625V19.25H54Z" fill="white" />
          <path d="M73.3125 5.3125H75.375V19.5625H73.125V10.75L69.2812 19.5625H67.5938L63.75 10.75V19.5625H61.5V5.3125H63.5625L68.4375 16.4688L73.3125 5.3125Z" fill="white" />
          <path d="M80.25 19.5625V5.3125H82.875V19.5625H80.25Z" fill="white" />
          <path d="M100.41 16.315C99.645 17.8337 98.4563 18.7262 97.4025 19.1613C97.5263 19.4462 98.1075 20.2412 98.5463 20.6987C98.985 21.1562 99.4463 21.6213 100.031 22.0938L98.25 23.5C97.5938 23.0425 97.0238 22.495 96.4425 21.8575C95.8613 21.22 95.3663 20.515 94.9163 19.7313C94.8075 19.7388 94.5038 19.75 94.3125 19.75C92.8613 19.75 91.65 19.4537 90.6038 18.865C89.5575 18.2725 88.7588 17.425 88.2075 16.315C87.7013 15.3062 87.375 13.96 87.375 12.4375C87.375 10.915 87.6563 9.67 88.215 8.56C88.7738 7.45375 89.5763 6.6025 90.6225 6.01C91.6688 5.4175 92.8913 5.125 94.3125 5.125C95.7338 5.125 96.975 5.42125 98.0213 6.01C99.0675 6.6025 99.8663 7.45 100.418 8.56C100.973 9.67 101.25 10.915 101.25 12.4375C101.25 13.96 100.916 15.31 100.41 16.315ZM91.1363 16.3263C91.8938 17.2337 92.9513 17.6875 94.3125 17.6875C95.6738 17.6875 96.735 17.2337 97.4888 16.3263C98.2463 15.415 98.625 14.1325 98.625 12.4375C98.625 10.7537 98.2463 9.44125 97.4888 8.54125C96.7313 7.64125 95.6738 7.1875 94.3125 7.1875C92.9513 7.1875 91.89 7.63375 91.1363 8.53C90.3788 9.42625 90 10.7425 90 12.4375C90 14.1325 90.3788 15.415 91.1363 16.3263Z" fill="white" />
          <defs>
            <radialGradient id="paint0_radial_1734_35592" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.9977 24) rotate(-180) scale(26.9977 24)">
              <stop stop-color="#EC991C" />
              <stop offset="1" stop-color="#E9B213" />
            </radialGradient>
          </defs>
        </svg>
      </NuxtLink>

      <div
        class="hidden items-center gap-x-32px lg:flex"
        :class="{
          'text-neutral-700': localState.isSticky,
          'text-white/60': !localState.isSticky,
        }"
      >
        <NuxtLink to="/prestaking" class="text-16px font-bold">
          Prestaking
        </NuxtLink>
        <div class="flex items-center gap-x-16">
          <a href="https://nimiq.com" class="text-16px font-bold">Stay up to date</a>
          <div
            class="size-32 flex items-center justify-center rounded-full"
            :class="{
              'bg-black/15': localState.isSticky,
              'bg-white/15 text-white': !localState.isSticky,
            }"
          >
            <div class="" i-nimiq:logos-twitter-mono />
          </div>

          <div
            class="size-32 flex items-center justify-center rounded-full -ml-8"
            :class="{
              'bg-black/15': localState.isSticky,
              'bg-white/15 text-white': !localState.isSticky,
            }"
          >
            <div class="" i-nimiq:logos-discord-mono />
          </div>
        </div>
      </div>
      <MobileMenu
        class="block lg:hidden"
        :is-scrolled="localState.isScrolled"
        :is-sticky="localState.isSticky"
      />
    </div>
  </header>
</template>
