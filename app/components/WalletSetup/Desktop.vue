<script setup lang="ts">
defineProps<{ items: { title: string, description: string, img: string }[] }>()

const activeIndex = ref(0)
</script>

<template>
  <div flex="~" rounded-l-16 border="1 neutral/20" bg="neutral/2" p="$p" pr-0 style="--p: 48px">
    <div relative flex-1>
      <div absolute inset-y="[calc(var(--p)*-1)]" right-0 w-315 bg-gradient="to-l from-[#e9e9eb] to-transparent" />

      <ul flex="~ col gap-24">
        <li v-for="({ title, description }, i) in items" :key="i">
          <div flex="~ gap-16">
            <div text="18 neutral center" size-30 shrink-0 rounded-full bg-neutral-400 flex="~ items-center justify-center" font-semibold>
              {{ i + 1 }}
            </div>
            <h3>
              {{ title }}
            </h3>
          </div>
          <p mt-12 text="18 neutral-800">
            {{ description }}
          </p>
        </li>
      </ul>
    </div>
    <NuxtImg :src="items[activeIndex].img" border="1 neutral/20" my="[calc((var(--p)+32px)*-1)]" w-437 rounded-16 shadow />
  </div>
</template>
