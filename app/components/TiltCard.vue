<script lang="ts" setup>
const props = defineProps({
  card: {
    type: String,
    required: true,
  },
  reducedMovement: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const thingContainer = ref<HTMLDivElement | null>(null)

const cardContainer = ref<HTMLDivElement | null>(null)
const glow = ref<HTMLDivElement | null>(null)
let bounds: DOMRect
function rotateToMouse(e: MouseEvent) {
  if (!cardContainer.value)
    return
  const mouseX = e.clientX
  const mouseY = e.clientY
  const leftX = mouseX - bounds.x
  const topY = mouseY - bounds.y
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  }
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

  cardContainer.value.style.transform = `
  scale3d(1.02, 1.02, 1.02)
  rotate3d(
    ${center.y / 100},
    ${-center.x / 100},
    0,
    ${Math.log(distance) * (props.reducedMovement ? 0.15 : 2)}deg
  )
`
  if (glow.value) {
    glow.value.style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #0000000f
    )
  `
  }
}

function enter() {
  bounds = cardContainer.value!.getBoundingClientRect()
  document.addEventListener('mousemove', rotateToMouse)
}

function leave() {
  document.removeEventListener('mousemove', rotateToMouse)
  cardContainer.value!.style.transform = ''
  cardContainer.value!.style.background = ''
}

onMounted(() => {
  nextTick(() => {
  })
})
</script>

<template>
  <div ref="thingContainer" class="thing-container !h-478 !min-w-311 !w-311">
    <div ref="cardContainer" :key="card" class="thing relative z-10 overflow-hidden rounded-12" @mouseenter="enter" @mouseleave="leave">
      <img :src="`/img/${card}-card.png`" class="h-full w-full" alt="" srcset="">
      <img class="card-identicon absolute left-1/2 top-120 -translate-x-1/2" src="/img/identicon.svg" alt="" srcset="">
      <!-- <div class="card-identicon absolute left-1/2 top-120 -translate-x-1/2" v-html="svg" /> -->
      <img
        class="metal-grain absolute left-0 top-0 h-full w-full" src="/img/metal-grain.png" alt="" srcset=""
      >
      <div ref="glow" class="glow" :class="reducedMovement && 'reduced'" />
    </div>
  </div>
</template>

<style>
.metal-grain {
  mix-blend-mode: difference;
  filter: invert(1) brightness(1.1);
}
.thing-container {
  position: relative;
  perspective: 1500px;
}
.thing {
  transition-duration: 300ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  transform: rotate3d(0);
}

.thing:hover {
  transition-duration: 150ms;
  box-shadow: 0 5px 20px 5px #00000044;
}

.thing .glow {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  mix-blend-mode: plus-lighter;

  background-image: radial-gradient(circle at 312.5px 22.9766px, rgba(255, 255, 255, 0.1), rgb(255 255 255 / 18%));
}

.glow.reduced {
  opacity: 0.4;
}
</style>
