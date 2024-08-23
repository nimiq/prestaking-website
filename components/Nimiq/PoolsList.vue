<script lang="ts" setup>
// NIMIQ TODO: Get list of pools
const poolItemsFromApi = 5
</script>

<template>
  <PoolItem
    v-for="(x, i) in poolItemsFromApi"
    :key="i"
    :class="i !== 0 && 'border-l-1 md:border-t-1 border-darkblue/10'"
    staked-amount="500,000"
    company-name="Overnice"
  />
</template>

<style>

</style>
