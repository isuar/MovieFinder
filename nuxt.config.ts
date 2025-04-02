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
  nitro: {
    debug: true,
    preset: "github-pages",
  },
  routeRules: {
    "/admin/**": { prerender: false },
  },
  experimental: {
    payloadExtraction: true,
  },
  ssr: false,
});
