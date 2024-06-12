<script lang="ts" setup>
const milestoneContent = [
  {
    value: '100M',
    title: 'Billboard',
    description: 'We buy a billboard in times square and present Nimiq to the world in the largest way possible!',
  },
  {
    value: '200M',
    title: 'Billboard',
    description: 'We buy a billboard in times square and present Nimiq to the world in the largest way possible!',
  },
  {
    value: '300M',
    title: 'Billboard',
    description: 'We buy a billboard in times square and present Nimiq to the world in the largest way possible!',
  },
  {
    value: '400M',
    title: 'Billboard',
    description: 'We buy a billboard in times square and present Nimiq to the world in the largest way possible!',
  },
  {
    value: '500M',
    title: 'Billboard',
    description: 'We buy a billboard in times square and present Nimiq to the world in the largest way possible!',
  },
]

const activeCardIndex = ref(0)
</script>

<template>
  <div class="mx-auto h-500 max-w-1168 w-full flex items-stretch gap-x-24">
    <MilestoneCard
      v-for="(milestone, index) in milestoneContent"
      :key="milestone.value"
      :active="activeCardIndex === index"
      :milestone-value="milestone.value"
      :milestone-title="milestone.title"
      :milestone-description="milestone.description"
      @click="activeCardIndex = index"
    />
  </div>
</template>

<style>
/*
.container {
  margin: 0 auto;
  width: 700px;
  height: 400px;
  border: 1px solid lighten(black, 10);
  display: flex;
  align-items: center;
} */

.milestone-card {
  flex-grow: 1;
  position: relative;
  transition: all 300ms ease-in-out;

  &.active {
    flex-grow: 4.3;
  }
}
</style>
