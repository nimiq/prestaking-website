<script lang="ts" setup>
const showModal: Ref<boolean> = ref(false)
const detailsModal: Ref<HTMLDivElement | null> = ref(null)

function openModal() {
  showModal.value = true
  document.documentElement.style.overflow = 'hidden'
}

useOutsideClick(detailsModal, () => {
  showModal.value = false
  document.documentElement.style.overflow = 'auto'
})

const steps = [
  {
    title: 'Micro Block',
    text: 'Micro Blocks contain transactions. Creating and sharing the block can take less than one second, thus transactions are confirmed quickly.',
  },
  {
    title: 'Skip Block',
    text: 'When the currently active slot fails to produce a Micro Block on time, the other validators in the epoch can vote to produce a Skip Block instead, skipping the current slot. The block is accepted when two thirds of all slots vote for the Skip Block.',
  },
  {
    title: 'Macro Block',
    text: 'Macro Blocks mark the beginning and end of batches and epochs. They must be voted for by at least two thirds of all active slots. A Macro Block finalizes all transactions of the current batch. Epoch-finalizing Macro Blocks additionally determine the slots and their validators for the next epoch.',
  },
  {
    title: 'Batch and Epoch',
    text: 'A batch is the time between two Macro Blocks. A fixed number of batches make up an epoch. For each epoch, 512 slots are randomly assigned to all potential validators proportionally to each validator’s stake. Parameters such as minimum stake, length of batches and epochs (i.e. number of micro blocks), number of slots, etc. are being tested and thus are subject to change before the Mainnet transition. For each micro block a slot is randomly selected — one after the other — so its validator can validate pending transactions and create the block.',
  },
  {
    title: 'Validator',
    text: 'Validators are responsible for creating blocks and validating blocks produced by others. They are chosen according to their stake — the higher the stake the more likely they are chosen. Validators are replaced in fixed intervals, called epochs. If a validator is found to be misbehaving, the validator will be punished.There are various severities of punishment, from taking away their block reward, slashing part of their stake, all the way to on-chain jail. Misbehavior includes producing invalid blocks or more than one block at a time (fork blocks). The potential loss of some of their stake and their block reward makes sure that validators don’t misbehave.',
  },
  {
    title: 'Slot',
    text: 'A slot is like a ticket allowing a validator to create a block. The slots for an epoch are assigned to active validators and for each block the active slot is chosen with a Verifiable Random Function (VRF). The active slot allows a validator to create a block. A validator can have multiple slots per epoch, depending on their stake.',
  },
]

const activeStep = ref(0)
</script>

<template>
  <div class="mt-24 w-fit flex cursor-pointer items-center rounded-full px-20 py-10 text-white font-bold ring-1.5 ring-white/30 transition-colors md:mx-auto hover:bg-white/10" @click="openModal">
    <div class="i-custom:cli-docs mr-12 text-20" />
    <span>Technical details</span>
  </div>
  <ModalWrapper :active="showModal">
    <div
      ref="detailsModal"
      class="group relative h-479 max-h-479 w-420 flex flex-col cursor-pointer justify-between border-1 border-gray rounded-6 bg-[#e9e9eb] bg-cover bg-center"
    >
      <div class="relative flex gap-6 p-6 pb-0">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="h-4 w-full rounded-full"
          :class="index <= activeStep ? 'bg-green' : 'bg-gray'"
        />
        <div class="absolute left-0 top-full h-20 w-full bg-gradient-from-[#e9e9eb] bg-gradient-to-transparent bg-gradient-to-b" />
      </div>
      <div class="grow overflow-auto">
        <div class="px-44 pb-32 pt-22 text-center">
          <h3 class="!font-bold">
            {{ steps[activeStep].title }}
          </h3>
          <NuxtImg v-if="activeStep === 0" src="/img/albatross-technical-details/micro-block.webp" class="mx-auto mt-24 w-160" alt="Representation of a Albatross' Micro block" />
          <NuxtImg v-if="activeStep === 1" src="/img/albatross-technical-details/skip-block.webp" class="mx-auto mt-24 w-160" alt="Representation of a Albatross' Micro block" />
          <NuxtImg v-if="activeStep === 2" src="/img/albatross-technical-details/macro-block.webp" class="mx-auto mt-24 w-160" alt="Representation of a Albatross' Macro block" />
          <NuxtImg v-if="activeStep === 3" src="/img/albatross-technical-details/batch-and-epoch.webp" class="mx-auto mt-24 w-160" alt="Representation of an Albatross' Batch and Epochs" />
          <div class="mt-24 overflow-auto">
            {{ steps[activeStep].text }}
          </div>
        </div>
      </div>
      <div class="min-h-64 flex gap-1 bg-darkblue/10">
        <div class="relative w-full border-t-1 border-darkblue/10 bg-[#e9e9eb] transition-all hover:bg-opacity-50" @click="activeStep = activeStep > 0 ? activeStep - 1 : activeStep">
          <div i-custom:chevron class="absolute left-1/2 top-1/2 size-16 -translate-1/2" />
        </div>
        <div class="relative w-full border-t-1 border-darkblue/10 bg-[#e9e9eb] transition-all hover:bg-opacity-50" @click="activeStep = activeStep < 5 ? activeStep + 1 : activeStep">
          <div i-custom:chevron class="absolute left-1/2 top-1/2 size-16 rotate-180 -translate-1/2" />
        </div>
      </div>
    </div>
  </ModalWrapper>
</template>

<style>

</style>
