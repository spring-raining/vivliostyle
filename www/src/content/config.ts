import { defineCollection, z } from 'astro:content';

const article = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    order: z.number().optional(),
    theme: z.array(z.string()).optional(),
    class: z.string().optional(),
  }),
});

export const collections = { article };
