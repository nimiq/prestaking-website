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
    required: false,
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
  buttonArrowCircleDown: {
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
  buttonStyle: {
    type: String,
    default: 'button',
    required: false,
  },
  forceCenteredText: {
    type: Boolean,
    default: false,
    required: false,
  },
  prePreStaking: {
    type: String,
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
    <div v-if="prePreStaking" :class="{ 'mx-auto': forceCenteredText }" class="mb-32 w-max flex items-center gap-x-8 rounded-full bg-green/20 px-15 py-4 text-18px text-green font-bold md:mx-auto">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="9" fill="#13B59D" />
        <path d="M1.33479 3.3826L3.337 5.53358L7.7679 1.67232" transform="translate(4.75 5.5)" stroke="white" stroke-width="2.11943" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div>
        {{ prePreStaking }}
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
      v-if="body"
      class="hero-subline mb-0 text-balance md:text-center" :class="{
        'text-white/60': darkMode,
        'text-darkblue/60': !darkMode,
        'text-center': forceCenteredText,
      }"
    >
      {{ body }}
    </p>
    <nuxt-link
      v-if="button && !buttonLink.endsWith('.pdf')" :to="buttonLink" class="mt-32 flex items-center gap-12 text-20 transition-all md:mx-auto"
      :class="{
        'nq-pill-lg nq-pill-blue': buttonStyle === 'button',
        'block w-fit text-blue font-bold': buttonStyle === 'link',
        'arrow': buttonArrow,
        'mx-auto': forceCenteredText,
      }"
    >
      {{ buttonText }}<i v-if="buttonArrowCircleDown" class="i-custom:arrow-circle-down inline-block h-32 w-32" />
    </nuxt-link>
    <a
      v-else-if="button" :href="buttonLink" target="_blank" class="mt-32 flex items-center gap-12 text-20 transition-all md:mx-auto"
      :class="{
        'nq-pill-lg nq-pill-blue': buttonStyle === 'button',
        'block w-fit text-blue font-bold': buttonStyle === 'link',
        'arrow': buttonArrow,
        'mx-auto': forceCenteredText,
      }"
    >{{ buttonText }}<i v-if="buttonArrowCircleDown" class="i-custom:arrow-circle-down inline-block h-32 w-32" /></a>
    <slot />
  </div>
</template>
