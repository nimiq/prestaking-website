<template>
  <NuxtLayout>
    <NuxtPage
      :transition="{
        name: 'page',
        mode: 'out-in',
      }"
    />
  </NuxtLayout>
</template>

<style>
html,
body {
  @apply bg-darkblue;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

h1 {
  @apply font-700 text-40 leading-[120%]
  lg:font-700 lg:text-44 lg:leading-[120%]
  xl:font-700 xl:text-48 xl:leading-[120%];
}

h2 {
  @apply font-700 text-32 leading-[120%]
  lg:font-700 lg:text-36 lg:leading-[120%]
  xl:font-700 xl:text-40 xl:leading-[130%];
}

h3 {
  @apply font-600 text-22 leading-[130%]
  lg:font-600 lg:text-26 lg:leading-[130%]
  xl:font-600 xl:text-28 xl:leading-[130%];
}

h4 {
  @apply font-600 text-20 leading-[130%]
  lg:font-600 lg:text-22 lg:leading-[130%]
  xl:font-600 xl:text-24 xl:leading-[130%];
}

.hero-subline {
  @apply font-500 text-20 leading-[150%]
  lg:font-500 lg:text-22 lg:leading-[150%]
  xl:font-500 xl:text-24 xl:leading-[150%];
}

.subline {
  @apply font-400 text-20 leading-[150%]
  lg:font-400 lg:text-22 lg:leading-[150%]
  xl:font-400 xl:text-24 xl:leading-[150%];
}

.large-text {
  @apply font-400 text-26 leading-[150%]
  lg:font-400 lg:text-28 lg:leading-[150%]
  xl:font-400 xl:text-32 xl:leading-[150%];
}

.bold-line {
  @apply font-700 text-21 leading-[160%]
  lg:font-700 lg:text-22 lg:leading-[160%]
  xl:font-700 xl:text-24 xl:leading-[160%];
}

p,
.body {
  @apply font-400 text-16 leading-[150%]
  lg:font-400 lg:text-17 lg:leading-[150%]
  xl:font-400 xl:text-18 xl:leading-[150%];
}

.small-body {
  @apply font-400 text-14 leading-[150%]
  lg:font-400 lg:text-15 lg:leading-[150%]
  xl:font-400 xl:text-16 xl:leading-[150%];
}

.large-label {
  @apply uppercase
  font-700 text-14 leading-[120%]
  lg:font-700 lg:text-16 lg:leading-[120%]
  xl:font-700 xl:text-18 xl:leading-[120%];
  letter-spacing: 3px;
}

.small-label {
  @apply uppercase
  font-700 text-12 leading-[120%]
  lg:font-700 lg:text-13 lg:leading-[120%]
  xl:font-700 xl:text-14 xl:leading-[120%];
  letter-spacing: 1px;
}

.large-button {
  @apply font-700 text-18 leading-[150%]
  lg:font-700 lg:text-20 lg:leading-[150%]
  xl:font-700 xl:text-20 xl:leading-[150%];
}

.small-button {
  @apply font-700 text-14 leading-[150%]
  lg:font-700 lg:text-15 lg:leading-[150%]
  xl:font-700 xl:text-16 xl:leading-[150%];
}

summary {
  color: rgb(var(--nq-neutral));
  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 150% */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}
</style>
