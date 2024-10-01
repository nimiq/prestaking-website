import { computed, ref } from 'vue'

interface UseCarouselOptionsInterface {
  // onStepChanged?: (index: number) => void
}

export function useCarousel(_options: UseCarouselOptionsInterface = {}) {
  const activeIndex = ref(0)
  const scroller = ref<HTMLDivElement>()
  const slides = computed<HTMLElement[]>(() => Array.from(scroller.value?.querySelectorAll('[data-slide]') || []))

  function slideTo(index: number) {
    scroller.value?.scrollTo({
      top: 0,
      left: (scroller.value?.querySelectorAll('[data-slide]')[index] as HTMLElement).offsetLeft || 0,
      behavior: 'smooth',
    })
  }

  const slideNext = () => slideTo(Math.min(activeIndex.value + 1, slides.value.length - 1))
  const slidePrev = () => slideTo(Math.max(activeIndex.value - 1, 0))

  return {
    activeIndex,
    scroller,
    slideTo,
    slideNext,
    slidePrev,
  }
}
