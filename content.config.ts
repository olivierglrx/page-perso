import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    chapitres: defineCollection({
        source: 'chapitres/**.json',
        type: 'data',
        schema: z.object({
          name: z.string(),
          avatar: z.string(),
          url: z.string()
        })
    }),
  },
});
