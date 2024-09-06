import { readFile } from 'node:fs/promises'
import { presetNimiq } from 'nimiq-css'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import { presetRemToPx } from '@unocss/preset-rem-to-px'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  rules: [
    ['ease-nimiq', { transitionTimingFunction: 'cubic-bezier(0.25, 0, 0, 1)' }],
  ],
  presets: [
    presetUno({ attributifyPseudo: true }),
    presetNimiq({
      utilities: true,
      icons: false,
      fonts: {
        fontAssetsDir: 'app/assets/fonts',
      },
    }),
    presetRemToPx({ baseFontSize: 4 }),
    presetAttributify(),
    presetIcons({
      collections: {
        nimiq: async () => {
          return await fetch(
            'https://raw.githubusercontent.com/onmax/nimiq-ui/main/packages/nimiq-icons/dist/icons.json',
          ).then(res => res.json() as any)
        },
        custom: {
          'fist': () => readFile('./app/assets/svg/icons/fist.svg', 'utf-8'),
          'galxe': () => readFile('./app/assets/svg/icons/galxe.svg', 'utf-8'),
          'hex': () => readFile('./app/assets/svg/icons/hex.svg', 'utf-8'),
          'lock': () => readFile('./app/assets/svg/icons/lock.svg', 'utf-8'),
          'lock-outline': () => readFile('./app/assets/svg/icons/lock-outline.svg', 'utf-8'),
          'timer': () => readFile('./app/assets/svg/icons/timer.svg', 'utf-8'),
          'gauge-chart': () => readFile('./app/assets/svg/icons/gauge-chart.svg', 'utf-8'),
          'cli-docs': () => readFile('./app/assets/svg/icons/cli-docs.svg', 'utf-8'),

          // TODO Delete these lines and the files if they are not used
          'box': () => readFile('./app/assets/svg/icons/box.svg', 'utf-8'),
          'document': () => readFile('./app/assets/svg/icons/document.svg', 'utf-8'),
          'duck': () => readFile('./app/assets/svg/icons/duck.svg', 'utf-8'),
          'horn': () => readFile('./app/assets/svg/icons/horn.svg', 'utf-8'),
          'leaf': () => readFile('./app/assets/svg/icons/leaf.svg', 'utf-8'),
          'wave': () => readFile('./app/assets/svg/icons/wave.svg', 'utf-8'),
          'ember': () => readFile('./app/assets/svg/icons/ember.svg', 'utf-8'),
          'close': () => readFile('./app/assets/svg/icons/close.svg', 'utf-8'),
        },
      },
    }),
  ],
  theme: {
    screens: {
      sm: '375px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 1024px) { ... }

      lg: '1152px',
      xl: '1440px',
      // => @media (min-width: 1280px) { ... }
    },
    variants: {
      extend: {
        gridColumnEnd: ['last'],
      },
    },
  },
  transformers: [
    transformerDirectives(),
  ],
})
