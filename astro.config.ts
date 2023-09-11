import react from '@astrojs/react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  server: { port: 4000 },
  vite: {
    plugins: [vanillaExtractPlugin({ emitCssInSsr: true })]
  }
})
