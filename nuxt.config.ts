// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  imports: {
    dirs: ['stores'],
  },

  // Force client-side rendering only
  ssr: false,

  // Build configuration
  app: {
    buildAssetsDir: "/_nuxt/",
    baseURL: "/",
  },

  // Pinia configuration
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },

  // Generate static files in dist folder
  nitro: {
    output: {
      dir: 'dist',
      publicDir: 'dist'
    }
  },

  // Disable any potentially problematic experimental features
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
  }
});
