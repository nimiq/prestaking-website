import { presetNimiq } from 'nimiq-css'
import { defineConfig, presetAttributify, presetUno } from 'unocss'
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
    }),
    presetRemToPx({ baseFontSize: 4 }),
    presetAttributify(),
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
