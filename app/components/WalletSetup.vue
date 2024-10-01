<script setup lang="ts">
const { items } = defineProps<{ items: { title: string, description: string, img: string }[] }>()

const { activeIndex, scroller, slideTo } = useCarousel()

const value = ref(0)
const startedAt = ref(Date.now())
const pausedByUser = ref(false)
const SECONDS_PER_SLIDE = 7

watch(activeIndex, () => {
  startedAt.value = Date.now()
  value.value = 0
  slideTo(activeIndex.value)
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
  if (t.isIntersecting) {
    if (!pausedByUser.value) {
      startedAt.value = Date.now()
      resume()
    }
  }
  else {
    pause()
  }
}, { threshold: 0.5 })

function handleClick(i: number) {
  if (i === activeIndex.value && pausedByUser.value) {
    startedAt.value = Date.now()
    resume()
    pausedByUser.value = false
  }
  else {
    pausedByUser.value = true
    pause()
  }
  activeIndex.value = i
}
</script>

<template>
  <div ref="root" flex="~ col lg:row" style="--p: 48px">
    <div relative flex-1 lg:p="$p r-0" lg:border="1 r-0 neutral/10" w="[calc(100%+64px)]" lg:bg="neutral/1" lg:rounded-l-16>
      <div pointer-events-none absolute inset-y-0 right-0 hidden w-315 lg:block bg-gradient="to-l from-[#f9f9fa] to-transparent" />

      <ul ref="scroller" flex="~ lg:col gap-y-24" snap="x mandatory" w-full scroll-pl-32 of-x-auto nq-scrollbar-hide max-lg:mx--32 lg:pr-32>
        <li v-for="({ title, description }, i) in items" :key="i" snap="start always" :data-state="i === activeIndex ? 'active' : undefined" max-lg:bg="neutral/1" max-lg:border="y-1 first:l-1 last:r-1 neutral/10" w="[calc(100%+64px)]" max-lg:rounded="first:l-16 last:r-16" max-lg:max-w="[calc(100vw-126px)]" data-slide relative w-full shrink-0 max-lg:p-24 max-lg:first:ml-32 max-lg:last:mr-32>
          <button bg-transparent @click="handleClick(i)">
            <div flex="~ gap-16">
              <div text="18 neutral center" size-30 shrink-0 rounded-full bg-neutral-400 flex="~ items-center justify-center" font-semibold :class="{ '!bg-green !text-white': activeIndex === i }">
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
          <progress :value h="0 data-active:4" op="0 data-active:100" :class="{ '!op-0': !isProgressActive }" transition="[opacity,height]" w-full appearance-none rounded-full />
          <div v-if="activeIndex < items.length - 1" :class="activeIndex > i ? 'op-0' : 'op-100'" absolute inset-b-40 inset-t-24 right-0 w-1 bg-neutral-400 transition-opacity lg:hidden />
        </li>
      </ul>
    </div>
    <transition mode="out-in" enter-active-class="transition-[opacity,filter] duration-400" enter-from-class="op-0 blur-2" enter-to-class="op-100 blur-0" leave-active-class="transition-[opacity,filter] duration-150 blur-0" leave-from-class="op-100" leave-to-class="op-0 blur-2">
      <div :key="activeIndex" border="1 neutral/20" my="-8 lg:-32" w="[calc(100vw-16px)] lg:437" relative z-1 aspect-0.78039 of-hidden rounded-16 bg-neutral-200 shadow max-lg:mx--24>
        <NuxtImg :src="items[activeIndex]?.img" size-full object-cover />
        <div v-if="activeIndex > 0" absolute inset-y-0 left-0 z-1 w-200 @click="activeIndex -= 1" />
        <div v-if="activeIndex < items.length - 1" absolute inset-y-0 right-0 z-1 w-200 @click="activeIndex += 1" />
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
