<script lang="ts" setup>
defineProps({
  card: {
    type: String,
    required: true,
  },
})

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
    ${Math.log(distance) * 2}deg
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
</script>

<template>
  <div class="thing-container">
    <div ref="cardContainer" :key="card" class="thing relative z-10 overflow-hidden rounded-12" @mouseenter="enter" @mouseleave="leave">
      <img :src="card" class="h-full w-full" alt="" srcset="">
      <img class="card-identicon absolute left-1/2 top-120 -translate-x-1/2" src="/img/identicon.svg" alt="" srcset="">
      <img
        class="absolute left-0 top-0 h-full w-full mix-blend-color-burn" src="/img/metal-grain.png" alt="" srcset=""
      >
      <div ref="glow" class="glow" />
    </div>
  </div>
</template>

<style>
.thing-container {
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

  background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
}
</style>
