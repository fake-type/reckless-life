import { defineCollection, z } from 'astro:content'

export const chronicles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional()
  })
})
