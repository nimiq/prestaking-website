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
        v-if="active" class="fixed left-0 top-0 z-1000 h-screen w-screen flex justify-center bg-darkblue/95 sm:items-center sm:px-16"
        :class="bottomOnMobile ? ' items-end' : 'items-center'"
      >
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>
