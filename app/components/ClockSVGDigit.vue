<script lang="ts" setup>
const props = defineProps({
  index: {
    type: Number,
    default: 1,
    required: true,
  },
  activeNumber: {
    type: Number,
    default: 1,
    required: true,
  },
  viewWidth: {
    type: Number,
    default: 1440,
    required: true,
  },
  spriteSrc: {
    type: String,
    required: true,
  },
})

/**
 * Array of grid cells where each cell specifies for which numbers it must be filled
 */
const GRID = [
  '3457',
  '23567890',
  '123567890',
  '3457',
  '235678904',
  '123567890',
  '235678904',
  '235678904',
  '123567890',
  '123567890',
  '235678904',
  '1235678904',
  '1',
  '25678904',
  '2568904',
  '1',
  '1',
  '23678904',
  '1568904',
  '1',
  '2378904',
  '56904',
  '256894',
  '123567894',
  '27904',
  '2568904',
  '12567894',
  '235678904',
  '2680',
  '2567894',
  '123567894',
  '3568904',
  '2680',
  '17',
  '3568904',
  '2356890',
  '7',
  '1',
  '3568904',
  '12356890',
  '17',
  '123568904',
  '2356890',
  '123567890',
  '12356890',
  '123568904',
  '12356890',
  '123567890',
  '123456890',
  '2',
  '123568907',
  '12356890',
  '124',
]

const iconWidth = ref(10)
const iconHeight = computed(() => iconWidth.value)
const iconUnevenOffsetX = computed(() => iconWidth.value)
const iconUnevenOffsetY = computed(() => iconHeight.value / 3 * 2)
const iconGapX = computed(() => iconWidth.value)
const iconGapY = computed(() => iconHeight.value / 4)

function iconPosition(index: number): [number, number] {
  if (index <= 3) { // 1st row (4 slots)
    return [
      index * iconWidth.value + index * iconGapX.value,
      0,
    ]
  }
  if (index <= 6) { // 2nd row (3 slots)
    return [
      (index - 4) * iconWidth.value + (index - 4) * iconGapX.value + iconUnevenOffsetX.value,
      iconUnevenOffsetY.value,
    ]
  }
  if (index <= 10) { // 3rd row (4 slots)
    return [
      (index - 7) * iconWidth.value + (index - 7) * iconGapX.value,
      (iconHeight.value + iconGapY.value) * 1,
    ]
  }
  if (index <= 13) { // 4th row (3 slots)
    return [
      (index - 11) * iconWidth.value + (index - 11) * iconGapX.value + iconUnevenOffsetX.value,
      (iconHeight.value + iconGapY.value) * 1 + iconUnevenOffsetY.value,
    ]
  }
  if (index <= 17) { // 5th row (4 slots)
    return [
      (index - 14) * iconWidth.value + (index - 14) * iconGapX.value,
      (iconHeight.value + iconGapY.value) * 2,
    ]
  }
  if (index <= 20) { // 6th row (3 slots)
    return [
      (index - 18) * iconWidth.value + (index - 18) * iconGapX.value + iconUnevenOffsetX.value,
      (iconHeight.value + iconGapY.value) * 2 + iconUnevenOffsetY.value,
    ]
  }
  if (index <= 24) { // 7th row (4 slots)
    return [
      (index - 21) * iconWidth.value + (index - 21) * iconGapX.value,
      (iconHeight.value + iconGapY.value) * 3,
    ]
  }
  if (index <= 27) { // 8th row (3 slots)
    return [
      (index - 25) * iconWidth.value + (index - 25) * iconGapX.value + iconUnevenOffsetX.value,
      (iconHeight.value + iconGapY.value) * 3 + iconUnevenOffsetY.value,
    ]
  }
  if (index <= 31) { // 9th row (4 slots)
    return [
      (index - 28) * iconWidth.value + (index - 28) * iconGapX.value,
      (iconHeight.value + iconGapY.value) * 4,
    ]
  }
  if (index <= 34) { // 10th row (3 slots)
    return [
      (index - 32) * iconWidth.value + (index - 32) * iconGapX.value + iconUnevenOffsetX.value,
      (iconHeight.value + iconGapY.value) * 4 + iconUnevenOffsetY.value,
    ]
  }
  if (index <= 38) { // 11th row (4 slots)
    return [
      (index - 35) * iconWidth.value + (index - 35) * iconGapX.value,
      (iconHeight.value + iconGapY.value) * 5,
    ]
  }
  if (index <= 41) { // 12th row (3 slots)
    return [
      (index - 39) * iconWidth.value + (index - 39) * iconGapX.value + iconUnevenOffsetX.value,
      (iconHeight.value + iconGapY.value) * 5 + iconUnevenOffsetY.value,
    ]
  }
  if (index <= 45) { // 13th row (4 slots)
    return [
      (index - 42) * iconWidth.value + (index - 42) * iconGapX.value,
      (iconHeight.value + iconGapY.value) * 6,
    ]
  }
  if (index <= 48) { // 14th row (3 slots)
    return [
      (index - 46) * iconWidth.value + (index - 46) * iconGapX.value + iconUnevenOffsetX.value,
      (iconHeight.value + iconGapY.value) * 6 + iconUnevenOffsetY.value,
    ]
  }
  return [ // 15th row (4 slots)
    (index - 49) * iconWidth.value + (index - 49) * iconGapX.value,
    (iconHeight.value + iconGapY.value) * 7,
  ]
}

const referenceHex = ref<SVGPathElement>()
const initialLoad = ref(false)

let identiconImages: HTMLDivElement[] = []

/**
 * Called to render a new number.
 */
function addIdenticonsToPage() {
  if (!referenceHex.value) {
    return
  }

  // Prevent duplication of identicons in the same digit
  const availableSpriteIndices = Array.from({ length: 100 }).fill(0).map((_, i) => i)

  const clock = document.getElementById('clock')!
  const referenceCoords = referenceHex.value.getBoundingClientRect()
  const positionIndices = preparePositionUpdate(referenceCoords)
  positionIndices.forEach((index) => {
    const identicon = makeIdenticon(index, referenceCoords, availableSpriteIndices)
    clock.append(identicon)
    identiconImages.push(identicon)
  })
}

function makeIdenticon(index: number, referenceCoords: DOMRect, availableSpriteIndices: number[]) {
  const identicon = document.createElement('div')
  identicon.style.backgroundImage = `url(${props.spriteSrc})`

  // Randomly select a sprite position
  const spriteIndex = availableSpriteIndices.splice(Math.floor(Math.random() * availableSpriteIndices.length), 1)[0]!
  const x = spriteIndex % 10
  const y = Math.floor(spriteIndex / 10)
  identicon.dataset.x = x.toString()
  identicon.dataset.y = y.toString()

  positionIdenticon(identicon, index, referenceCoords)
  return identicon
}

/**
 * Called only when the window width changes, not when the active number changes.
 */
function updateSizeAndPosition() {
  if (!referenceHex.value) {
    return
  }
  const referenceCoords = referenceHex.value.getBoundingClientRect()
  const positionIndices = preparePositionUpdate(referenceCoords)
  positionIndices.forEach((index, i) => {
    const identicon = identiconImages[i]
    if (identicon) {
      positionIdenticon(identicon, index, referenceCoords)
    }
  })
}

function preparePositionUpdate(referenceCoords: DOMRect) {
  iconWidth.value = referenceCoords.width
  const activeNum = props.activeNumber.toString(10)
  return GRID.map((nums, i) => nums.includes(activeNum) ? i : -1).filter(index => index !== -1)
}

function positionIdenticon(identicon: HTMLDivElement, index: number, referenceCoords: DOMRect) {
  const coords = iconPosition(index)
  identicon.style.left = `${referenceCoords.left + coords[0] - 2}px`
  identicon.style.top = `${referenceCoords.top + window.scrollY + coords[1] - 2}px`
  identicon.style.width = `${iconWidth.value + 4}px`
  identicon.style.height = `${iconHeight.value + 4}px`

  const x = Number.parseInt(identicon.dataset.x!)
  const y = Number.parseInt(identicon.dataset.y!)
  identicon.style.backgroundSize = `${(iconWidth.value + 4) * 10}px`
  identicon.style.backgroundPosition = `${x * (iconWidth.value + 4)}px ${y * (iconHeight.value + 4)}px`

  identicon.classList.add('clock-identicon-container')
}

onMounted(() => {
  nextTick(() => {
    addIdenticonsToPage()
    initialLoad.value = true
  })
  window.addEventListener('resize', () => {
    nextTick(() => {
      updateSizeAndPosition()
    })
  })
})

onUnmounted(() => {
  // Clean up externally rendered DOM elements (important for hot-reloading during dev)
  for (const identicon of identiconImages) {
    identicon.remove()
  }
  identiconImages = []
})

watch(() => props.activeNumber, () => {
  if (!initialLoad.value)
    return

  for (const identicon of identiconImages) {
    identicon.remove()
  }
  identiconImages = []
  addIdenticonsToPage()
})

const leftOffset = 58.5
const digitWidth = 156
const innerDigitGap = 52
const interDigitGap = 104

const offsetX = computed(() => {
  let offset = leftOffset
  if (props.index < 1)
    return offset
  offset += digitWidth + innerDigitGap
  if (props.index < 2)
    return offset
  offset += digitWidth + interDigitGap
  if (props.index < 3)
    return offset
  offset += digitWidth + innerDigitGap
  if (props.index < 4)
    return offset
  offset += digitWidth + interDigitGap
  if (props.index < 5)
    return offset
  offset += digitWidth + innerDigitGap
  return offset
})

const offsetY = computed(() => {
  switch (props.viewWidth) {
    case 1440:
      return 224
    case 975:
      return 200
    case 505:
      return 170
    default:
      return 200
  }
})
</script>

<template>
  <g :transform="`translate(${offsetX}, ${offsetY})`">
    <path
      ref="referenceHex"
      d="M26.4561 10.3501C27.1579 11.5568 27.1579 13.0434 26.4561 14.2501L21.9202 22.0501C21.2185 23.2568 19.9217 24.0001 18.5183 24.0001H9.44652C8.04311 24.0001 6.74631 23.2568 6.0446 22.0501L1.5087 14.2501C0.806995 13.0434 0.806995 11.5568 1.5087 10.3501L6.0446 2.5501C6.74631 1.34343 8.04311 0.600098 9.44652 0.600098L18.5183 0.600098C19.9217 0.600098 21.2185 1.34343 21.9202 2.5501L26.4561 10.3501Z"
      fill="white" opacity="0"
    />
  </g>
</template>

<style>
.clock-identicon-container {
  position: absolute;
  z-index: 20;
}
</style>

<style scoped>
</style>
