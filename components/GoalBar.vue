<script lang="ts" setup>
const noOfBars = 100
const totalGoal = 7000000000
const currentAmount = 3500000000

const milestones = [
  {
    label: '3B',
    text: 'Base Goal',
    value: 3000000000,
  },
  {
    label: '5B',
    text: 'Stretch Goal',
    value: 5000000000,
  },
]

const relativeMilestones = milestones.map((x) => {
  const percentage = (x.value / totalGoal)
  x.value = Math.floor(percentage * noOfBars)
  return x
})

const currentPercentage = (currentAmount / totalGoal)
const relativeBars = Math.floor(currentPercentage * noOfBars)

function isBarMilestone(barIndex: number) {
  return relativeMilestones.some(x => x.value === barIndex)
}

function getRelativeMilestone(barIndex: number) {
  return relativeMilestones.find(x => x.value === barIndex)
}

function nFormatter(num: number, digits: number) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
  ]
  const regexp = /\.0+$|(?<=\.\d*[1-9])0+$/
  const item = lookup.findLast(item => num >= item.value)
  return item ? (num / item.value).toFixed(digits).replace(regexp, '').concat(item.symbol) : '0'
}

function roundDecimals(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}
</script>

<template>
  <div>
    <div class="relative h-125 w-full border-1 border-darkblue/07 rounded-full">
      <!-- Bars -->
      <div class="grid h-full w-full gap-x-3 overflow-hidden border-4 border-white rounded-full" :style="`grid-template-columns: repeat(${noOfBars}, 1fr);`">
        <div
          v-for="(bar, index) in noOfBars" :key="index"
          class="relative h-full w-full rounded-2"
          :class="{
            'bg-transparent !rounded-none !w-0 mx-auto border-dashed border-l-2 border-gold': isBarMilestone(index),
            'bg-gold': !isBarMilestone(index) && index <= relativeBars && index >= relativeBars - 2,
            'bg-gold/30': !isBarMilestone(index) && index <= relativeBars - 2,
            'bg-darkblue/07': !isBarMilestone(index) && index > relativeBars,
          }"
        />
      </div>

      <!-- Info bubble -->
      <div class="absolute left-20 top-1/2 -translate-y-1/2">
        <div class="flex items-center gap-x-8 rounded-full bg-white px-32 py-24 text-44 color-gold font-600 leading-70% shadow">
          {{ nFormatter(currentAmount, 1) }}
          <span class="text-18 color-darkblue/20 font-bold">/</span>
          <span class="text-18 color-darkblue/40 font-bold"> {{ roundDecimals(currentPercentage * 100) }}%</span>
        </div>
      </div>
    </div>
    <!-- Milestone labels: based below in grid due to overflow issues when placed in the above div -->
    <div class="grid mb-120 h-full w-full gap-x-3 border-4 border-white rounded-full" :style="`grid-template-columns: repeat(${noOfBars}, 1fr);`">
      <div
        v-for="(bar, index) in noOfBars" :key="index"
        class="relative h-full w-full rounded-2"
      >
        <div v-if="isBarMilestone(index)" class="absolute left-1/2 -translate-x-1/2">
          <div
            class="mx-auto h-0 w-0 border-b-[5px] border-l-[4px] border-r-[4px] border-b-yellow-500 border-l-transparent border-r-transparent -mb-1"
          />
          <div class="mx-auto w-fit rounded-full bg-gold px-13 py-4.5 text-14 text-white leading-[100%]">
            {{ getRelativeMilestone(index)?.label }}
          </div>
          <div class="mt-4 whitespace-nowrap text-16 text-darkblue/40 leading-100%">
            {{ getRelativeMilestone(index)?.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
