<script lang="ts" setup>
const milestoneContent = [
  {
    value: '100M',
    title: 'Billboard',
    description: 'We buy a billboard in times square and present Nimiq to the world in the largest way possible!',
    complete: true,
  },
  {
    value: '200M',
    title: 'Billboard',
    description: 'We buy a billboard in times square and present Nimiq to the world in the largest way possible!',
    complete: false,
  },
  {
    value: '300M',
    title: 'Billboard',
    description: 'We buy a billboard in times square and present Nimiq to the world in the largest way possible!',
    complete: false,
  },
  {
    value: '400M',
    title: 'Billboard',
    description: 'We buy a billboard in times square and present Nimiq to the world in the largest way possible!',
    complete: false,
  },
  {
    value: '500M',
    title: 'Billboard',
    description: 'We buy a billboard in times square and present Nimiq to the world in the largest way possible!',
    complete: false,
  },
]

const activeCardIndex = ref(0)
</script>

<template>
  <div class="max-w-full w-full overflow-x-auto px-16">
    <div class="mx-auto max-w-1168 flex items-stretch gap-x-24">
      <!-- :class="{
          'basis-360': activeCardIndex === index,
          'basis-178 ': activeCardIndex !== index,
        }" -->
      <MilestoneCard
        v-for="(milestone, index) in milestoneContent"
        :key="milestone.value"
        class="w-auto"
        :active="activeCardIndex === index"
        :complete="milestone.complete"
        :milestone-value="milestone.value"
        :milestone-title="milestone.title"
        :milestone-description="milestone.description"
        @click="activeCardIndex = index"
      />
    </div>
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
  /* transition: all 300ms ease-in-out; */
  background: #1f234807;

  &.complete {
    background: radial-gradient(
      100% 100% at 100% 100%,
      #ec991c 0%,
      #e9b213 100%
    );
  }

  &.active {
    background-color: #e9b21340;
  }
}
</style>
