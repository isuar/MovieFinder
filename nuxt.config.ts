// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    ["@nuxt/eslint", {}],
    ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
  ],
  imports: {
    dirs: ["stores"],
  },

  routeRules: {
    "/spa": { ssr: false },
    "/static": { static: true },
    "/swr": { swr: true },
  },

  // nitro: {
  //   preset: "github-pages",
  //   prerender: {
  //     crawlLinks: false, // Disable link crawling for prerendering
  //   },
  // },

  ssr: false,
});
