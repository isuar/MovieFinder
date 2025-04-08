// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
  ],
  imports: {
    dirs: ["stores"],
  },

  // Force client-side rendering only
  ssr: false,

  // Minimal build configuration
  app: {
    buildAssetsDir: "/_nuxt/",
    baseURL: "./", // Use relative paths
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false,
  },

  // Basic GitHub pages setup without prerendering
  nitro: {
    preset: "github-pages",
    prerender: {
      routes: [],
    },
  },
});

// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: "2024-11-01",
//   devtools: { enabled: true },
//   modules: [
//     ["@nuxt/eslint", {}],
//     ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
//   ],
//   imports: {
//     dirs: ["stores"],
//   },

//   routeRules: {
//     "/spa": { ssr: false },
//     "/static": { static: true },
//     "/swr": { swr: true },
//   },

//   ssr: false,

//   nitro: {
//     hooks: {
//       "prerender:generate"(route) {
//         const routesToSkip = ["/index.html", "/200.html", "/404.html"];
//         if (routesToSkip.includes(route.route)) {
//           route.skip = true;
//         }
//       },
//     },
//   },
// });
