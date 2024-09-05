<script lang="ts" setup>
defineProps<{ title: string, description: string, icon: string }>()
</script>

<template>
  <div class="glass-card glass-clear grow !items-start">
    <div class="size-48" i-custom:lock />
    <div class="flex flex-col">
      <h4 class="my-0">
        {{ title }}
      </h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
