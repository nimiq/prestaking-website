import { onBeforeUnmount, onMounted } from 'vue'

export default (
  event: string,
  handler: (e: any) => any,
  target: EventTarget | undefined = undefined,
  options?: (AddEventListenerOptions & { immediate?: boolean, passive?: boolean }) | boolean,
) => {
  if (!import.meta.client) {
    return
  }
  if (!target) {
    target = window
  }

  if (typeof options !== 'boolean' && options?.immediate) {
    handler({})
  }

  onMounted(() => target?.addEventListener(event, handler, options))
  onBeforeUnmount(() => target?.removeEventListener(event, handler))
}
