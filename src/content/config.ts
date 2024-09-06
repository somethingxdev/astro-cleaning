import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: "**/services/*.mdoc", }),
  schema: ({ image }) => z.object({
    title: z.string(),
    draft: z.boolean(),
    image: image().optional(),
  })
});

export const collections = { services };