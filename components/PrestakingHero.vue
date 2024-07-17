<script lang="ts" setup>

</script>

<template>
  <div class="relative">
    <div class="absolute bottom-145 left-0 z-1 flex gap-x-6">
      <div
        v-for="x in 200" :key="x" class="relative shrink-0" :class="{
          'h-160 w-16 bg-white/25 rounded-4': x % 10 !== 0,
          'h-160 w-16 ': x % 10 === 0,
        }"
      >
        <svg v-if="x % 10 === 0" class="z-10" width="16" height="160" viewBox="0 0 16 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <line class="stroke-current text-white" x1="8" y1="1.5" x2="7.99999" y2="158.5" stroke-width="3" stroke-linecap="round" stroke-dasharray="8.24 8.24" />
          </g>
        </svg>
        <div v-if="x % 10 === 0" class="absolute left-1/2 top-1/2 z-10 rounded-full bg-darkblue px-12 py-8 text-14 text-white/50 font-bold -translate-x-1/2 -translate-y-1/2">
          {{ x }}M
        </div>
      </div>
    </div>
    <div class="relative z-2 mx-auto aspect-[1/1.5] w-300 border-12 border-white bg-blue shadow-black shadow" />
  </div>
</template>

<style>

</style>
