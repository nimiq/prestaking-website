<script lang="ts" setup>

</script>

<template>
  <div class="h-full flex grow items-center justify-center border-2 border-[color-mix(in_srgb,_currentColor_20%,_transparent)] rounded-8 py-48">
    <div class="grid grid-cols-[min-content_min-content] grid-rows-[1fr_min-content] w-fit items-center justify-center gap-x-12 gap-y-8">
      <slot name="icon" />
      <div class="text-48 leading-100%">
        <slot name="stat" />
      </div>
      <div class="col-span-2">
        <span><slot name="text" /></span>
      </div>
    </div>
  </div>
</template>

<style>

</style>
