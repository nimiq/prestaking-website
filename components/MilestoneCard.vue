<script lang="ts" setup>
import gsap from 'gsap'

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
  milestoneProgress: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  complete: {
    type: Boolean,
    required: true,
  },
})

const content = ref()
const container = ref()
function activeTransitionStart(el, done) {
  gsap.timeline({ onComplete: done })
    .set(el, { display: 'none' })
    .to(container.value, { minWidth: '360px', delay: 1 })
    .to(el, { display: 'flex', opacity: 1 })
}
function activeTransitionEnd(el, done) {
  gsap.timeline({ onComplete: done })

    .to(el, { opacity: 0 })
    .to(container.value, { minWidth: '178px' })
    .set(el, { display: 'none' })
}
</script>

<template>
  <div
    ref="container"
    class="milestone-card rounded-8 p-24 text-left"
    :class="{
      active: active && !complete,
      complete,
    }"
  >
    <div class="ml-auto h-fit w-fit border-1 border-black/40 rounded-full px-10 py-3 text-black font-bold opacity-40">
      IN PROGRESS
    </div>

    <svg class="mx-auto mb-64 mt-44 grow" width="130" height="131" viewBox="0 0 130 131" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M39.8023 7.84067C42.7782 0.618931 51.8042 -1.7996 57.9922 2.96669L66.3857 9.43175C69.7525 12.025 74.2501 12.6171 78.1733 10.9836L87.9541 6.91125C95.1649 3.90894 103.257 8.58117 104.263 16.327L105.626 26.8336C106.173 31.048 108.935 34.6469 112.864 36.266L122.66 40.3025C129.881 43.2783 132.3 52.3044 127.534 58.4924L121.069 66.8859C118.475 70.2527 117.883 74.7503 119.517 78.6735L123.589 88.4543C126.591 95.665 121.919 103.758 114.173 104.763L103.667 106.127C99.4524 106.673 95.8535 109.435 94.2344 113.364L90.1979 123.16C87.2221 130.382 78.196 132.8 72.008 128.034L63.6145 121.569C60.2477 118.976 55.7502 118.383 51.8269 120.017L42.0461 124.089C34.8354 127.092 26.7428 122.419 25.7375 114.674L24.3739 104.167C23.8269 99.9526 21.0654 96.3536 17.1361 94.7345L7.34049 90.6981C0.118757 87.7223 -2.29977 78.6962 2.46652 72.5082L8.93157 64.1147C11.5248 60.7479 12.1169 56.2503 10.4834 52.3271L6.41108 42.5463C3.40877 35.3355 8.081 27.243 15.8269 26.2377L26.3334 24.8741C30.5478 24.3271 34.1468 21.5655 35.7659 17.6363L39.8023 7.84067Z" fill="url(#paint0_radial_703_4122)" />
      <defs>
        <radialGradient id="paint0_radial_703_4122" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.343 32.9012) rotate(37.4217) scale(123.358 113.803)">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.62" />
        </radialGradient>
      </defs>
    </svg>
    <Transition @enter="activeTransitionStart" @leave="activeTransitionEnd">
      <div v-if="active" ref="content" class="flex flex-col gap-y-16 overflow-hidden">
        <div class="w-fit rounded-full bg-white px-16 py-1 text-18 text-gold font-bold">
          20% PRESTAKED
        </div>

        <h3 class="my-0 w-312 text-[#B88C0F]">
          {{ milestoneTitle }}
        </h3>

        <div class="w-312 text-[#B88C0F]">
          {{ milestoneDescription }}
        </div>
      </div>
    </Transition>
    <div>{{ milestoneValue }}</div>
    <!-- <div v-show="active">{{ milestoneTitle}}</div>
<div v-show="active">{{ milestoneDescription}}</div> -->
  </div>
</template>

<style>

</style>
