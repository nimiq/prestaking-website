<script lang="ts" setup>

</script>

<template>
  <div i-custom:ember class="ember h-28 w-28" />
</template>

<style>
.ember:not(.hide-glow)::after,
.ember::before {
  content: '';
  position: absolute;
  background: radial-gradient(#fff 0%, #ffffff00 100%);
  border-radius: 9999px;
  transform: translate3d(0, 0, 0);
}

.ember::before {
  width: 150%;
  height: 150%;
  top: -25%;
  left: -25%;
  filter: blur(64px);
  mix-blend-mode: screen;
}
.ember:not(.hide-glow)::after {
  width: 250%;
  height: 250%;
  top: -75%;
  left: -75%;
  filter: blur(12px);
  mix-blend-mode: overlay;
}
</style>
