<script setup>
import { onMounted, ref, watch } from 'vue'

import { gsap } from 'gsap'
import { adjust, clamp, round } from '../assets/Math'
// import { useOrientationStore } from '~/stores/orientation'

const props = defineProps({
  id: String,
  name: String,
  number: String,
  set: String,
  types: String,
  subtypes: { type: String, default: 'basic' },
  supertype: { type: String, default: 'pokémon' },
  rarity: { type: String, default: 'common' },
  img: String,
  back: { type: String, default: 'https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg' },
  foil: String,
  mask: String,
  showcase: { type: Boolean, default: false },
})

const activeCard = ref(null)
// const orientationStore = useOrientationStore()
const thisCard = ref(null)
const loading = ref(true)
const interacting = ref(false)
const active = ref(false)
const isVisible = ref(document.visibilityState === 'visible')
const firstPop = ref(true)

onMounted(() => {
//   orientationStore.startListening()
})

onUnmounted(() => {
//   orientationStore.stopListening()
})

const randomSeed = {
  x: Math.random(),
  y: Math.random(),
}

const cosmosPosition = {
  x: Math.floor(randomSeed.x * 734),
  y: Math.floor(randomSeed.y * 1280),
}

let showcaseInterval
let showcaseTimerStart
let showcaseTimerEnd
const showcaseRunning = ref(props.showcase)

const back_img = ref(props.back)
const front_img = ref('')
// const img_base = ref(props.img.startsWith('http') ? '' : 'https://images.pokemontcg.io/')
const foilStyles = ref('')
const staticStyles = `
    --seedx: ${randomSeed.x};
    --seedy: ${randomSeed.y};
    --cosmosbg: ${cosmosPosition.x}px ${cosmosPosition.y}px;
  `

const springRotate = {
  values: {
    x: 0,
    y: 0,
  },
}
// const springGlare = {
//   values: {
//     x: 0,
//     y: 0,
//     o: 0,
//   },
// }
// const springBackground = {
//   values: {
//     x: 0,
//     y: 0,
//   },
// }
const springRotateDelta = {
  values: {
    x: 0,
    y: 0,
  },
}
const springTranslate = {
  values: {
    x: 0,
    y: 0,
  },
}
const springScale = {
  values: 1,
}

//   const springInteractSettings = { duration: 1000, bounce: 0.0 }
//   const springPopoverSettings = { stiffness: 0.033, damping: 0.45 }
//   const springRotate = useSpring(motionProperties, springInteractSettings)
//   const springGlare = useSpring({ x: 50, y: 50, o: 0 }, springInteractSettings)
//   const springBackground = useSpring({ x: 50, y: 50 }, springInteractSettings)
//   const springRotateDelta = useSpring(motionProperties, springPopoverSettings)
//   const springTranslate = useSpring({ x: 0, y: 0 }, springPopoverSettings)
//   const springScale = useSpring(1, springPopoverSettings)

const mousePos = ref(null)

//   const dynamicStyles = computed(() => {
//     const x = mousePos.value
//       return `
//         --pointer-x: ${springGlare.values.x}%;
//         --pointer-y: ${springGlare.values.y}%;
//         --pointer-from-center: ${clamp(Math.sqrt((springGlare.values.y - 50) ** 2 + (springGlare.values.x - 50) ** 2) / 50, 0, 1)};
//         --pointer-from-top: ${springGlare.values.y / 100};
//         --pointer-from-left: ${springGlare.values.x / 100};
//         --card-opacity: ${springGlare.values.o};
//         --card-scale: ${springScale.values};
//       `
//   })

watch(activeCard, () => {
  if (activeCard.value === thisCard.value) {
    popover()
    active.value = true
  }
  else {
    retreat()
    active.value = false
  }
})

function interact(e) {
  mousePos.value = e
  endShowcase()
  if (!isVisible.value)
    return interacting.value = false
  if (activeCard.value && activeCard.value !== thisCard.value)
    return interacting.value = false

  interacting.value = true
  if (e.type === 'touchmove') {
    e.clientX = e.touches[0].clientX
    e.clientY = e.touches[0].clientY
  }

  //   orientate(orientationStore.orientation);

  const rect = e.target.getBoundingClientRect()
  const absolute = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  }
  const percent = {
    x: clamp(round((100 / rect.width) * absolute.x)),
    y: clamp(round((100 / rect.height) * absolute.y)),
  }
  const center = {
    x: percent.x - 50,
    y: percent.y - 50,
  }

  updateSprings(
    {
      x: adjust(percent.x, 0, 100, 37, 63),
      y: adjust(percent.y, 0, 100, 33, 67),
    },
    {
      x: round(-(center.x / 3.5)),
      y: round(center.y / 2),
    },
    {
      x: round(percent.x),
      y: round(percent.y),
      o: 1,
    },
  )
}

function interactEnd(e, delay = 500) {
  setTimeout(() => {
    const background = {
      x: 50,
      y: 50,
    }
    const glare = {
      x: 50,
      y: 50,
    }
    const rotate = {
      x: 0,
      y: 0,
    }

    gsap.to(thisCard.value, {
      'duration': 1,
      '--pointer-x': `${glare.x}%`,
      '--pointer-y': `${glare.y}%`,
      '--pointer-from-center': clamp(Math.sqrt((glare.y - 50) ** 2 + (glare.x - 50) ** 2) / 50, 0, 1),
      '--pointer-from-top': glare.y / 100,
      '--pointer-from-left': glare.x / 100,
      '--card-opacity': glare.o,

      '--background-x': `${background.x}%`,
      '--background-y': `${background.y}%`,

      '--rotate-x': `${rotate.x + rotate.x}deg`,
      '--rotate-y': `${rotate.y + rotate.y}deg`,

      'easing': 'elastic.out(2,0.3)',
    })
  }, delay)
}

function activate() {
  if (activeCard.value === thisCard.value) {
    activeCard.value = undefined
  }
  else {
    activeCard.value = thisCard.value
    // resetBaseOrientation()
  }
}

function deactivate() {
  interactEnd()
  activeCard.value = undefined
}

// function reposition(e) {
//   clearTimeout(repositionTimer)
//   repositionTimer = setTimeout(() => {
//     if (activeCard.value === thisCard.value) {
//       setCenter()
//     }
//   }, 300)
// }

function setCenter() {
  const rect = thisCard.value.getBoundingClientRect()
  const view = document.documentElement

  const delta = {
    x: round(view.clientWidth / 2 - rect.x - rect.width / 2),
    y: round(view.clientHeight / 2 - rect.y - rect.height / 2),
  }
  springTranslate.set({
    x: delta.x,
    y: delta.y,
  })
}

function popover() {
  const rect = thisCard.value.getBoundingClientRect()
  let delay = 100
  const scaleW = (window.innerWidth / rect.width) * 0.9
  const scaleH = (window.innerHeight / rect.height) * 0.9
  const scaleF = 1.75
  setCenter()
  if (firstPop.value) {
    delay = 1000
    springRotateDelta.values = {
      x: 360,
      y: 0,
    }
  }
  firstPop.value = false
  springScale.set(Math.min(scaleW, scaleH, scaleF))
  interactEnd(null, delay)
}

function retreat() {
  springScale.set(1, { soft: true })
  springTranslate.set({ x: 0, y: 0 }, { soft: true })
  springRotateDelta.set({ x: 0, y: 0 }, { soft: true })
  interactEnd(null, 100)
}

function reset() {
  interactEnd(null, 0)
  springScale.set(1, { hard: true })
  springTranslate.set({ x: 0, y: 0 }, { hard: true })
  springRotateDelta.set({ x: 0, y: 0 }, { hard: true })
  springRotate.set({ x: 0, y: 0 }, { hard: true })
}

// function orientate(e) {
//   const x = e.relative.gamma
//   const y = e.relative.beta
//   const limit = { x: 16, y: 18 }

//   const degrees = {
//     x: clamp(x, -limit.x, limit.x),
//     y: clamp(y, -limit.y, limit.y),
//   }

//   updateSprings(
//     {
//       x: adjust(degrees.x, -limit.x, limit.x, 37, 63),
//       y: adjust(degrees.y, -limit.y, limit.y, 33, 67),
//     },
//     {
//       x: round(degrees.x * -1),
//       y: round(degrees.y),
//     },
//     {
//       x: adjust(degrees.x, -limit.x, limit.x, 0, 100),
//       y: adjust(degrees.y, -limit.y, limit.y, 0, 100),
//       o: 1,
//     },
//   )
// }

//   const duration = 0.4
//   const easing = 'elastic.out(2,0.1)'

//   const inited = fals
function updateSprings(background, rotate, glare) {
  //   if (!inited) {
  //     let pointerXTo = gsap.quickTo(thisCard.value, "--pointer-x", { duration, ease: easing }),
  //     pointerYTo = gsap.quickTo(thisCard.value, "--pointer-y", { duration, ease: easing }),
  //     pointerFromCenterTo = gsap.quickTo(thisCard.value, "--pointer-from-center", { duration, ease: easing }),
  //     pointerFromTopTo = gsap.quickTo(thisCard.value, "--pointer-from-top", { duration, ease: easing }),
  //     pointerFromLeftTo = gsap.quickTo(thisCard.value, "--pointer-from-left", { duration, ease: easing }),
  //     cardOpacity = gsap.quickTo(thisCard.value, "--card-opacity", { duration, ease: easing }),
  //     backgroundXTo = gsap.quickTo(thisCard.value, "--background-x", { duration, ease: easing }),
  //     backgroundYTo = gsap.quickTo(thisCard.value, "--background-y", { duration, ease: easing }),
  //     rotateXTo = gsap.quickTo(thisCard.value, "--rotate-x", { duration, ease: easing }),
  //     rotateYTo = gsap.quickTo(thisCard.value, "--rotate-y", { duration, ease: easing })
  //     inited = true
  // } else {
  //     pointerYTo(glare.x + '%')
  //     pointerXTo(glare.y + '%')
  //     pointerFromCenterTo(clamp(Math.sqrt((glare.y - 50) ** 2 + (glare.x - 50) ** 2) / 50, 0, 1))
  //     pointerFromTopTo(glare.y / 100)
  //     pointerFromLeftTo(glare.x / 100)
  //     cardOpacity(glare.o)
  //     backgroundXTo(background.x + '%')
  //     backgroundYTo(background.y + '%')
  //     rotateXTo(rotate.x + rotate.x + 'deg')
  //     rotateYTo(rotate.y + rotate.y + 'deg')

  // }

  gsap.to(thisCard.value, {
    'duration': 1,
    '--pointer-x': `${glare.x}%`,
    '--pointer-y': `${glare.y}%`,
    '--pointer-from-center': clamp(Math.sqrt((glare.y - 50) ** 2 + (glare.x - 50) ** 2) / 50, 0, 1),
    '--pointer-from-top': glare.y / 100,
    '--pointer-from-left': glare.x / 100,
    '--card-opacity': glare.o,

    '--background-x': `${background.x}%`,
    '--background-y': `${background.y}%`,

    '--rotate-x': `${rotate.x + rotate.x}deg`,
    '--rotate-y': `${rotate.y + rotate.y}deg`,

    'easing': 'Elastic.out(1,0.3)',
  })
}

function imageLoader() {
  loading.value = false
  if (props.mask || props.foil) {
    foilStyles.value = `
        --mask: url(${props.mask});
        --foil: url(${props.foil});
      `
  }
}

function endShowcase() {
  if (showcaseRunning.value) {
    clearTimeout(showcaseTimerEnd)
    clearTimeout(showcaseTimerStart)
    clearInterval(showcaseInterval)
    showcaseRunning.value = false
  }
}

onMounted(() => {
  front_img.value = props.img

  // if (props.showcase && isVisible.value) {
  //   let r = 0
  //   const s = 0.02
  //   const d = 0.5
  // //   showcaseTimerStart = setTimeout(() => {
  // //     interacting.value = true
  // //     active.value = true
  // //     springRotate.stiffness = s
  // //     springRotate.damping = d
  // //     springGlare.stiffness = s
  // //     springGlare.damping = d
  // //     springBackground.stiffness = s
  // //     springBackground.damping = d
  // //     if (isVisible.value) {
  // //       showcaseInterval = setInterval(() => {
  // //         r += 0.05
  // //         springRotate.set({ x: Math.sin(r) * 25, y: Math.cos(r) * 25 })
  // //         gsap.to(springGlare.values, {
  // //             x: 55 + Math.sin(r) * 55,
  // //             y: 55 + Math.cos(r) * 55,
  // //             o: 0.8
  // //         })
  // //         springBackground.set({
  // //           x: 20 + Math.sin(r) * 20,
  // //           y: 20 + Math.cos(r) * 20
  // //         })
  // //       }, 20)
  // //       showcaseTimerEnd = setTimeout(() => {
  // //         clearInterval(showcaseInterval)
  // //         interactEnd(null, 0)
  // //       }, 4000)
  // //     } else {
  // //       interacting.value = false
  // //       active.value = false
  // //     }
  // //   }, 2000)
  // }
})

document.addEventListener('visibilitychange', () => {
  isVisible.value = document.visibilityState === 'visible'
  endShowcase()
  reset()
})
</script>

<template>
  <div
    ref="thisCard"
    class="interactive card"
    :class="[types, { active, interacting, loading, masked: !!mask }]"
    :data-number="number"
    :data-set="set"
    :data-subtypes="subtypes"
    :data-supertype="supertype"
    :data-trainer-gallery="false"
    data-rarity="common reverse holo"
  >
    <!-- :style="dynamicStyles" -->
    <div class="card__translater">
      <button
        class="card__rotator"
        :aria-label="`Expand the Pokemon Card; ${name}.`"
        tabindex="0"
        @click="activate"
        @mousemove="interact"
        @mouseout="interactEnd"
        @blur="deactivate"
      >
        <img
          class="card__back"
          :src="back_img"
          alt="The back of a Pokemon Card, a Pokeball in the center with Pokemon logo above and below"
          loading="lazy"
          width="660"
          height="921"
        >
        <div class="card__front" :style="`${staticStyles} ${foilStyles}`">
          <img
            :src="front_img"
            :alt="`Front design of the ${name} Pokemon Card, with the stats and info around the edge`"
            loading="lazy"
            width="660"
            height="921"
            @load="imageLoader"
          >
          <div class="card__shine" />
          <div class="card__glare" />
        </div>
      </button>
    </div>
  </div>
</template>

  <style scoped>
  :root {
  --pointer-x: 50%;
  --pointer-y: 50%;
  --card-scale: 1;
  --card-opacity: 0;
  --translate-x: 0px;
  --translate-y: 0px;
  --rotate-x: 0deg;
  --rotate-y: 0deg;
  --background-x: var(--pointer-x);
  --background-y: var(--pointer-y);
  --pointer-from-center: 0;
  --pointer-from-top: var(--pointer-from-center);
  --pointer-from-left: var(--pointer-from-center);
}
</style>
