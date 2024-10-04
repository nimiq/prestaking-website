// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-27',
  future: {
    compatibilityVersion: 4,
  },
  // ssr: false,
  css: [
    '~/assets/css/base.css',
  ],
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/image',
    'radix-vue/nuxt',
    '@nuxtjs/seo',
    'nuxt-auth-utils',
    'nuxt-security',
  ],

  devtools: {
    enabled: true,
  },

  runtimeConfig: {
    galxeClientId: '', // Replaced by NUXT_GALXE_CLIENT_ID
    galxeClientSecret: '', // Replaced by NUXT_GALXE_CLIENT_SECRET
    public: {
      validatorsApiUrl: 'https://validators-api.pages.dev/api/v1', // Replaced by NUXT_PUBLIC_VALIDATORS_API_URL
      albatrossLiveviewUrl: 'https://nimiq-website-nimiq.nuxt.dev/iframes/albatross-liveview', // Replaced by NUXT_PUBLIC_ALBATROSS_LIVEVIEW_URL
      nimiqwatchTotalStakeUrl: 'https://v2.nimiqwatch.com/api/v2/total-prestake', // Replaced by NUXT_PUBLIC_NIMIQWATCH_TOTAL_STAKE_URL
    },
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  site: {
    url: 'https://prestaking.nimiq.network/',
    name: 'Nimiq Prestaking',
    description: 'Launch scheduled for Nov. 19th, 2024. Pre-stake and join the launch campaign with a huge 200,000,000 NIM giveaway!',
    defaultLocale: 'en',
  },

  hub: {
    kv: true,
  },

  security: {
    // headers: {
    //   crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp', // To work with Nuxt DevTools
    // },
    headers: {
      // The default value is 'same-origin', but that prevents the Hub popup from being communicated with.
      crossOriginOpenerPolicy: 'same-origin-allow-popups',
    },
  },

  watch: ['~/content'],

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  app: {
    head: {
      title: 'Nimiq Pre-staking',
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Your Nimiq-Nuxt Template' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#1f2348' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
})
