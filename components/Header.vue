<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  darkMode: {
    type: Boolean,
    default: false,
    required: false,
  },
  button: {
    type: Boolean,
    default: false,
    required: false,
  },
  buttonLink: {
    type: String,
    default: '',
    required: false,
  },
  buttonText: {
    type: String,
    default: '',
    required: false,
  },
})
</script>

<template>
  <div class="max-w-1168 px-80">
    <span v-if="label" class="mb-24 inline-block w-full text-center text-14 font-bold leading-100% uppercase" :class="darkMode ? 'text-white/60' : 'text-darkblue/60'">{{ label }}</span>
    <h2 class="mb-24 mt-0 text-center" :class="darkMode ? 'text-white' : ''">
      {{ title }}
    </h2>
    <p class="mb-32 text-center text-22 font-500 leading-150%" :class="darkMode ? 'text-white/60' : 'text-darkblue/60'">
      {{ body }}
    </p>
    <nuxt-link v-if="button" :to="buttonLink" class="absolute left-1/2 transition-all pill-lg pill-blue -translate-x-1/2">
      {{ buttonText }}
    </nuxt-link>
    <slot />
  </div>
</template>
