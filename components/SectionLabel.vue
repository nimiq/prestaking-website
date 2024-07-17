<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  darkMode: {
    type: Boolean,
    default: false,
    required: false,
  },
})
</script>

<template>
  <div
    class="mb-32 w-full text-center text-14 font-bold leading-100% uppercase"
    :class="darkMode ? 'text-white/60' : 'text-darkblue/60'"
  >
    {{ text }}
  </div>
</template>

<style>

</style>
