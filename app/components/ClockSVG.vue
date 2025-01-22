<script lang="ts" setup>
const day = ref({
  firstDigit: 1,
  secondDigit: 9,
})
const month = ref({
  firstDigit: 1,
  secondDigit: 1,
})
const year = ref({
  firstDigit: 2,
  secondDigit: 4,
})

useEventListener('resize', updateViewBoxWidth)

onMounted(() => {
  updateViewBoxWidth()
})

const { width: windowWidth } = useWindowSize()

const viewWidth = ref(1440)
function updateViewBoxWidth() {
  if (windowWidth.value > 1024) {
    viewWidth.value = 1440
  }
  else if (windowWidth.value > 640) {
    viewWidth.value = 975
  }
  else {
    viewWidth.value = 505
  }
}

const viewBox = computed(() => {
  if (windowWidth.value > 1024) {
    return `0 0 ${viewWidth.value} 600`
  }
  else if (windowWidth.value > 640) {
    return `0 0 ${viewWidth.value} 600`
  }
  else {
    return `0 0 ${viewWidth.value} 480`
  }
})

const offsetY = computed(() => {
  switch (viewWidth.value) {
    case 1440:
      return 623.53
    case 505:
      return 550
    default: return 600
  }
})

const textOffsetX = computed(() => {
  switch (viewWidth.value) {
    case 975:
      return 650
    case 505:
      return 415
    default: return 895
  }
})

const spriteSrc = `/img/clock/sprite-${Math.floor(Math.random() * 10)}.webp`
</script>

<template>
  <svg
    id="clock-svg"
    class="w-full"
    :viewBox="viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ClockSVGDigit
      :view-width="viewWidth"
      :active-number="day.firstDigit ? day.firstDigit : 0"
      :index="0"
      :sprite-src="spriteSrc"
    />
    <ClockSVGDigit
      :view-width="viewWidth"
      :active-number="day.secondDigit ? day.secondDigit : 0"
      :index="1"
      :sprite-src="spriteSrc"
    />
    <ClockSVGDigit
      v-if="viewWidth >= 975"
      :view-width="viewWidth"
      :active-number="month.firstDigit ? month.firstDigit : 0"
      :index="2"
      :sprite-src="spriteSrc"
    />
    <ClockSVGDigit
      v-if="viewWidth >= 975"
      :view-width="viewWidth"
      :active-number="month.secondDigit ? month.secondDigit : 0"
      :index="3"
      :sprite-src="spriteSrc"
    />
    <ClockSVGDigit
      v-if="viewWidth >= 1440"
      :view-width="viewWidth"
      :active-number="year.firstDigit ? year.firstDigit : 0"
      :index="4"
      :sprite-src="spriteSrc"
    />
    <ClockSVGDigit
      v-if="viewWidth >= 1440"
      :view-width="viewWidth"
      :active-number="year.secondDigit ? year.secondDigit : 0"
      :index="5"
      :sprite-src="spriteSrc"
    />
    <g
      transform="translate(-236,-102)"
    >
      <text class="opacity-40" fill="#FFFFFF" xml:space="preserve" style="white-space: pre" font-family="sans-serif" font-size="14" font-weight="bold" letter-spacing="0.8px"><tspan :x="textOffsetX" :y="offsetY">19 NOVEMBER 2024</tspan></text>
    </g>
  </svg>
</template>
