<script lang="ts" setup>
const props = defineProps({
  reducedMovement: {
    type: Boolean,
    required: false,
    default: false,
  },
  rounding: {
    type: String,
    default: '8',
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

const rotateX = ref<number>(0)
const rotateY = ref<number>(0)

function angleUpdate(angle: number) {
  if (!cardContainer.value)
    return
  rotateX.value = angle
  //   const mouseX = e.clientX
  //   const mouseY = e.clientY
  //   const leftX = mouseX - bounds.x
  //   const topY = mouseY - bounds.y
  //   const center = {
  //     x: leftX - bounds.width / 2,
  //     y: topY - bounds.height / 2,
  //   }
  //   const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

//   cardContainer.value.style.transform = `
//   ${props.reducedMovement ? 'scale3d(1.01, 1.01, 1.01)' : 'scale3d(1.05, 1.05, 1.05)'}
//   rotate3d(
//     ${center.y / 100},
//     ${-center.x / 100},
//     0,
//     ${Math.log(distance) * (props.reducedMovement ? 0.15 : 2)}deg
//   )
// `
  // if (glow.value) {
  //   glow.value.style.backgroundImage = `
  //   radial-gradient(
  //     circle at
  //     ${center.x * 2 + bounds.width / 2}px
  //     ${center.y * 2 + bounds.height / 2}px,
  //     #ffffff55,
  //     #0000000f
  //   )
  // `
  // }
}

onMounted(() => {
  if (window.innerWidth < 500) {
    setTimeout(() => {
      nextTick(() => {
        getAccel()
      })
    }, 3000)
  }
})

function getAccel() {
  if (navigator.userAgent.match(/Android/i)) {
    window.addEventListener('deviceorientation', (e) => {
      // angleUpdate(e.gamma)
      rotateX.value = e.gamma

      if (e.beta > 30 && e.beta < 90) {
        rotateY.value = (e.beta - 30) - 20
      }
    })
  }
  // else {
  //   // IOS
  //   DeviceMotionEvent.requestPermission().then((response) => {
  //     if (response == 'granted') {
  //       setGyroPermissionGranted.value = true
  //       let delta
  //       const ratio = 300 / 20

  //       window.addEventListener('deviceorientation', (e) => {
  //         delta = Math.abs(e.gamma)

  //         if (delta > 2 && delta < 20) {
  //           const width = 400 + delta * ratio

  //           const snappedWidth = snappedWidths.reduce((prev, curr) => {
  //             return Math.abs(curr - width) < Math.abs(prev - width)
  //               ? curr
  //               : prev
  //           })

  //           setSnappedWidth(snappedWidth)
  //           setCurrentWidth(width)
  //         }
  //         else if (delta < 2) {
  //           setCurrentWidth(400)
  //         }
  //         else if (delta > 20) {
  //           setCurrentWidth(700)
  //         }
  //       })
  //     }
  //   })
  // }
}

const y = computed(() => {
  return rotateY.value
})

const x = computed(() => {
  if (rotateX.value > -20 && rotateX.value < 20) {
    return rotateX.value
  }
  return rotateX.value < 0 ? -20 : 20
})
</script>

<template>
  <div class="tilt-card-container h-full min-w-fit" :class="`rounded-${rounding}`">
    <div
      ref="cardContainer" :style="`transform: rotateY(${x}deg) rotateX(${y}deg)`" class="tilt-card relative z-10 size-full overflow-hidden" :class="`rounded-${rounding}`" @mouseenter="enter" @mouseleave="leave"
    >
      <!-- ${Math.log(distance) * (props.reducedMovement ? 0.15 : 2)}deg -->
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
