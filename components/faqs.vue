<script lang="ts" setup>
const faqs = [
  {
    question: 'When will I receive my first reward?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    question: 'When will I receive my first reward?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    question: 'When will I receive my first reward?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    question: 'When will I receive my first reward?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    question: 'When will I receive my first reward?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    question: 'When will I receive my first reward?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    question: 'When will I receive my first reward?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    question: 'When will I receive my first reward?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    question: 'When will I receive my first reward?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
]

const isOpen = ref(false)
</script>

<template>
  <div
    class="faqs-container relative grid grid-flow-row grid-cols-3 w-full gap-24"
    :class="isOpen ? 'max-h-auto' : 'max-h-270 pb-0  overflow-hidden'"
  >
    <div
      v-for="(faq, index) in faqs" :key="index" class="gap-y-16 rounded-6 bg-white/06 p-16 text-18"
    >
      <div class="text-bold text-white">
        {{ faq.question }}
      </div>
      <p>{{ faq.answer }}</p>
    </div>
    <div class="absolute bottom-0 left-0 h-120 w-full bg-gradient-from-darkblue bg-gradient-to-transparent bg-gradient-to-t transition-opacity" :class="isOpen ? 'opacity-0' : 'opacity-100'" />
    <button class="pill-sm absolute left-1/2 transition-all pill-blue -translate-x-1/2" :class="isOpen ? '-bottom-40' : 'bottom-20'" @click="isOpen = !isOpen">
      {{ isOpen ? 'Show less' : 'Show more' }}
    </button>
  </div>
</template>

<style>
.faqs-container {
  transition: max-height 0.5s ease-in;
}
</style>
