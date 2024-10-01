// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu(
    {
      unocss: true,
      formatters: true,
      typescript: true,
      vue: true,
      ignores: ['public/staking-calculator'],
    },
  ),
)
