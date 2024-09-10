<script lang="ts" setup>
const props = defineProps({
  reducedMovement: {
    type: Boolean,
    required: false,
    default: false,
  },
})

// Render card with Identicon

// Get identicon SVG from API
// Extract color of background <rect> element and apply to 'identiconColor' ref for use by card svg elements
// remove <rect> element for plain identicon

const cardContainer = ref<HTMLDivElement | null>(null)
const glow = ref<HTMLDivElement | null>(null)

// Tilt functionality
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
  ${props.reducedMovement ? 'scale3d(1.01, 1.01, 1.01)' : 'scale3d(1.05, 1.05, 1.05)'}
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

// Trigger mouse events
function enter() {
  bounds = cardContainer.value!.getBoundingClientRect()
  document.addEventListener('mousemove', rotateToMouse)
}

function leave() {
  document.removeEventListener('mousemove', rotateToMouse)
  cardContainer.value!.style.transform = ''
  cardContainer.value!.style.background = ''
}
</script>

<template>
  <div class="tilt-card-container max-w-fit rounded-8">
    <div ref="cardContainer" class="tilt-card relative z-10 overflow-hidden rounded-8" @mouseenter="enter" @mouseleave="leave">
      <slot />
      <div ref="glow" class="glow max-h-full max-w-full rounded-12" :class="reducedMovement && 'reduced'" />
    </div>
  </div>
</template>

<style>
.tilt-card-container {
  position: relative;
  perspective: 1500px;
}
.tilt-card {
  transition-duration: 300ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  transform: rotate3d(0);
}

.tilt-card:hover {
  transition-duration: 150ms;
  box-shadow: 0 5px 20px 5px #00000044;
}

.tilt-card .glow {
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
