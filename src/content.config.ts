import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

// Posts collection schema — basic fields used by the site.
const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().or(z.date()).optional(),
    draft: z.boolean().optional(),
  }),
  loader: file("src/content/posts/*.md"),
});

export const collections = { posts };
