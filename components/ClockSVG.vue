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

function isoToObj(s) {
  const b = s.split(/[-TZ:]/i)
  return new Date(Date.UTC(Number.parseInt(b[0]), Number.parseInt(b[1]) - 1, Number.parseInt(b[2]), Number.parseInt(b[3]), Number.parseInt(b[4]), Number.parseInt(b[5])))
}

const futureDate = isoToObj('2024-08-24T08:00:00Z') // UTC!!!! no + 1 for summertime

function updateTime() {
  const dateFuture = new Date(futureDate)
  const dateNow = new Date()

  const seconds = Math.floor((dateFuture.getTime() - dateNow.getTime()) / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  hours = Math.floor((hours - (days * 24)))
  minutes = (minutes - (days * 24 * 60) - (hours * 60))

  const daysAsString = days.toString().length < 2 ? `0${days.toString()}` : days.toString()
  const hoursAsString = hours.toString().length < 2 ? `0${hours.toString()}` : hours.toString()
  const minutesAsString = minutes.toString().length < 2 ? `0${minutes.toString()}` : minutes.toString()

  day.value.firstDigit = Number.parseInt(daysAsString[0])
  day.value.secondDigit = Number.parseInt(daysAsString[1])

  hour.value.firstDigit = Number.parseInt(hoursAsString[0])
  hour.value.secondDigit = Number.parseInt(hoursAsString[1])

  minute.value.firstDigit = Number.parseInt(minutesAsString[0])
  minute.value.secondDigit = Number.parseInt(minutesAsString[1])
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000 * 60)
})
</script>

<template>
  <svg
    id="clock-svg"
    class="z-2 w-full"
    viewBox="0 0 1898 802"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ClockSVGDigit :active-number="day.firstDigit ? day.firstDigit : 0" :index="0" />
    <ClockSVGDigit :active-number="day.secondDigit ? day.secondDigit : 0" :index="1" />
    <ClockSVGDigit :active-number="hour.firstDigit ? hour.firstDigit : 0" :index="2" />
    <ClockSVGDigit :active-number="hour.secondDigit ? hour.secondDigit : 0" :index="3" />
    <ClockSVGDigit :active-number="minute.firstDigit ? minute.firstDigit : 0" :index="4" />
    <ClockSVGDigit :active-number="minute.secondDigit ? minute.secondDigit : 0" :index="5" />
    <path d="M447 601.5L436.5 619L447 636H462.5L473 650.5H490L499.5 636H516.5L525 619L514 601.5H499.5L490 587H473L462.5 601.5H447Z" fill="white" />
    <path d="M915.5 601.5L905 619L915.5 636H931L941.5 650.5H958.5L968 636H985L993.5 619L982.5 601.5H968L958.5 587H941.5L931 601.5H915.5Z" fill="white" />
    <path d="M1383.5 601.5L1373 619L1383.5 636H1399L1409.5 650.5H1426.5L1436 636H1453L1461.5 619L1450.5 601.5H1436L1426.5 587H1409.5L1399 601.5H1383.5Z" fill="white" />
    <text opacity="0.6" fill="#1F2348" xml:space="preserve" style="white-space: pre" font-family="sans-serif" font-size="12" font-weight="bold" letter-spacing="0.8px"><tspan x="454.168" y="623.53">{{ day.firstDigit }}{{ day.secondDigit }} DAYS</tspan></text>
    <text opacity="0.6" fill="#1F2348" xml:space="preserve" style="white-space: pre" font-family="sans-serif" font-size="12" font-weight="bold" letter-spacing="0.8px"><tspan x="925.443" y="623.53">{{ hour.firstDigit }}{{ hour.secondDigit }} HRS</tspan></text>
    <text opacity="0.6" fill="#1F2348" xml:space="preserve" style="white-space: pre" font-family="sans-serif" font-size="12" font-weight="bold" letter-spacing="0.8px"><tspan x="1388.44" y="623.53">{{ minute.firstDigit }}{{ minute.secondDigit }} MINS</tspan></text>
  </svg>
</template>
