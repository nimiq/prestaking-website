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
    class="fixed left-0 top-16 z-100 mt-0 w-full px-16 transition-opacity duration-400 ease-nimiq"
    :class="[{
      'pointer-events-none opacity-0': localState.isScrolled,
      '!pointer-events-auto !opacity-100': localState.isSticky,
    }]"
  >
    <div
      ref="root$"
      class="transition-[border-radius,opacity,background,box-shadow] w-full flex items-center justify-between gap-x-16 rounded-8 p-16 text-left duration-400 ease-nimiq"
      :class="{
        'bg-white shadow': localState.isSticky,
        'bg-transparent': !localState.isSticky,
      }"
    >
      <NuxtLink
        class="cursor-pointer opacity-100 transition-opacity hover:opacity-70"
        to="/"
      >
        <div :class="localState.isSticky ? 'i-nimiq:logos-nimiq-horizontal' : 'i-nimiq:logos-nimiq-white-horizontal'" class="h-25px w-100px text-white" />
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
