<script>
export default {
}
</script>

<template>
  <div class="fixed left-0 top-0 z-1000 h-screen w-screen flex items-center justify-center bg-darkblue/70">
    <TheCard
      title="Prestake your NIM and upgrade your Identicon"
      label="Tickets (Staked NIM/1000)"
      description="Join in and support the network. Be among the first to earn, get a unique Identicon upgrade and win some NIM."
      image-url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Images&psig=AOvVaw3csExdp2KKr9y_S4z_LLg0&ust=1723643756834000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLjWnMCP8ocDFQAAAAAdAAAAABAE"
      @close="$emit('closeModal')"
    />
  </div>
</template>
