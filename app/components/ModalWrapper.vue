<script lang="ts" setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
    required: true,
  },
  bottomOnMobile: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade" mode="out-in">
      <div
        v-if="active" class="fixed bottom-0 left-0 z-1000 h-100svh w-screen flex justify-center sm:items-center sm:px-16"
        :class="bottomOnMobile ? ' items-end' : 'items-center'"
      >
        <div class="absolute bottom-0 left-0 size-screen bg-darkblue/95" />
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>
