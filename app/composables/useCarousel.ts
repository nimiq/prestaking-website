import { useIntersectionObserver } from '@vueuse/core'
import { computed, ref } from 'vue'

interface UseCarouselOptionsInterface {
  onStepChanged?: (index: number) => void
}

export function useCarousel(options: UseCarouselOptionsInterface = {}) {
  const activeIndex = ref(0)
  const scroller = ref<HTMLDivElement>()
  const slides = computed<HTMLElement[]>(() => Array.from(scroller.value?.querySelectorAll('[data-slide]') || []))

  useIntersectionObserver(slides, (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const slide = entry.target as HTMLElement
        const slideIndex = slides.value.indexOf(slide)
        if (slideIndex !== -1) {
          activeIndex.value = slideIndex
          options?.onStepChanged?.(slideIndex)
        }
      }
    })
  }, { threshold: 0.5 })

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
