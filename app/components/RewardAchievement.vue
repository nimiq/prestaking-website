<script lang="ts" setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
    required: true,
  },
  buttonText: {
    type: String,
    default: null,
    required: true,
  },
  label: {
    type: String,
    default: null,
    required: true,
  },
  checkmark: {
    type: Boolean,
    default: true,
    required: false,
  },
  color: {
    type: String,
    default: 'blue',
    required: true,
    validator(value: string) {
      return ['pink', 'peach', 'orange', 'purple'].includes(value)
    },
  },
})
</script>

<template>
  <div :class="[active && 'active', color]" class="rw-container relative min-w-[33%]">
    <div v-if="buttonText" class="rw-value-container">
      <div class="rw-value">
        {{ buttonText }}
      </div>
    </div>
    <div v-if="label" class="rw-label">
      {{ label }}
    </div>
    <slot />
    <div v-if="active && checkmark" class="i-nimiq:icons-lg-verified-filled absolute bottom-0 left-1/2 translate-y-1/2 text-purple -translate-x-1/2" />
  </div>
</template>

<style>
.rw-container {
  --bg-base: linear-gradient(139deg, #cce8fe 5.7%, #cda0ff 27.03%, #8489f5 41.02%, #cdf1ff 68.68%, #b591e9 94%);

  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1.5px solid rgba(31, 35, 72, 0.05);
  background: rgba(248, 248, 248, 0.02);
  box-shadow: 0px 9.017px 36.068px 0px rgba(31, 35, 72, 0.05) inset;
}

.active .rw-value-container {
  border-radius: 86px;
  overflow: hidden;
}
.active.orange .rw-value-container {
  background: radial-gradient(100% 100% at 100% 100%, rgba(236, 153, 28, 0.6) 0%, rgb(233 181 19 / 60%) 100%), #fff;
}
.active.peach .rw-value-container {
  background: radial-gradient(100% 100% at 100% 100%, rgb(236 68 28 / 60%) 0%, rgb(236 124 10 / 60%) 100%), #fff;
}
.active.pink .rw-value-container {
  background: radial-gradient(100% 100% at 100% 100%, rgb(221 114 195 / 60%) 0%, rgb(212 45 180 / 60%) 100%), #fff;
}
.active.purple .rw-value-container {
  background: radial-gradient(100% 100% at 100% 100%, rgb(185 114 221 / 60%) 0%, rgb(133 74 140 / 60%) 100%), #fff;
}
.rw-value {
  position: relative;
  display: flex;
  padding: 8px 14px;
  max-height: 75vh;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 86px;
  /* background: linear-gradient(0deg, rgba(31, 35, 72, 0.06) 0%, rgba(31, 35, 72, 0.06) 100%), #fff; */

  color: #797b91;
  text-align: center;
  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1; /* 164.142% */
}

.rw-label {
  color: #1f2348;
  text-align: center;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1;
  align-self: stretch;
  opacity: 0.6;
}

.active {
  &.rw-container {
    border: 1.5px solid #604c8b !important;
  }

  .rw-value {
    color: white;
    overflow: hidden;
    background: #d94432;
    mix-blend-mode: overlay;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--bg-base);
      mix-blend-mode: color;
      opacity: 1;
    }
  }
  &.peach .rw-value:after {
    opacity: 0.4;
  }
  &.orange .rw-value:after {
    opacity: 0.6;
  }
  .rw-label {
    opacity: 1;
  }
}
</style>
