<script lang="ts" setup>
defineProps<{ title: string, description: string, icon: string }>()
</script>

<template>
  <div class="glass-card glass-clear grow !items-start">
    <div v-if="icon === 'lock'" class="size-48" i-custom:lock />
    <div v-if="icon === 'document'" class="size-48" i-custom:document />
    <div v-if="icon === 'box'" class="size-48" i-custom:box />
    <div v-if="icon === 'horn'" class="size-48" i-custom:horn />
    <div v-if="icon === 'duck'" class="size-48" i-custom:duck />
    <div v-if="icon === 'leaf'" class="size-48" i-custom:leaf />
    <div class="flex flex-col">
      <h4 class="my-0">
        {{ title }}
      </h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
