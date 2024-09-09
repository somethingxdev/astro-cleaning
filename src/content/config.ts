import { defineCollection, z } from 'astro:content';
const services = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    draft: z.boolean(),
    image: image(),
    meta: z.object({
      title: z.string(),
      description: z.string()
    })
  })
});

export const collections = { services };