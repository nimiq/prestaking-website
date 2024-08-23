<script setup lang="ts">
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <Navigation />
  <div>
    <slot />
  </div>
  <Footer />
  <div id="modals" />
</template>
