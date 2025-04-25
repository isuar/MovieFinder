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

  // Static site generation
  ssr: false,

  // Pinia configuration
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },

  // Build configuration
  app: {
    buildAssetsDir: "/_nuxt/",
    baseURL: "/", // Changed from "./" to "/" for Netlify
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
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
});
