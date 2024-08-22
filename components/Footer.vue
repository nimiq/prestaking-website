<script lang="ts" setup>

</script>

<template>
  <footer class="w-full bg-darkblue">
    <div class="mx-auto max-w-1440 flex flex-col justify-between gap-x-56 bg-darkblue px-32 pb-80 text-16 text-white/60 md:flex-row md:px-64">
      <div class="order-2 flex flex-col justify-between md:order-0 lg:max-w-400 md:max-w-1/2">
        <div class="flex flex-col">
          <div class="order-2 md:order-0">
            <div i-nimiq:logos-nimiq-horizontal-mono class="mb-12 h-25 w-100 text-neutral-700" />
            <p>Nimiq is an Inuit word for an object or force that binds things together.</p>
          </div>
          <div>
            <p class="mt-32 text-white">
              or follow us here
            </p>
            <div class="mb-32 flex items-center gap-x-8 text-24 md:mb-0">
              <div class="text-white/20" i-nimiq:logos-github-mono />
              <div class="text-white/20" i-nimiq:logos-facebook-mono />
              <div class="text-white/20" i-nimiq:logos-discord-mono />
              <div class="text-white/20" i-nimiq:logos-telegram-mono />
              <div class="text-white/20" i-nimiq:logos-twitter-mono />
              <div class="text-white/20" i-nimiq:logos-instagram-mono />
              <div class="text-white/20" i-nimiq:logos-youtube-mono />
            </div>
          </div>
        </div>
        <div class="md:mt-300">
          Footer links
        </div>
      </div>
      <div class="grid grid-rows-[repeat(3,_miin_content)] grid-cols-2 grow gap-y-40 overflow-hidden bg-darkblue text-white/60 lg:grid-cols-3 md:max-w-555 md:gap-x-24">
        <div class="[&_a]:mb-12">
          <p mb-32 w-full text-12 label>
            Project
          </p>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
        </div>

        <div class="[&_a]:mb-12">
          <p mb-32 w-full text-12 label>
            Tech
          </p>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
        </div>

        <div class="[&_a]:mb-12">
          <p mb-32 w-full text-12 label>
            Apps
          </p>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
        </div>

        <div class="[&_a]:mb-12">
          <p mb-32 w-full text-12 label>
            Get started
          </p>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
        </div>

        <div class="[&_a]:mb-12">
          <p mb-32 w-full text-12 label>
            and more
          </p>
          <a href="https://nimiq.com" class="block">External link</a>
          <a href="https://nimiq.com" class="block">External link</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.grid div {
  position: relative;
  padding: 1em;
}

@media (min-width: 0px) {
  .grid div:nth-child(2n + 1)::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100vw;
    height: 1px;
    background: white;
    opacity: 0.1;
  }
}
@media (min-width: 768px) {
  .grid div:nth-child(2n + 1):not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100vw;
    height: 1px;
    background: white;
    opacity: 0.1;
  }
}
@media (min-width: 1024px) {
  .grid div:nth-child(6n + 1):not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100vw;
    height: 1px;
    background: white;
    opacity: 0.1;
  }
}
</style>
