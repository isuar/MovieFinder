// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],

  imports: {
    dirs: ["stores"],
  },

  // Force client-side rendering only
  ssr: false,

  // Build configuration
  app: {
    buildAssetsDir: "/_nuxt/",
    baseURL: "",
  },

  // Pinia configuration
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },

  // Netlify specific configuration
  nitro: {
    preset: "netlify",
    routeRules: {
      '/**': { spa: true },
    },
  },

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
});
