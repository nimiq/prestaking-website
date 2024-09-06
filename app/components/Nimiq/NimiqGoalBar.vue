<script lang="ts" setup>
interface Milestone {
  label: string
  text: string
  value: number
}

const props = defineProps<{ totalGoal: number, milestones: Milestone[] }>()

const { nimiqwatchTotalStakeUrl } = useRuntimeConfig().public
const { data: currentAmount } = useFetch(nimiqwatchTotalStakeUrl, {
  transform: (stake: string) => Number.parseInt(stake) / 1e5,
  default: () => -1,
})

function calcBarsTotal() {
  if (window.innerWidth < 500) {
    return 50
  }
  if (window.innerWidth < 600) {
    return 75
  }
  else if (window.innerWidth < 1000) {
    return 100
  }
  else {
    return 125
  }
}
const noOfBars: number = calcBarsTotal()

const relativeMilestones = props.milestones.map((x) => {
  const percentage = (x.value / props.totalGoal)
  return {
    value: Math.floor(percentage * noOfBars),
    label: x.label,
    text: x.text,
  }
})

const currentPercentage = computed(() => currentAmount.value! / props.totalGoal)
const relativeBars = computed(() => Math.floor(currentPercentage.value * noOfBars))

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

const loaded = ref(false)

onMounted(() => {
  nextTick(() => {
    loaded.value = true
  })
})
</script>

<template>
  <div>
    <div v-if="loaded" class="relative h-125 w-[calc(100%+32px)] border-1 border-darkblue/07 rounded-full md:mx-0 -ml-16 -mr-16 md:w-full">
      <!-- Bars -->
      <div class="grid h-full w-full gap-x-3 overflow-hidden border-4 border-white rounded-full" :style="`grid-template-columns: repeat(${noOfBars}, 1fr);`">
        <div
          v-for="barIndex in noOfBars" :key="barIndex"
          class="relative h-full w-full rounded-2"
          :class="{
            'bg-transparent !rounded-none !w-0 mx-auto border-dashed border-l-2 border-gold': isBarMilestone(barIndex),
            'bg-gold': !isBarMilestone(barIndex) && barIndex <= relativeBars && barIndex >= relativeBars - 2,
            'bg-gold/30': !isBarMilestone(barIndex) && barIndex <= relativeBars - 2,
            'bg-darkblue/07': !isBarMilestone(barIndex) && barIndex > relativeBars,
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
    <div v-if="loaded" class="grid mb-120 h-full w-full gap-x-3 border-4 border-white rounded-full" :style="`grid-template-columns: repeat(${noOfBars}, 1fr);`">
      <div
        v-for="barIndex in noOfBars" :key="barIndex"
        class="relative h-full w-full rounded-2"
      >
        <div v-if="isBarMilestone(barIndex)" class="absolute left-1/2 -translate-x-1/2">
          <div
            class="mx-auto h-0 w-0 border-b-[5px] border-l-[4px] border-r-[4px] border-b-yellow-500 border-l-transparent border-r-transparent -mb-1"
          />
          <div class="mx-auto w-fit rounded-full bg-gold px-13 py-4.5 text-14 text-white leading-[100%]">
            {{ getRelativeMilestone(barIndex)?.label }}
          </div>
          <div class="mt-4 whitespace-nowrap text-16 text-darkblue/40 leading-100%">
            {{ getRelativeMilestone(barIndex)?.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
