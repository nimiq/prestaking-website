<script lang="ts" setup>
defineProps({
  stat: {
    type: String,
    required: true,
  },
  statSmall: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  darkMode: {
    type: Boolean,
    required: false,
    default: false,
  },
  color: {
    type: String,
    default: 'blue',
    required: true,
    validator(value) {
      // The value must match one of these strings
      return ['blue', 'red', 'orange'].includes(value)
    },
  },
})
</script>

<template>
  <div
    :class="[color, { dark: darkMode }, darkMode ? 'dark border-white/20' : 'border-darkblue/10 bg-darkblue/02']"
    class="stat-block-container relative h-full flex grow items-center justify-center border-2 rounded-8 py-48"
  >
    <div class="w-fit flex flex-col items-center justify-center gap-y-32">
      <div class="stat gradient bg flex items-center gap-x-12 rounded-full px-32 py-24 text-44 text-white font-600 leading-100%">
        <span class="relative">{{ stat }}</span>
        <span v-if="statSmall" class="text-18 font-600">{{ statSmall }}</span>
      </div>
      <div class="col-span-2 text-24 font-600" :class="darkMode ? 'text-white/60' : 'text-darkblue/60'">
        <span>{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.stat-block-container {
  &.dark {
    background: radial-gradient(
        101.48% 101.48% at 50% 100%,
        rgba(31, 35, 72, 0) 0%,
        rgba(31, 35, 72, 0.15) 100%
      ),
      rgba(255, 255, 255, 0.05);

    background-blend-mode: color-dodge, normal;
  }
  &.dark::before,
  &.dark::after {
    display: none;
  }
  &.blue {
    --box-shadow: #249cfb;
    --bg-solid: #0582ca;
    --bg-gradient: radial-gradient(
        100% 100% at 100% 100%,
        rgba(38, 93, 215, 0.6) 0%,
        rgba(5, 130, 202, 0.6) 100%
      ),
      #fff;
  }
  &.red {
    --box-shadow: #e764f5;
    --bg-solid: #d94432;
    --bg-gradient: radial-gradient(
        100% 100% at 100% 100%,
        rgba(204, 48, 71, 0.6) 0%,
        rgba(217, 68, 50, 0.6) 100%
      ),
      #fff;
  }
  &.orange {
    --box-shadow: #f19d78;
    --bg-solid: #fc8702;
    --bg-gradient: radial-gradient(
      100% 100% at 100% 100%,
      #fd6216 0%,
      #fc8701 100%
    );
  }
  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    box-shadow:
      0px 0px 36px 0px var(--box-shadow) inset,
      0px 0px 36px 0px rgba(31, 35, 72, 0.05) inset;
    mix-blend-mode: color;
    border-radius: 8px;
  }
}

.stat {
  position: relative;
  background: var(--bg-gradient);

  &::before,
  &::after {
    border-radius: 9999px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::after {
    background: var(--bg-solid);
    mix-blend-mode: overlay;
  }

  &::before {
    background: var(
      --gradient-test,
      linear-gradient(
        139deg,
        #cce8fe 5.7%,
        #cda0ff 27.03%,
        #8489f5 41.02%,
        #cdf1ff 68.68%,
        #b591e9 94%
      )
    );
    mix-blend-mode: color;
  }
}
</style>
