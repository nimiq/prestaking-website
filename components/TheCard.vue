<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  isVideo: {
    type: Boolean,
    required: false,
    default: false,
  },
  fullScreen: {
    type: Boolean,
    required: false,
    default: false,
  },
  image: {
    type: Object,
    required: false,
    default: null,
  },
  imageUrl: {
    type: String,
    required: false,
    default: null,
  },
  description: {
    type: String,
    required: false,
    default: null,
  },
  eventType: {
    type: String,
    required: false,
    default: null,
  },
  stars: {
    type: Number,
    required: false,
    default: null,
  },
  link: {
    type: String || null,
    required: true,
    default: null,
  },
  linkLabel: {
    type: String,
    required: false,
    default: null,
  },
  label: {
    type: String,
    required: false,
    default: null,
  },
  footer: {
    type: String,
    required: false,
    default: null,
  },
  state: {
    type: String,
    required: false,
    default: null,
  },
})

// const showPlaceHolder = ref(false)
</script>

<template>
  <div
    class="group relative h-fit w-[clamp(508px,508px,80vw)] flex flex-col cursor-pointer border-1 border-gray rounded-6 bg-[#e9e9eb] bg-cover bg-center p-6 pb-0"
  >
    <div
      v-if="imageUrl"
      class="relative h-414 flex flex-col items-center justify-end overflow-hidden rounded-4 bg-darkblue px-55 py-48 text-center"
    >
      <!-- style="background-image: url(https://lh3.googleusercontent.com/uUy8NY1JXe1EqNAYmxpTLv-g5gnZuWiNhYVMtQEczGPz0c-ZXStk1WLSTRwLmPk3MEaImRX-ENhYEJKujnxS3YHH=s1280-w1280-h800);" -->
      <h3 class="mb-0 text-24 text-white font-700">
        {{ title }}
      </h3>
      <div
        v-if="description"
        class="mt-16 text-white/60"
      >
        {{ description }}
      </div>

      <!-- Close -->
      <svg class="absolute right-16 top-16" width="24" height="24" viewBox="0 0 24 24" fill="none" @click="$emit('close')">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.51461 3.51604C8.20076 -1.16995 15.7993 -1.17231 20.4884 3.51076C25.1705 8.20252 25.1705 15.7975 20.4884 20.4892C15.7993 25.1723 8.20076 25.1699 3.51461 20.484C-1.17154 15.798 -1.17154 8.20203 3.51461 3.51604ZM16.6708 16.6543C17.0455 16.2781 17.061 15.6749 16.7063 15.2799L13.5937 12.1694C13.4963 12.0718 13.4963 11.9138 13.5937 11.8162L16.7063 8.70465C17.0974 8.31399 17.0976 7.68038 16.7068 7.28944C16.316 6.89851 15.6822 6.89828 15.2911 7.28894L12.1785 10.4005C12.1315 10.4475 12.0678 10.474 12.0013 10.474C11.9348 10.474 11.8711 10.4475 11.8242 10.4005L8.71254 7.28894C8.31648 6.93146 7.70951 6.94746 7.33285 7.32532C6.9562 7.70318 6.94234 8.31 7.30135 8.70465L10.414 11.8162C10.461 11.863 10.4874 11.9265 10.4874 11.9928C10.4874 12.0591 10.461 12.1226 10.414 12.1694L7.30135 15.2799C7.11341 15.4676 7.00781 15.7222 7.00781 15.9878C7.00781 16.2533 7.11341 16.508 7.30135 16.6956C7.69646 17.0767 8.32243 17.0767 8.71754 16.6956L11.8292 13.5841C11.9274 13.4872 12.0853 13.4872 12.1835 13.5841L15.2961 16.6956C15.6927 17.0486 16.2961 17.0304 16.6708 16.6543Z" fill="white" fill-opacity="0.2" />
      </svg>
    </div>

    <div
      class="relative flex grow flex-col justify-between gap-24 p-32"
    >
      <div v-if="label" class="inline-block w-full text-center text-14 text-darkblue/60' font-bold leading-100% uppercase">
        {{ label }}
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-24">
        <RewardAchievement :active="false" value="10 - 99K" name="Protector" />
        <RewardAchievement :active="false" value="100 - 999K" name="Champion" />
        <RewardAchievement :active="false" value="1 - 10M" name="Overseer" />
        <RewardAchievement :active="false" value=">10M" name="Paladin" />
      </div>
    </div>
  </div>
</template>
