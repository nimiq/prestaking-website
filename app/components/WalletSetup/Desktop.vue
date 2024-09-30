<script setup lang="ts">
defineProps<{ items: { title: string, description: string, img: string }[] }>()

const activeIndex = ref(0)
</script>

<template>
  <div flex="~" rounded-l-16 border="1 neutral/20" bg="neutral/2" p="$p" pr-0 style="--p: 48px">
    <div relative flex-1>
      <div inset-y="[calc(var(--p)*-1)]" pointer-events-none absolute right-0 w-315 bg-gradient="to-l from-[#e9e9eb] to-transparent" />

      <ul flex="~ col gap-24">
        <li v-for="({ title, description }, i) in items" :key="i" w-full flex>
          <button bg-transparent @click="activeIndex = i">
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
        </li>
      </ul>
    </div>
    <transition mode="out-in" enter-active-class="transition-[opacity,filter] duration-400" enter-from-class="op-0 blur-2" enter-to-class="op-100 blur-0" leave-active-class="transition-[opacity,filter] duration-150 blur-0" leave-from-class="op-100" leave-to-class="op-0 blur-2">
      <div :key="activeIndex" h-558 w-437 of-hidden rounded-16 border="1 neutral/20" my="[calc((var(--p)+32px)*-1)]" shadow>
        <NuxtImg :src="items[activeIndex].img" />
      </div>
    </transition>
  </div>
</template>
