<script lang="ts" setup>
defineProps({
  color: {
    type: String,
    default: '#1F2348',
  },
  type: {
    type: String,
    default: 'bronze',
  },
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 155 155">
    <g class="Identicon" clip-path="url(#a)">
      <g class="Neutral">
        <path :fill="color" d="m121.881 16.15 30.775 53.302a15.486 15.486 0 0 1 0 15.501l-30.775 53.302a15.487 15.487 0 0 1-13.419 7.75H46.906a15.485 15.485 0 0 1-13.418-7.75L2.712 84.953a15.54 15.54 0 0 1 0-15.501l30.78-53.301A15.501 15.501 0 0 1 46.913 8.4h61.55a15.486 15.486 0 0 1 13.419 7.75Z" class="Background" />
        <g class="Overlay">
          <path fill="url(#b)" d="m121.879 16.15 30.775 53.302a15.486 15.486 0 0 1 0 15.501l-30.775 53.302a15.486 15.486 0 0 1-13.419 7.75H46.905a15.485 15.485 0 0 1-13.42-7.75L2.71 84.953a15.54 15.54 0 0 1 0-15.501L33.49 16.15A15.502 15.502 0 0 1 46.91 8.4h61.55a15.485 15.485 0 0 1 13.419 7.75Z" class="Background" style="mix-blend-mode:color-dodge" />
        </g>
      </g>
      <g class="Metal rim">
        <mask id="d" width="155" height="138" x="0" y="8" class="d" maskUnits="userSpaceOnUse" style="mask-type:alpha">
          <path stroke="#fff" stroke-width="6" d="m119.267 17.646.002.003 30.772 53.296a12.488 12.488 0 0 1 0 12.499l-30.772 53.296-.002.004a12.485 12.485 0 0 1-10.818 6.247h-61.55a12.484 12.484 0 0 1-10.816-6.247l-.002-.004L5.31 83.448l-.002-.002a12.54 12.54 0 0 1 0-12.503l.002-.002 30.774-53.292a12.5 12.5 0 0 1 10.82-6.25h61.544c4.466 0 8.593 2.384 10.818 6.247Z" class="Vector" />
        </mask>
        <g class="Rectangle 7" filter="url(#c)" mask="url(#d)">
          <rect width="316.773" height="491.968" x="-.768" y="7.659" fill="url(#e)" rx="4.036" />
        </g>
      </g>
    </g>
    <defs>
      <linearGradient id="b" x1="154.732" x2="23.769" y1="145.635" y2="28.728" class="b" gradientUnits="userSpaceOnUse">
        <stop stop-color="#79AEE7" />
        <stop offset=".332" stop-color="#4960A7" />
        <stop offset="1" stop-color="#1B2030" stop-opacity=".25" />
      </linearGradient>
      <linearGradient id="e" x1="157.619" x2="157.619" y1="-174.957" y2="499.627" class="e" gradientUnits="userSpaceOnUse">
        <stop stop-color="#ECF5FC" />
        <stop offset="1" stop-color="#BEC8D3" />
      </linearGradient>
      <clipPath id="a" class="a">
        <path fill="#fff" d="M0 0h155v155H0z" />
      </clipPath>
      <filter id="c" width="316.773" height="491.968" x="-.768" y="7.659" class="c" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feMorphology in="SourceAlpha" radius=".577" result="effect1_innerShadow_183_2405" />
        <feOffset />
        <feGaussianBlur stdDeviation=".577" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_183_2405" />
      </filter>
    </defs>
  </svg>
</template>

<style>

</style>
