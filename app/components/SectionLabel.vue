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
    class="small-label mb-32 w-full md:text-center"
    :class="darkMode ? 'text-white/60' : 'text-darkblue/60'"
  >
    {{ text }}
  </div>
</template>

<style>

</style>
