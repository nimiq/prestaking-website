<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    default: '#1F2348',
  },
  type: {
    type: String,
    default: 'bronze',
  },
})

const rimColors = computed(() => {
  switch (props.type) {
    case 'bronze':
      return ['#FCD1BE', '#9E6262']
    case 'silver':
      return ['#ECF5FC', '#BEC8D3']
    case 'gold':
      return ['#FFD767', '#BB9B25']

    default:
      return ['#FCD1BE', '#9E6262']
  }
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="172" height="156" fill="none" viewBox="0 0 172 156">
    <g class="Identicon">
      <g class="Shadow" filter="url(#a)" opacity=".54" style="mix-blend-mode:overlay">
        <path fill="#000" fill-rule="evenodd" d="m6.852 84.733 33.673 58.489a13.461 13.461 0 0 0 11.674 6.748h67.349c4.716 0 9.205-2.475 11.674-6.748l33.673-58.489c2.469-4.276 2.469-9.223 0-13.496l-33.673-58.49A13.46 13.46 0 0 0 119.548 6h-67.35a13.469 13.469 0 0 0-11.673 6.748L6.852 71.238c-2.47 4.275-2.47 9.223 0 13.495Zm151.11-9.504.007.011c1.037 1.795 1.038 3.691-.002 5.493l-33.671 58.486-.004.007a5.468 5.468 0 0 1-4.744 2.744h-67.35a5.462 5.462 0 0 1-4.743-2.745l-.002-.003-33.668-58.48-.007-.012c-1.037-1.794-1.039-3.69.002-5.492L47.45 16.75l.003-.005A5.469 5.469 0 0 1 52.2 14h67.349c1.92 0 3.735 1 4.744 2.744l.002.005 33.668 58.48Z" clip-rule="evenodd" />
      </g>
      <g class="Neutral">
        <path :fill="color" d="m129.881 16.15 30.775 53.302a15.486 15.486 0 0 1 0 15.501l-30.775 53.302a15.487 15.487 0 0 1-13.419 7.75H54.906a15.485 15.485 0 0 1-13.418-7.75L10.712 84.953a15.54 15.54 0 0 1 0-15.501l30.78-53.301A15.501 15.501 0 0 1 54.913 8.4h61.55a15.486 15.486 0 0 1 13.419 7.75Z" class="Background" />
        <g class="Overlay">
          <path fill="url(#b)" d="m129.879 16.15 30.775 53.302a15.486 15.486 0 0 1 0 15.501l-30.775 53.302a15.486 15.486 0 0 1-13.419 7.75H54.905a15.485 15.485 0 0 1-13.42-7.75L10.712 84.953a15.54 15.54 0 0 1 0-15.501L41.49 16.15A15.502 15.502 0 0 1 54.909 8.4h61.551a15.485 15.485 0 0 1 13.419 7.75Z" class="Background" style="mix-blend-mode:color-dodge" />
        </g>
      </g>
      <g class="Metal rim">
        <mask id="d" width="155" height="138" x="8" y="8" class="d" maskUnits="userSpaceOnUse" style="mask-type:alpha">
          <path stroke="#fff" stroke-width="6" d="m127.267 17.646.002.003 30.772 53.296a12.488 12.488 0 0 1 0 12.499l-30.772 53.296-.002.004a12.485 12.485 0 0 1-10.818 6.247h-61.55a12.484 12.484 0 0 1-10.816-6.247l-.002-.004-30.77-53.292-.002-.002a12.539 12.539 0 0 1 0-12.503l.002-.002 30.774-53.292a12.5 12.5 0 0 1 10.82-6.25h61.544c4.466 0 8.593 2.384 10.818 6.247Z" class="Vector" />
        </mask>
        <g class="Rectangle 7" filter="url(#c)" mask="url(#d)">
          <rect width="316.773" height="491.968" x="7.232" y="7.659" fill="url(#e)" rx="4.036" />
        </g>
      </g>
    </g>
    <defs>
      <linearGradient id="b" x1="162.732" x2="31.769" y1="145.635" y2="28.728" class="b" gradientUnits="userSpaceOnUse">
        <stop stop-color="#79AEE7" />
        <stop offset=".332" stop-color="#4960A7" />
        <stop offset="1" stop-color="#1B2030" stop-opacity=".25" />
      </linearGradient>
      <linearGradient id="e" x1="165.619" x2="165.619" y1="-174.957" y2="499.627" class="e" gradientUnits="userSpaceOnUse">
        <stop :stop-color="rimColors[0]" />
        <stop offset="1" :stop-color="rimColors[1]" />
      </linearGradient>
      <filter id="a" width="171.551" height="153.774" x=".098" y="1.098" class="a" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_184_1517" stdDeviation="2.451" />
      </filter>
      <filter id="c" width="316.773" height="491.968" x="7.232" y="7.659" class="c" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feMorphology in="SourceAlpha" radius=".577" result="effect1_innerShadow_184_1517" />
        <feOffset />
        <feGaussianBlur stdDeviation=".577" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_184_1517" />
      </filter>
    </defs>
  </svg>
</template>

<style>

</style>
