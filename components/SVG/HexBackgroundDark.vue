<script lang="ts" setup>

</script>

<template>
  <div class="relative">
    <svg class="svg" style="position: absolute; width: 0; height: 0;">
      <clipPath id="hex-clip-path" clipPathUnits="objectBoundingBox">
        <path d="M25.4737 9.75C26.1754 10.9567 26.1754 12.4433 25.4737 13.65L20.9378 21.45C20.2361 22.6567 18.9393 23.4 17.5359 23.4H8.4641C7.06069 23.4 5.76388 22.6567 5.06218 21.45L0.52628 13.65C-0.175427 12.4433 -0.175427 10.9567 0.52628 9.75L5.06218 1.95C5.76388 0.743336 7.06069 -6.09035e-08 8.4641 0L17.5359 3.93695e-07C18.9393 4.546e-07 20.2361 0.743336 20.9378 1.95L25.4737 9.75Z" />
      </clipPath>
    </svg>
    <div class="hex h24 w-24 bg-blue" />
    <!-- <div class="grid grid-flow-col grid-flow-row">
    </div> -->
  </div>
</template>

<style>
.hex {
  mask: url(#hex-clip-path);
}
</style>
