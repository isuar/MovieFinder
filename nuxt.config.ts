// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2023-11-04",
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

  ssr: false,

  nitro: {
    hooks: {
      "prerender:generate"(route) {
        const routesToSkip = ["/index.html", "/200.html", "/404.html"];
        if (routesToSkip.includes(route.route)) {
          route.skip = true;
        }
      },
    },
  },
});
