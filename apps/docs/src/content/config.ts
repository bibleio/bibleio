import { defineCollection, z } from "astro:content";

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // whether it is a folder, true makes it a collapsible
    directory: z.optional(z.boolean()),
    // whether it is a section or not
    section: z.optional(z.boolean()),
    // mainly used for sections only!! defines the order in where they should go
    order: z.optional(z.number()),
  }),
});

export const collections = {
  design: docs,
  api: docs,
  biblejson: docs,
};
