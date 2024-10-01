<script setup lang="ts">
import { email as emailCheck, nonEmpty, pipe, safeParse, string } from 'valibot'

const email = ref('')

const EmailSchema = pipe(string(), nonEmpty('Please enter your email.'), emailCheck('Invalid email.'))
const invalidEmailMessage = ref<string>()

function submitForm() {
  invalidEmailMessage.value = ''

  const { success, issues } = safeParse(EmailSchema, email.value)
  if (!success && issues.length > 0) {
    invalidEmailMessage.value = issues[0].message
    return
  }

  // New endpoint in nimiq.com
  navigateTo(`https://nimiq.com/newsletter?email=${email.value}`, { external: true })
}
</script>

<template>
  <form relative max-w-32em w-full @submit.prevent="submitForm">
    <input v-model="email" type="email" name="email" required relative rounded-full pr-36 nq-input-box placeholder="Enter email address...">
    <button type="submit" :disabled="!email" group absolute right-0.1875em top-2 aspect-1 h-29 rounded-full transition-colors not-disabled:cursor-pointer bg="not-disabled:gradient-blue hocus:not-disabled:gradient-blue-darkened disabled:!white/10" flex="~ items-center justify-center">
      <div i-nimiq:arrow-right text="0.6875em white group-disabled:neutral-600" />
    </button>
    <!-- The following div is always on the dom to avoid CLS -->
    <div h="0.5em md:0.75em" mt-0.25em pl-0.75em font-semibold text="0.875em lg:0.9375em 2xl:1em red mt-0.5em">
      <span v-if="invalidEmailMessage && email">{{ invalidEmailMessage }}</span>
    </div>
  </form>
</template>
