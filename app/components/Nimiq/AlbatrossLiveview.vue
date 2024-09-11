<script setup lang="ts">
const src = useRuntimeConfig().public.albatrossLiveviewUrl
</script>

<template>
  <iframe :src w-screen h="839 sm:781 md:573" />
</template>
