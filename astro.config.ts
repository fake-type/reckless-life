import { defineConfig } from 'astro/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  server: {
    port: 4000
  },
  vite: {
    plugins: [
      vanillaExtractPlugin({
        emitCssInSsr: true
      })
    ]
  }
})
