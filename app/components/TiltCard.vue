<script lang="ts" setup>
defineProps({
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

// Render card with Identicon

// Get identicon SVG from API
// Extract color of background <rect> element and apply to 'identiconColor' ref for use by card svg elements
// remove <rect> element for plain identicon

const identiconColor = ref<string | null>(null)
const identicon = ref<HTMLDivElement | null>(null)
// TODO replace colors array and exampleSVG with api
const colors = ['#FC8702', '#D94432', '#E9B213', '#1A5493', '#0582CA', '#5961A8', '#21BCA5', '#FA7268', '#88B04B', '#795548']
const exampleSVGIdenticon = `<svg viewBox="0 0 160 160" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
<defs><clipPath id="hexagon-clip-33">
<path d="M251.6 17.34l63.53 110.03c5.72 9.9 5.72 22.1 0 32L251.6 269.4c-5.7 9.9-16.27 16-27.7 16H96.83c-11.43 0-22-6.1-27.7-16L5.6 159.37c-5.7-9.9-5.7-22.1 0-32L69.14 17.34c5.72-9.9 16.28-16 27.7-16H223.9c11.43 0 22 6.1 27.7 16z" transform="scale(0.5) translate(0, 16)"></path>
</clipPath></defs>
<g clip-path="url(#hexagon-clip-33)">
<g color="#FC8702" fill="#795548">
<rect fill="${colors[Math.floor(Math.random() * colors.length)]}" x="0" y="0" width="160" height="160"></rect>
<circle cx="80" cy="80" r="40" fill="#FC8702"></circle>
<g opacity=".1" fill="#010101"><path d="M119.21,80a39.46,39.46,0,0,1-67.13,28.13c10.36,2.33,36,3,49.82-14.28,10.39-12.47,8.31-33.23,4.16-43.26A39.35,39.35,0,0,1,119.21,80Z"></path></g>
<path xmlns="http://www.w3.org/2000/svg" d="M81.1 33.8s6.7 2.4 4.4 4.8-4.9-3.8-16.7-1.2S42 42 41 72.4l16.1 3.1s-3.3-12.1 6.7-12.1V51.3s20 10.9 33.4 6 27.8-36.2 3.3-39.9-19.4 16.4-19.4 16.4z" fill="#442a16"></path><path xmlns="http://www.w3.org/2000/svg" d="M41 72.4l16.1 3.1s-3.3-12.1 6.7-12.1c0 0-10-10.9 0-12.1s20 10.9 33.4 6 27.8-36.2 3.3-39.9c9.2 13.9 6.2 21-6.1 25.9-10.9 4.4-21.4.9-33.2 5.1C46 52 41.5 67.1 41 72.4z" opacity=".1"></path><path xmlns="http://www.w3.org/2000/svg" d="M105 50.6s6 6.5 7.2 10.5 3.6 1.3 3.6-2.6c0-7.4-3-10.4-5.9-14.4" fill="#442a16"></path><path xmlns="http://www.w3.org/2000/svg" d="M105 50.6s6 6.5 7.2 10.5 3.6 1.3 3.6-2.6c1.1-5.2-5.9-14.4-5.9-14.4" opacity=".1"></path><path xmlns="http://www.w3.org/2000/svg" d="M41.3 73.9L57 77.5v2l-15.5-4zm4 4.4l11.2 2.8.2 2-11.1-3.2z" fill="#754c24"></path>
<path xmlns="http://www.w3.org/2000/svg" class="st0" d="M116.4 96.2c-2.7 7.8 12.8-.3 12.5-1.2-.9-.9-4.2-1.2-4.2-1.2a35 35 0 006.5-.6c3.6-.6 5.6-3.3 5.3-4.2s-5.3-1.2-5.3-1.2c2.4 0 4.8-.4 7.1-1.2 3-1.2 4.8-3.6 3.6-4.2a8 8 0 00-3-.6c3.3-.3 7.1-3 7.7-4.8s-2.4-.6-2.4-.6c-7.1 1.2-16.9-3.9-16.9-3.9s-.6-3-2.4-3.6-2.4-.6-4.2 2.4c-.4.6-1 1.2-1.6 1.7l-.5.4c.9 7.9.1 15.6-2.2 22.8zm-72.6 1.1c-7.9 3.9-13-.4-12.7-1.4.9-1.1 4.2-1.4 4.2-1.4a36 36 0 01-6.6-.7c-3.6-.7-5.7-3.9-5.4-5s5.4-1.4 5.4-1.4c-2.5 0-4.9-.5-7.2-1.4-3-1.4-4.8-4.3-3.6-5 .9-.5 2-.7 3-.7-3.3-.4-7.2-3.6-7.8-5.7s2.4-.7 2.4-.7c7.2 1.4 17.2-4.6 17.2-4.6s.6-3.6 2.4-4.3 2.4-.7 4.2 2.8S52 77.1 52 77.1l5.5 1.4s6-1 3 2-4 2-6 4-2.3 8.7-10.7 12.8z" fill="#fff"></path><path xmlns="http://www.w3.org/2000/svg" d="M53 82s-12-4-16-7-18 1-18 1 6 4 11 4l-8 2s7 6 13 5l-7 3c3.5 2.5 7.9 3.2 12 2l-3 4s7 3 13-7 7-7 3-7zm66.2-2.8c1.5-.6 2.9-1.4 4.2-2.3 3.6-2.7 16 .9 16 .9s-5.3 3.6-9.8 3.6l7.1 1.8s-6.2 5.3-11.6 4.4l6.2 2.7c-3.1 2.2-7 2.8-10.7 1.8l2.7 3.6c-2.1.7-4.5.4-6.4-.8 2.1-5.9 2.1-8.9 2.3-15.7z" opacity=".05"></path>
<ellipse xmlns="http://www.w3.org/2000/svg" cx="108.8" cy="71.6" rx="3.7" ry="4.3" fill="#42210b"></ellipse><path xmlns="http://www.w3.org/2000/svg" d="M76.1 87.3s2.8 13.4 18.4 12.7c16-.8 16.5-13.6 16.5-13.6" fill="none" stroke="#42210b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path xmlns="http://www.w3.org/2000/svg" d="M75.6 68.2a9.3 9.3 0 018.7 6.2c-3.2-2.1-4.2-2.8-9-.6" fill="none" stroke="#42210b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path xmlns="http://www.w3.org/2000/svg" d="M85.2 120.5c-.6 5.3 0 10.6 1.8 15.5 3 8 2 6 2 6" fill="none" stroke="#3f2904" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path xmlns="http://www.w3.org/2000/svg" d="M88 138s-6.4-19.1 12.8-19.6S129 99 129 99a34.4 34.4 0 01-10 29c-7 8-23-4-31 10zM84.7 130.4s-3.3-8.8-17.9-10-29.2 1.2-32.5-14.4c-1 8.2 1.4 16.5 6.8 22.8 9 10.8 31.4 3.6 31.4 3.6s9-3.6 14.6 3.6l-2.4-5.6z"></path><g xmlns="http://www.w3.org/2000/svg" opacity=".25" fill="#010101"><path d="M88 138c-1-17 36-8 41-39a34.4 34.4 0 01-10 29c-7 8-23-4-31 10zM34.2 106S33 120 41 128.8c9 10.2 31.4 3.6 31.4 3.6 1.4-2.4 15.6-.3 14.6 3.6 0-13.7-48-3.9-52.8-30z"></path></g>
</g>
</g></svg>`

onMounted(() => {
  nextTick(() => {
    identicon.value!.innerHTML = exampleSVGIdenticon
    nextTick(() => {
      const backgroundColor = identicon.value?.querySelector('svg rect[fill]')?.getAttribute('fill')
      identiconColor.value = backgroundColor as string | null
      identicon.value?.querySelector('svg rect')?.remove()
    })
  })
})
</script>

<template>
  <div class="relative overflow-hidden rounded-12 !h-478 !min-w-311 !w-311">
    <img src="/img/card-master-bg-rays.png" class="absolute left-0 top-0 z-0 h-full w-full" alt="">
    <div class="absolute left-0 top-0 z-0 h-full w-full mix-blend-color" :style="`background-color: ${identiconColor};`" />
    <img :src="`/img/${card}-card-frame.png`" class="relative z-1 h-full w-full" alt="" srcset="">
    <IdenticonCardHex class="left-1/2 top-78 z-4 !absolute -translate-x-1/2" :type="card" :color="identiconColor" />
    <div ref="identicon" class="absolute left-1/2 top-74 z-5 scale-75 -translate-x-1/2" />
    <img
      class="metal-grain absolute left-0 top-0 z-6 h-full w-full" src="/img/metal-grain.png" alt="" srcset=""
    >
  </div>
</template>

<style>
.metal-grain {
  mix-blend-mode: difference;
  filter: invert(1) brightness(1.1);
}
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
