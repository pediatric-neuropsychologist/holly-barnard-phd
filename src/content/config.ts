import { defineCollection } from "astro:content";

// Minimal collections config for posts. When you install @astro/content this
// file will register a `posts` collection that reads markdown files from
// src/content/posts/*.md. Add a Zod schema later if you want typed frontmatter.
export const collections = {
  posts: defineCollection({}),
};
