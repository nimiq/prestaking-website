<script setup lang="ts">
const { items } = defineProps<{ items: { title: string, description: string, img: string }[] }>()

const activeIndex = ref(0)

const value = ref(0)
const startedAt = ref(Date.now())
const SECONDS_PER_SLIDE = 7

watch(activeIndex, () => {
  startedAt.value = Date.now()
  value.value = 0
})

const { pause, resume, isActive: isProgressActive } = useRafFn(() => {
  const elapsed = Date.now() - startedAt.value
  value.value = Math.min(1, elapsed / (SECONDS_PER_SLIDE * 1000))
  if (value.value >= 1) {
    activeIndex.value = (activeIndex.value + 1) % items.length
  }
}, { immediate: false })

const root = useTemplateRef('root')
useIntersectionObserver(root, ([t]) => {
  if (!t)
    return
  if (t?.isIntersecting)
    resume()
  else
    pause()
}, { threshold: 0.5 })

function handleClick(i: number) {
  pause()
  activeIndex.value = i
}
</script>

<template>
  <div ref="root" flex="~" rounded-l-16 border="1 neutral/20" bg="neutral/2" p="$p" pr-0 style="--p: 48px">
    <div relative flex-1>
      <div inset-y="[calc(var(--p)*-1)]" pointer-events-none absolute right-0 w-315 bg-gradient="to-l from-[#e9e9eb] to-transparent" />

      <ul flex="~ col gap-24" relative z-1 pr-48>
        <li v-for="({ title, description }, i) in items" :key="i" w-full :data-state="i === activeIndex && isProgressActive ? 'active' : undefined">
          <button bg-transparent @click="handleClick(i)">
            <div flex="~ gap-16">
              <div text="18 neutral center" size-30 shrink-0 rounded-full bg-neutral-400 flex="~ items-center justify-center" font-semibold>
                {{ i + 1 }}
              </div>
              <h3 text-left>
                {{ title }}
              </h3>
            </div>
            <p mt-12 text="left 18 neutral-800">
              {{ description }}
            </p>
          </button>
          <progress :value h="0 data-active:4" op="0 data-active:100" transition="[opacity,height]" w-full appearance-none rounded-full bg-amber />
        </li>
      </ul>
    </div>
    <transition mode="out-in" enter-active-class="transition-[opacity,filter] duration-400" enter-from-class="op-0 blur-2" enter-to-class="op-100 blur-0" leave-active-class="transition-[opacity,filter] duration-150 blur-0" leave-from-class="op-100" leave-to-class="op-0 blur-2">
      <div :key="activeIndex" border="1 neutral/20" my="[calc((var(--p)+32px)*-1)]" w-437 of-hidden rounded-16 bg-neutral-200 shadow>
        <NuxtImg :src="items[activeIndex]?.img" size-full object-cover />
      </div>
    </transition>
  </div>
</template>

<style scoped>
progress[value] {
  &::-webkit-progress-bar {
    --uno: 'bg-neutral-600 rounded-full';
  }
  &::-webkit-progress-value {
    --uno: 'bg-gradient-green rounded-full';
  }
}
</style>
