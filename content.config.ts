import { defineContentConfig, defineCollection , z} from "@nuxt/content";

export default defineContentConfig({
  collections: {
    chapitres: defineCollection({
        type: 'data',
        source: 'chapitres/*.json',
        schema: z.object({
          name: z.string(),
          avatar: z.string(),
          url: z.string()
        })
    }),
  },
});
