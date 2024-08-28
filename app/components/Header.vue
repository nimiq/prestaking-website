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
  titleTag: {
    type: String,
    required: false,
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
  buttonArrow: {
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
  forceCenteredText: {
    type: Boolean,
    default: false,
    required: false,
  },
})
</script>

<template>
  <div class="mx-auto max-w-1168 md:px-80">
    <span
      v-if="label" class="small-label mb-24 inline-block w-full md:text-center" :class="{
        'text-white/60': darkMode,
        'text-darkblue/60': !darkMode,
        'text-center': forceCenteredText,
      }"
    >{{ label }}</span>
    <component
      :is="titleTag ? titleTag : 'h2'" class="mb-24 mt-0 md:px-80 md:text-center" :class="{
        'text-white': darkMode,
        'text-center': forceCenteredText,
      }"
    >
      {{ title }}
    </component>
    <p
      class="hero-subline mb-0 md:text-center" :class="{
        'text-white/60': darkMode,
        'text-darkblue/60': !darkMode,
        'text-center': forceCenteredText,
      }"
    >
      {{ body }}
    </p>
    <nuxt-link
      v-if="button" :to="buttonLink" class="mt-32 transition-all nq-pill-lg nq-pill-blue md:mx-auto"
      :class="{
        'arrow': buttonArrow,
        'mx-auto': forceCenteredText,
      }"
    >
      {{ buttonText }}
    </nuxt-link>
    <slot />
  </div>
</template>
