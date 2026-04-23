import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
    image: z.object({ src: z.string(), alt: z.string() }).optional(),
    draft: z.boolean().default(false),
    relatedServices: z.array(
      z.object({ label: z.string(), href: z.string() })
    ).default([]),
  }),
});

export const collections = { blog };
