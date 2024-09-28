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
  if (document.readyState !== 'loading')
    initHeader()
  else
    document.addEventListener('DOMContentLoaded', initHeader)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleHeaderStyles)
  document.removeEventListener('DOMContentLoaded', initHeader)
})
</script>

<template>
  <header
    ref="root$"
    class="ease-nq fixed left-0 top-16 z-100 mt-0 w-full px-16 transition-opacity duration-400"
    :class="[{
      'pointer-events-none opacity-0': localState.isScrolled,
      '!pointer-events-auto !opacity-100': localState.isSticky,
    }]"
  >
    <div
      ref="root$"
      class="transition-[border-radius,opacity,background,box-shadow] ease-nq w-full flex items-center justify-between gap-x-16 rounded-8 p-16 text-left duration-400"
      :class="{
        'bg-white shadow': localState.isSticky,
        'bg-transparent': !localState.isSticky,
      }"
    >
      <NuxtLink
        class="cursor-pointer"
        to="/"
      >
        <div :class="localState.isSticky ? 'i-nimiq:logos-nimiq-horizontal' : 'i-nimiq:logos-nimiq-white-horizontal'" class="h-25px w-100px text-white" />
      </NuxtLink>

      <div
        class="hidden items-center gap-x-32 lg:flex"
        :class="{
          'text-neutral-700': localState.isSticky,
          'text-white/60': !localState.isSticky,
        }"
      >
        <a href="https://nimiq.com" class="text-16 font-bold transition-color" :class="{
          'hover:text-neutral-900': localState.isSticky,
          'hover:text-white/80': !localState.isSticky,
        }">About Nimiq</a>
        <NuxtLink to="/pre-staking" class="text-16 font-bold transition-color" :class="{
          'hover:text-neutral-900': localState.isSticky,
          'hover:text-white/80': !localState.isSticky,
        }">Pre-staking</NuxtLink>
        <div class="flex items-center gap-x-16">
          <a href="https://x.com/nimiq" rel="noopener noreferrer" title="X (Twitter)"
            class="size-32 flex items-center justify-center rounded-full transition-colors"
            :class="{
              'bg-black/15 hover:bg-black/20 text-neutral/50': localState.isSticky,
              'bg-white/15 hover:bg-white/20 text-white': !localState.isSticky,
            }"
          ><div class="" i-nimiq:logos-twitter-mono /></a>

          <a href="https://discord.gg/cMHemg8" rel="noopener noreferrer" title="Discord"
            class="size-32 flex items-center justify-center rounded-full transition-colors"
            :class="{
              'bg-black/15 hover:bg-black/20 text-neutral/50': localState.isSticky,
              'bg-white/15 hover:bg-white/20 text-white': !localState.isSticky,
            }"
          ><div class="" i-nimiq:logos-discord-mono /></a>
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
