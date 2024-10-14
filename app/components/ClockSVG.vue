<script lang="ts" setup>
const hour = ref({
  firstDigit: 0,
  secondDigit: 0,
})
const minute = ref({
  firstDigit: 0,
  secondDigit: 0,
})
const day = ref({
  firstDigit: 0,
  secondDigit: 0,
})

const transitionDate = new Date('2024-11-19T12:00:00Z') // UTC

let timeout: number

function updateTime() {
  const seconds = Math.floor((transitionDate.getTime() - Date.now()) / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  hours = Math.floor((hours - (days * 24)))
  minutes = (minutes - (days * 24 * 60) - (hours * 60))

  const daysAsString = days.toString(10).padStart(2, '0')
  day.value.firstDigit = Number.parseInt(daysAsString[0] as string)
  day.value.secondDigit = Number.parseInt(daysAsString[1] as string)

  const hoursAsString = hours.toString(10).padStart(2, '0')
  hour.value.firstDigit = Number.parseInt(hoursAsString[0] as string)
  hour.value.secondDigit = Number.parseInt(hoursAsString[1] as string)

  const minutesAsString = minutes.toString(10).padStart(2, '0')
  minute.value.firstDigit = Number.parseInt(minutesAsString[0] as string)
  minute.value.secondDigit = Number.parseInt(minutesAsString[1] as string)

  // Run again when the minute changes
  timeout = window.setTimeout(updateTime, 60000 - (Date.now() % 60000))
}

useEventListener('resize', updateViewBoxWidth)

onMounted(() => {
  updateViewBoxWidth()
  updateTime()
})

onUnmounted(() => {
  clearTimeout(timeout)
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
    case 975:
      return 580
    case 505:
      return 550
    default: return 600
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
      :active-number="hour.firstDigit ? hour.firstDigit : 0"
      :index="2"
      :sprite-src="spriteSrc"
    />
    <ClockSVGDigit
      v-if="viewWidth >= 975"
      :view-width="viewWidth"
      :active-number="hour.secondDigit ? hour.secondDigit : 0"
      :index="3"
      :sprite-src="spriteSrc"
    />
    <ClockSVGDigit
      v-if="viewWidth >= 1440"
      :view-width="viewWidth"
      :active-number="minute.firstDigit ? minute.firstDigit : 0"
      :index="4"
      :sprite-src="spriteSrc"
    />
    <ClockSVGDigit
      v-if="viewWidth >= 1440"
      :view-width="viewWidth"
      :active-number="minute.secondDigit ? minute.secondDigit : 0"
      :index="5"
      :sprite-src="spriteSrc"
    />
    <g
      transform="translate(-236,-102)"
    >
      <text class="opacity-70" fill="#FFFFFF" xml:space="preserve" style="white-space: pre" font-family="sans-serif" font-size="14" font-weight="bold" letter-spacing="0.8px"><tspan x="454.168" :y="offsetY">{{ day.firstDigit }}{{ day.secondDigit }} DAYS</tspan></text>
      <text class="opacity-70" fill="#FFFFFF" xml:space="preserve" style="white-space: pre" font-family="sans-serif" font-size="14" font-weight="bold" letter-spacing="0.8px"><tspan x="915.443" :y="offsetY">{{ hour.firstDigit }}{{ hour.secondDigit }} HOURS</tspan></text>
      <text class="opacity-70" fill="#FFFFFF" xml:space="preserve" style="white-space: pre" font-family="sans-serif" font-size="14" font-weight="bold" letter-spacing="0.8px"><tspan x="1378.44" :y="offsetY">{{ minute.firstDigit }}{{ minute.secondDigit }} MINUTES</tspan></text>
    </g>
  </svg>
</template>
