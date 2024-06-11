<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

// Code for hide/show navbar
const localState = reactive({
  selectedApp: 0,
  prevScrollPos: 0,
  isSticky: false,
  isScrolled: false,
  activeModal: 0,
})

const root$ = ref(null)

function handleHeaderStyles() {
  const currentScrollPos = window.pageYOffset

  if (root$.value) {
    localState.isScrolled = currentScrollPos > 0
    localState.isSticky = currentScrollPos > 0 && localState.prevScrollPos > currentScrollPos
  }

  localState.prevScrollPos = currentScrollPos
}

function initHeader() {
  localState.prevScrollPos = window.pageYOffset
  handleHeaderStyles()

  if (root$.value) {
    document.addEventListener('scroll', handleHeaderStyles, {
      passive: true,
    })
  }
}

onMounted(() => {
  document.readyState !== 'loading' ? initHeader() : document.addEventListener('DOMContentLoaded', initHeader)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleHeaderStyles)
  document.removeEventListener('DOMContentLoaded', initHeader)
})
</script>

<template>
  <header
    ref="root$"
    class="fixed left-0 top-16 z-50 z-500 mt-0 w-full px-16 transition-opacity duration-400 ease-nimiq"
    :class="[{
      'pointer-events-none opacity-0': localState.isScrolled,
      'pointer-events-auto !opacity-100': localState.isSticky,
    }]"
  >
    <div
      ref="root$"
      class="transition-[border-radius,opacity,background,box-shadow] w-full flex items-center justify-between gap-x-16 rounded-8 bg-white p-16 text-left shadow ease-nimiq"
    >
      <NuxtLink
        class="cursor-pointer opacity-100 transition-opacity focus:opacity-70 hover:opacity-70"
        to="/"
      >
        <div i-nimiq:logos-nimiq-horizontal class="h-25px w-100px" />
        <!-- <DynamicLogo class="h-32" :type="useRoute().path.includes('cities') ? 'cities' : 'region'" /> -->
      </NuxtLink>

      <div
        class="hidden items-center gap-x-32px lg:flex"
      >
        <a href="./" class="text-16px text-neutral-700 font-bold">Who is Nimiq?</a>
        <a href="./" class="text-16px text-neutral-700 font-bold">How to Prestake?</a>
        <a href="./" class="arrow pill-lg pill-blue">Contact us</a>
      </div>
      <!-- <MobileMenu
          class="lg:hidden"
          :is-scrolled="localState.isScrolled"
          :is-sticky="localState.isSticky"
        /> -->
    </div>
  </header>
  <!-- <header
      v-else
      ref="root$"
      class="fixed left-0 top-16 z-50 mt-0 w-full px-16 transition-opacity"
      :class="[{
        'pointer-events-none opacity-0': localState.isScrolled,
        'pointer-events-auto !opacity-100': localState.isSticky,
      }]"
    >
      <div
        ref="root$"
        class="flex w-full items-center justify-between gap-x-16 rounded-8 bg-white p-16 text-left transition-[border-radius,opacity,box-shadow]"
        :class="[{
          'shadow': localState.isScrolled,
        }]"
      >
        <NuxtLink
          class="cursor-pointer opacity-100 transition-opacity hover:opacity-70 focus:opacity-70"
          :to="'/' + locale"
        >
          <svg class="h-32" viewBox="0 0 500 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.3375 11.4684C41.3375 11.4684 41.2427 11.4642 41.1479 11.46C41.1479 11.46 41.1479 11.46 41.053 11.4559L39.9153 11.4055L37.4461 11.3911L24.1517 11.2772L24.1559 11.1824C24.2928 5.96613 28.2833 1.68005 33.4409 1.05385C33.4409 1.05385 33.5357 1.05804 33.6305 1.06224C33.7253 1.06644 33.8201 1.07064 33.8201 1.07064L33.9149 1.07484L35.0526 1.12521L37.2417 1.03223L50.5361 1.14612L50.5318 1.24088C50.4855 6.55617 46.3961 10.9328 41.3375 11.4684Z" fill="#FC8702" />
            <path d="M21.9195 13.4675C21.9195 13.4675 21.9195 13.5624 21.8246 13.5624V13.8469L21.2552 14.6058L20.0214 16.7876L13.2834 28.2655C13.2834 28.2655 13.2834 28.2655 13.1885 28.2655C8.63313 25.6095 6.82998 19.9179 8.91783 15.175C8.91783 15.175 8.91784 15.0801 9.01274 15.0801C9.01274 14.9852 9.10764 14.8904 9.10764 14.8904L9.20254 14.7955L9.77196 13.8469L10.9108 11.9498L17.554 0.376953C17.554 0.376953 17.554 0.376953 17.6489 0.376953C22.2042 3.12787 24.0073 8.72455 21.9195 13.4675Z" fill="#E9B213" />
            <path d="M22.0174 46.0067C17.3672 48.6627 11.673 47.3347 8.54123 43.2557L8.44633 43.1609L8.35143 42.9712L8.25653 42.8763L7.68711 41.9277L6.54828 40.0305L0 28.4577C0 28.4577 0 28.4577 0.0949026 28.4577C4.74513 25.8017 10.4393 27.1297 13.5711 31.2086L13.666 31.3035L14.2354 32.2521L15.4691 34.4339L22.0174 46.0067Z" fill="#21BCA5" />
            <path d="M32.4572 57.956C32.4572 57.956 32.3623 57.956 32.2673 57.956C32.2673 57.956 32.2674 57.956 32.1724 57.956H31.0336H28.5661H15.2798V57.8611C15.2798 52.549 19.2657 48.1855 24.3904 47.5215C24.3904 47.5215 24.4853 47.5215 24.5802 47.5215C24.6751 47.5215 24.77 47.5215 24.77 47.5215H24.8649H26.0038H28.1865H41.4729V47.6163C41.5678 52.9284 37.6768 57.292 32.4572 57.956Z" fill="#0582CA" />
            <path d="M57.3192 44.2965C57.3192 44.2965 57.3191 44.3913 57.2242 44.3913L56.6548 45.3399L55.4211 47.5217L48.7779 58.9996C48.7779 58.9996 48.7779 58.9996 48.683 58.9996C44.1277 56.3436 42.2296 50.7469 44.3175 46.0039C44.3175 46.0039 44.3175 45.9091 44.4124 45.9091C44.4124 45.8142 44.5073 45.7194 44.5073 45.7194L44.6022 45.6245L45.1716 44.6759L46.3104 42.7787L52.9536 31.3008C52.9536 31.3008 52.9536 31.3008 53.0485 31.3008C57.509 33.9568 59.3121 39.5535 57.3192 44.2965Z" fill="#1F2348" />
            <path d="M66.7165 30.2569C62.1612 33.0078 56.3721 31.9643 53.1455 27.8854L53.0506 27.7905L52.9556 27.6008L52.8607 27.506L52.2913 26.5574L51.1525 24.6602L44.2246 13.372C44.2246 13.372 44.2246 13.372 44.3195 13.372C48.8748 10.6211 54.6639 11.6645 57.8906 15.7434L57.9855 15.8383L58.5549 16.7869L59.8835 18.8738L66.7165 30.2569C66.8114 30.2569 66.8114 30.2569 66.7165 30.2569Z" fill="#D94432" />
            <text
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Mulish"
              font-size="29"
              font-weight="bold"
              letter-spacing="0.9px"
            ><tspan x="74.1992" y="40.4475">CRYPTOCITY</tspan></text>
          </svg>
        </NuxtLink>
        <span v-if="tagLine" class="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-blue-dark/60 md:block">{{ tagLine }}</span>
        <TheLink
          :text="contactButtonLabel"
          :url="onGlobalPage ? 'https://kryptostadt.info/en/contact' : '/contact'"
          :is-external="false"
          compact
          variant="info"
          hide-arrow
        />
      </div>
    </header> -->
</template>
