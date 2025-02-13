import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "data",
      source: "**/*.md",
    }),
  },
});
