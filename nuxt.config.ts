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
    "@pinia/nuxt",
    '@nuxt/content',
    '@nuxthq/studio'
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
