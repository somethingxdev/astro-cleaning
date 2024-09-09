import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import AutoImport from 'astro-auto-import'
import mdx from '@astrojs/mdx'
import node from '@astrojs/node';

export default defineConfig({
  site: ',https://www.carpetcleaningchico.com',
  output: 'hybrid',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    markdoc(),
    keystatic(),
    AutoImport({
      imports: [
        './src/components/content/GridItem.astro',
        './src/components/content/GridLayout.astro',
        './src/components/Reasons.astro',
        './src/components/content/Steps.astro',
         './src/components/content/Slider.astro'
      ],
    }),
    mdx(),
  ],

  adapter: node({
    mode: 'standalone',
  }),
})