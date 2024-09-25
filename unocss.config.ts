import { readFile } from 'node:fs/promises'
import { presetRemToPx } from '@unocss/preset-rem-to-px'
import transformerDirectives from '@unocss/transformer-directives'
import { presetNimiq } from 'nimiq-css'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  rules: [
    [/^area-(.*)$/, ([, t]) => ({ 'grid-area': t })],
  ],
  shortcuts: [
    ['text-lg', 'text-16 lg:text-18 lh-[1.3]'],
    ['text-2xl', 'text-24 lh-[1.3]'],
  ],
  presets: [
    presetUno({ attributifyPseudo: true }),
    presetNimiq({
      utilities: true,
      attributifyUtilities: true,
      typography: true,
      staticContent: true,
    }),
    presetRemToPx({ baseFontSize: 4 }),
    presetAttributify(),
    presetIcons({
      collections: {
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
          'galxe-dark': () => readFile('./app/assets/svg/icons/galxe-dark.svg', 'utf-8'),
          'box': () => readFile('./app/assets/svg/icons/box.svg', 'utf-8'),
          'document': () => readFile('./app/assets/svg/icons/document.svg', 'utf-8'),
          'duck': () => readFile('./app/assets/svg/icons/duck.svg', 'utf-8'),
          'horn': () => readFile('./app/assets/svg/icons/horn.svg', 'utf-8'),
          'leaf': () => readFile('./app/assets/svg/icons/leaf.svg', 'utf-8'),
          'wave': () => readFile('./app/assets/svg/icons/wave.svg', 'utf-8'),
          'ember': () => readFile('./app/assets/svg/icons/ember.svg', 'utf-8'),
          'close': () => readFile('./app/assets/svg/icons/close.svg', 'utf-8'),
          'close-transparent': () => readFile('./app/assets/svg/icons/close-transparent.svg', 'utf-8'),
          'chevron': () => readFile('./app/assets/svg/icons/chevron.svg', 'utf-8'),
          'tickets': () => readFile('./app/assets/svg/icons/tickets.svg', 'utf-8'),
          'dots': () => readFile('./app/assets/svg/icons/dots.svg', 'utf-8'),
          'code': () => readFile('./app/assets/svg/icons/code.svg', 'utf-8'),
          'arrow': () => readFile('./app/assets/svg/icons/arrow.svg', 'utf-8'),
          'plus': () => readFile('./app/assets/svg/icons/plus.svg', 'utf-8'),

          // Alabatross details svgs
          'albatross-0': () => readFile('./app/assets/svg/icons/albatross-0.svg', 'utf-8'),
          'albatross-1': () => readFile('./app/assets/svg/icons/albatross-1.svg', 'utf-8'),
          'albatross-2': () => readFile('./app/assets/svg/icons/albatross-2.svg', 'utf-8'),
          'albatross-3': () => readFile('./app/assets/svg/icons/albatross-3.svg', 'utf-8'),

          // Cards
          'time-card': () => readFile('./app/assets/svg/cards/time-active.svg', 'utf-8'),
          'underdog-card': () => readFile('./app/assets/svg/cards/underdog-active.svg', 'utf-8'),
          'galxe-card': () => readFile('./app/assets/svg/cards/galxe-active.svg', 'utf-8'),

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
