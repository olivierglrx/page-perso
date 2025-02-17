// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/admin": {
      // Temporary redirect using a 307 status code
      redirect: "https://app.pagescms.org/olivierglrx/page-perso/master/collection/chapitres",
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@pinia/nuxt",
    "@hebilicious/form-actions-nuxt",
    '@nuxthq/studio'
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
