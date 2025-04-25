// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
    '@nuxtjs/tailwindcss',
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
    head: {
      title: 'MovieFinder - Discover Your Next Favorite Movie',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A modern movie discovery application built with Nuxt 3.' },
        { name: 'theme-color', content: '#4f46e5' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
      ]
    },
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false,
  },

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },

  // Static site generation for Netlify
  nitro: {
    preset: "netlify",
    static: true
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
