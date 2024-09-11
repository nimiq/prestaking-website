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
  details: {
    type: String,
    default: null,
  },
  checkmark: {
    type: Boolean,
    default: true,
    required: false,
  },
  color: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div :class="[active && 'active']" :style="`--bg-solid: ${color};`" class="rw-container relative min-w-1/3">
    <div v-if="buttonText" class="rw-value-container">
      <div class="rw-value">
        {{ buttonText }}
      </div>
    </div>
    <p class="rw-label">
      <span v-if="details" class="text-14 font-normal leading-140% opacity-60">{{ details }}<br></span>

      <span v-if="label" class="mt-6 inline-block font-bold">{{ label }}</span>
    </p>
    <slot />
    <div v-if="active && checkmark" class="absolute bottom-0 left-1/2 translate-y-1/2 text-purple -translate-x-1/2">
      <div class="absolute left-1/2 top-1/2 size-8 bg-white -translate-1/2" />
      <div class="i-nimiq:icons-lg-verified-filled text-purple" />
    </div>
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
.rw-value {
  white-space: nowrap;
  position: relative;
  display: flex;
  padding: 8px 14px;
  max-height: 75vh;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 86px;
  background: #1f234816;

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
    background: var(--bg-solid);
  }

  .rw-label {
    opacity: 1;
  }
}

.checkmark::before {
  content: '';
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background: #e9e9eb;
}
</style>
