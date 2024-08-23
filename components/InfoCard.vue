<!-- Declare in module scope so that iconList can be used in validator -->
<script lang="ts">
import lock from '@/assets/svg/icons/lock.svg'
import document from '@/assets/svg/icons/document.svg'
import box from '@/assets/svg/icons/box.svg'
import leaf from '@/assets/svg/icons/leaf.svg'
import duck from '@/assets/svg/icons/duck.svg'
import horn from '@/assets/svg/icons/horn.svg'

const iconList = [
  {
    name: 'lock',
    icon: lock,
  },
  {
    name: 'document',
    icon: document,
  },
  {
    name: 'box',
    icon: box,
  },
  {
    name: 'leaf',
    icon: leaf,
  },
  {
    name: 'duck',
    icon: duck,
  },
  {
    name: 'horn',
    icon: horn,
  },
]
export default {}
</script>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
    validator(value: string) {
      return iconList.some(x => x.name === value)
    },
  },
})
</script>

<template>
  <div class="glass-card glass-clear grow !items-start">
    <img class="size-48 object-contain object-center" :src="iconList.find(x => x.name === props.icon)?.icon" alt="" srcset="">
    <div class="flex flex-col">
      <h4 class="my-0">
        {{ props.title }}
      </h4>
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>

<style>

</style>
