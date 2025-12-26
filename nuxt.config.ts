// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  runtimeConfig: {
    public: {
      directusUrl: process.env.DIRECTUS_URL || 'https://directus.olivierglorieux.fr'
    }
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt"
  ],
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
