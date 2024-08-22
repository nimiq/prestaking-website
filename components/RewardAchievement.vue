<script lang="ts" setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
    required: true,
  },
  value: {
    type: String,
    default: null,
    required: true,
  },
  text: {
    type: String,
    default: null,
    required: true,
  },
})
</script>

<template>
  <div :class="active && 'active'" class="rw-container relative min-w-[33%]">
    <div class="rw-value">
      {{ value }}
    </div>
    <div class="rw-label">
      {{ text }}
    </div>
    <svg v-if="active" class="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2" width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M12.0492 1.38211C10.6777 0.32571 8.67713 0.861751 8.01757 2.46237L7.29323 4.22021C7.07098 4.75954 6.57698 5.1386 5.99851 5.21368L4.11309 5.45838C2.39631 5.6812 1.36076 7.47482 2.02619 9.07301L2.75698 10.8282C2.9812 11.3667 2.89992 11.984 2.54396 12.4462L1.3838 13.9524C0.327406 15.3239 0.863447 17.3244 2.46407 17.984L4.2219 18.7083C4.76124 18.9306 5.1403 19.4246 5.21538 20.0031L5.46008 21.8885C5.68289 23.6053 7.47652 24.6408 9.07471 23.9754L10.8299 23.2446C11.3684 23.0204 11.9857 23.1016 12.4479 23.4576L13.9541 24.6178C15.3256 25.6742 17.3261 25.1381 17.9857 23.5375L18.71 21.7797C18.9323 21.2403 19.4263 20.8613 20.0047 20.7862L21.8902 20.5415C23.6069 20.3187 24.6425 18.525 23.9771 16.9269L23.2463 15.1717C23.0221 14.6332 23.1033 14.0158 23.4593 13.5537L24.6195 12.0475C25.6758 10.676 25.1398 8.67543 23.5392 8.01587L21.7814 7.29153C21.242 7.06929 20.863 6.57529 20.7879 5.99681L20.5432 4.1114C20.3204 2.39461 18.5267 1.35906 16.9285 2.02449L15.1734 2.75528C14.6349 2.9795 14.0175 2.89822 13.5554 2.54227L12.0492 1.38211Z" fill="#604C8B" stroke="white" />
      <path d="M8.89746 13.132L11.6343 15.7805L17.108 10.4834" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</template>

<style>
.rw-container {
  --bg-pink: linear-gradient(
    139deg,
    #cce8fe 5.7%,
    #cda0ff 27.03%,
    #8489f5 41.02%,
    #cdf1ff 68.68%,
    #b591e9 94%
  );

  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid rgba(31, 35, 72, 0.05);
  background: rgba(248, 248, 248, 0.02);
  box-shadow: 0px 9.017px 36.068px 0px rgba(31, 35, 72, 0.05) inset;
}

.rw-value {
  display: flex;
  padding: 8px 24px;
  max-height: 75vh;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 86px;
  background: linear-gradient(
      0deg,
      rgba(31, 35, 72, 0.06) 0%,
      rgba(31, 35, 72, 0.06) 100%
    ),
    #fff;

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
    border: 1px solid #604c8b !important;
  }
  .rw-value {
    background: var(--bg-pink);
    color: white;
  }
  .rw-label {
    opacity: 1;
  }
}
</style>
