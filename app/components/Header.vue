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
  prePreStaking: {
    type: Boolean,
    default: false,
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
    <div v-if="prePreStaking" class="mx-auto mb-32 w-max flex items-center gap-x-8 rounded-full bg-green/20 px-15 py-4 text-18px text-green font-bold">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="9" fill="#13B59D" />
        <path d="M6.75949 10.9246L9.69773 10.8765L9.79406 5" stroke="white" stroke-width="2.11943" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div>
        Pre-staking available soon
      </div>
    </div>
    <component
      :is="titleTag ? titleTag : 'h2'" class="mb-24 mt-0 md:px-60 md:text-center" :class="{
        'text-white': darkMode,
        'text-center': forceCenteredText,
      }"
    >
      {{ title }}
    </component>
    <p
      class="hero-subline mb-0 md:text-center text-balance" :class="{
        'text-white/60': darkMode,
        'text-darkblue/60': !darkMode,
        'text-center': forceCenteredText,
      }"
    >
      {{ body }}
    </p>
    <nuxt-link
      v-if="button && !buttonLink.endsWith('.pdf')" :to="buttonLink" class="mt-32 text-20 transition-all nq-pill-lg nq-pill-blue md:mx-auto"
      :class="{
        'arrow': buttonArrow,
        'mx-auto': forceCenteredText,
      }"
    >{{ buttonText }}</nuxt-link>
    <a
      v-else-if="button" :href="buttonLink" target="_blank" class="mt-32 text-20 transition-all nq-pill-lg nq-pill-blue md:mx-auto"
      :class="{
        'arrow': buttonArrow,
        'mx-auto': forceCenteredText,
      }">{{ buttonText }}</a>
    <slot />
  </div>
</template>
