// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@pinia/nuxt",
    "@hebilicious/form-actions-nuxt",
  ],
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: "1BIOA2024",
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  app: {
    head: {
      title: "Olivier Glorieux", // Other meta information
      script: [
        {
          hid: "stripe",
          src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",
          defer: true,
        },
      ],
    },
  },
});
