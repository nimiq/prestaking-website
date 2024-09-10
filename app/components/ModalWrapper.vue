<script lang="ts" setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
    required: true,
  },
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade" mode="out-in">
      <div v-if="active" class="fixed left-0 top-0 z-1000 h-screen w-screen flex items-center justify-center bg-darkblue/95 px-16">
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>
