<script lang="ts" setup>

</script>

<template>
  <div class="relative">
    <div class="max-h-370">
      <div class="ticket">
        <img class="relative z-5 mx-auto w-374 object-cover shadow-2xl" src="~/assets/svg/ticket-3mill.svg" alt="" srcset="">
      </div>
      <div class="ticket">
        <img class="ticket relative z-3 mx-auto w-314 object-cover shadow-2xl -translate-y-55" src="~/assets/svg/ticket-15mill.svg" alt="" srcset="">
      </div>
      <div class="ticket">
        <img class="ticket relative z-1 mx-auto w-234 object-cover -translate-y-95" src="~/assets/svg/ticket-500k.svg" alt="" srcset="">
      </div>
    </div>
  </div>
</template>

<style>
.ticket {
  position: relative;

  img {
    filter: drop-shadow(0px 10px 0px #1f234870);
  }

  &:nth-child(1)::before {
    @apply w-200 sm:w-310;
    z-index: 4;
    translate: -50% -50%;
  }
  &:nth-child(2)::before {
    @apply w-200 sm:w-310;
    z-index: 2;
    translate: -50% -110%;
  }
  &:nth-child(3)::before {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #1f2348;
    height: 100%;
  }
}
</style>
