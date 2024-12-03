import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    draft: z.boolean(),
    image: z.string(),
  }),
});
export const collections = {
  blog: blogCollection,
};
