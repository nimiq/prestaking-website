<script lang="ts" setup>
defineProps({
  milestoneValue: {
    type: String,
    required: true,
  },
  milestoneTitle: {
    type: String,
    required: true,
  },
  milestoneDescription: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <div class="milestone-card rounded-8 bg-gray" :class="{ active }">
    <svg class="w-131" viewBox="0 0 206 207" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_ddd_584_2646)">
        <path d="M77.8023 27.8407C80.7782 20.6189 89.8042 18.2004 95.9922 22.9667L104.386 29.4317C107.753 32.025 112.25 32.6171 116.173 30.9836L125.954 26.9113C133.165 23.9089 141.257 28.5812 142.263 36.327L143.626 46.8336C144.173 51.048 146.935 54.6469 150.864 56.266L160.66 60.3025C167.881 63.2783 170.3 72.3044 165.534 78.4924L159.069 86.8859C156.475 90.2527 155.883 94.7503 157.517 98.6735L161.589 108.454C164.591 115.665 159.919 123.758 152.173 124.763L141.667 126.127C137.452 126.673 133.853 129.435 132.234 133.364L128.198 143.16C125.222 150.382 116.196 152.8 110.008 148.034L101.615 141.569C98.2477 138.976 93.7502 138.383 89.8269 140.017L80.0461 144.089C72.8354 147.092 64.7428 142.419 63.7375 134.674L62.3739 124.167C61.8269 119.953 59.0654 116.354 55.1361 114.735L45.3405 110.698C38.1188 107.722 35.7002 98.6962 40.4665 92.5082L46.9316 84.1147C49.5248 80.7479 50.1169 76.2503 48.4834 72.3271L44.4111 62.5463C41.4088 55.3355 46.081 47.243 53.8269 46.2377L64.3334 44.8741C68.5478 44.3271 72.1468 41.5655 73.7659 37.6363L77.8023 27.8407Z" fill="url(#paint0_radial_584_2646)" />
      </g>
      <circle opacity="0.1" cx="103" cy="85.5003" r="44.6875" stroke="white" stroke-width="2.21591" />
      <defs>
        <filter id="filter0_ddd_584_2646" x="0" y="0.500244" width="206" height="206" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.25" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.02 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_584_2646" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="7" />
          <feGaussianBlur stdDeviation="4.25" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.04 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_584_2646" result="effect2_dropShadow_584_2646" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="18" />
          <feGaussianBlur stdDeviation="19" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.07 0" />
          <feBlend mode="normal" in2="effect2_dropShadow_584_2646" result="effect3_dropShadow_584_2646" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_584_2646" result="shape" />
        </filter>
        <radialGradient id="paint0_radial_584_2646" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.343 52.9012) rotate(37.4217) scale(123.358 113.803)">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.62" />
        </radialGradient>
      </defs>
    </svg>

    <div>{{ milestoneValue }}</div>
    <!-- <div v-show="active">{{ milestoneTitle}}</div>
<div v-show="active">{{ milestoneDescription}}</div> -->
  </div>
</template>

<style>

</style>
