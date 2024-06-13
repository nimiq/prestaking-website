<script lang="ts" setup>

</script>

<template>
  <div class="marquee border-b-1 border-b-neutral-300">
    <ul class="marquee__content text-neutral-700 font-bold">
      <li v-for="i in 6" :key="i">
        <slot />
      </li>
    </ul>

    <ul aria-hidden="true" class="marquee__content text-neutral-700 font-bold">
      <li v-for="i in 6" :key="i">
        <slot />
      </li>
    </ul>
  </div>
</template>

<style>
/* Marquee styles */
.marquee {
  --gap: 64px;
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  gap: var(--gap);
  min-width: 100%;
  padding-block: 32px;
  font-size: 18px;
  will-change: contents;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

/* Pause animation when reduced-motion is set */
@media (prefers-reduced-motion: reduce) {
  .marquee__content {
    animation-play-state: paused !important;
  }
}

/* Enable animation */
.marquee__content {
  animation: scroll 20s linear infinite;
}
</style>
