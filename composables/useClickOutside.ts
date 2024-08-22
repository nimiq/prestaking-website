import useEventListener from './useEventListener'

// Polyfill
function microTask(cb: () => void) {
  if (typeof queueMicrotask === 'function') {
    queueMicrotask(cb)
  }
  else {
    Promise.resolve()
      .then(cb)
      .catch(e =>
        setTimeout(() => {
          throw e
        }),
      )
  }
}

export function useOutsideClick(
  el: Ref<Element | null>,
  cb: (event: MouseEvent | PointerEvent, target: HTMLElement) => void,
) {
  if (!import.meta.client) {
    return
  } // only run on client

  let called = false
  function handle(event: MouseEvent | PointerEvent) {
    if (called) {
      return
    }
    called = true
    microTask(() => {
      called = false
    })

    const target = event.target as HTMLElement

    // Ignore if the target doesn't exist in the DOM anymore
    if (!target.ownerDocument.documentElement.contains(target)) {
      return
    }

    // Ignore if the target exists in one of the containers
    if (el.value?.contains(target)) {
      return
    }

    cb(event, target)
  }

  useEventListener('pointerdown', handle, window)
  useEventListener('mousedown', handle, window)
}
