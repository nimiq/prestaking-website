<script lang="ts" setup>
defineProps({
  isInverted: {
    default: false,
    type: Boolean,
  },
  isSticky: {
    default: false,
    type: Boolean,
  },
  isScrolled: {
    default: false,
    type: Boolean,
  },
})

const menuVisible = ref(false)
const root$ = ref<HTMLDivElement | null>(null)
// useOutsideClick(root$, () => {
//   menuVisible.value = false
// })
</script>

<template>
  <div
    ref="root$"
    class="relative"
  >
    <!-- Hamburger icon -->
    <button class="hamburger" aria-label="Navigation dropdown" :class="{ active: menuVisible }" @click="menuVisible = !menuVisible">
      <span />
      <span />
      <span />
    </button>

    <nav :class="{ visible: menuVisible }" class="menu-wrapper">
      <ul class="flex flex-col gap-12 transition-opacity duration-75">
        <a href="/prestaking" class="text-16px font-bold">Prestaking</a>
        <div class="flex flex-col gap-x-16 lg:flex-row lg:items-center">
          <a href="https://nimiq.com" class="text-16px font-bold">Stay up to date</a>
          <div class="mt-16 flex gap-x-12">
            <div
              class="size-32 flex items-center justify-center rounded-full bg-black/15"
            >
              <div class="" i-nimiq:logos-twitter-mono />
            </div>

            <div
              class="size-32 flex items-center justify-center rounded-full bg-black/15"
            >
              <div class="" i-nimiq:logos-discord-mono />
            </div>
          </div>
        </div>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.hamburger {
  @apply box-content relative flex flex-col justify-between w-22 h-22 opacity-30 transition-opacity hover:opacity-60;

  span {
    @apply w-full h-2 bg-blue-dark rounded-8 transform transition-transform-width;

    &:nth-child(1) {
      @apply w-22 transform translate-x-0;
    }

    &:nth-child(2) {
      @apply w-20 transform translate-x-2;
    }

    &:nth-child(3) {
      @apply w-18 transform translate-x-4;
    }
  }

  &.active {
    @apply opacity-60;

    span:nth-child(2) {
      @apply w-22 transform translate-x-0;
    }

    span:nth-child(1),
    span:nth-child(3) {
      @apply w-14 transform translate-x-4;
    }
  }
}

.menu-wrapper {
  @apply opacity-0 p-24 font-semibold top-full rounded-6 border-1 border-black/15 pointer-events-none cursor-default transition-transform-opacity bg-white shadow-around absolute transform -right-16 translate-y-28 -mt-1 w-[calc(100vw-32px)] max-w-[370px] max-h-[calc(100vh-104px)];

  &.visible {
    @apply opacity-100 overflow-auto overscroll-contain pointer-events-auto;
  }
}
</style>
