<script lang="ts" setup>
import type { PropType } from 'vue'

interface Faq {
  question: string
  answer: string
}

defineProps({
  faqs: {
    type: Array as PropType<Faq[]>,
    defualt: null,
    required: true,
  },
})

const isOpen = ref(false)
</script>

<template>
  <div
    class="faqs-container relative grid grid-flow-row grid-cols-1 w-full gap-24 md:grid-cols-3"
    :class="isOpen ? 'max-h-auto' : 'max-h-270 pb-0  overflow-hidden'"
  >
    <div
      v-for="(faq, index) in faqs" :key="index" class="gap-y-16 rounded-6 bg-white/06 p-16 text-18"
    >
      <div class="text-bold text-white">
        {{ faq.question }}
      </div>
      <p class="mt-16 text-white/80">
        {{ faq.answer }}
      </p>
    </div>
    <div v-show="!isOpen" class="absolute bottom-0 left-0 h-120 w-full bg-gradient-from-darkblue bg-gradient-to-transparent bg-gradient-to-t transition-opacity" />
    <button class="nq-pill-sm absolute left-1/2 transition-all nq-pill-secondary -translate-x-1/2" :class="isOpen ? '-bottom-40' : 'bottom-20'" @click="isOpen = !isOpen">
      {{ isOpen ? 'Show less' : 'Show more' }}
    </button>
  </div>
</template>

<style>
.faqs-container {
  transition: max-height 0.5s ease-in;
}
</style>
