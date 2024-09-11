<script lang="ts" setup>
defineEmits(['close'])

const route = useRoute()
const router = useRouter()
onMounted(() => {
  if (!route.query.cardLevel || !route.query.tickets) {
    router.push('/')
  }
})
const dropdownOpen: Ref<boolean> = ref(false)
const dropdown: Ref<HTMLDivElement | null> = ref(null)
function openDropdown() {
  dropdownOpen.value = true
}
useOutsideClick(dropdown, () => {
  dropdownOpen.value = false
})
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center bg-darkblue/95 px-16">
    <div
      class="group relative size-full flex flex-col items-center justify-center"
    >
      <TiltCardWrapper class="mx-auto !h-478 !min-w-311 !w-311">
        <TiltCard :card="route.query.cardLevel" />
      </TiltCardWrapper>
      <div class="mt-32 flex items-center gap-16">
        <div class="text-48 text-white font-bold">
          {{ route.query.tickets }} tickets
        </div>
        <div i-custom:tickets class="h-35 w-40" />
      </div>
      <div class="mx-auto text-white/80">
        Join the frey and prestake your NIM.
      </div>
      <div class="mx-auto mt-32 flex items-center gap-16">
        <div class="h-40 scale-105 cursor-pointer nq-pill-lg nq-pill-blue">
          Join the prestake
        </div>
        <div class="relative min-h-40 min-w-40 flex cursor-pointer items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/20" @click="openDropdown">
          <svg class="" width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M12.433 10.4649V14.6941L20.1663 7.46827L12.433 0.266602V4.37493C4.91718 5.4141 1.92051 10.5616 0.833008 15.7333C3.51551 12.1083 7.06801 10.4649 12.433 10.4649Z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
