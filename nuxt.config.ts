// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    build: {
      modulePreload: {
        polyfill: true
      },
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          format: 'es',
          entryFileNames: '_nuxt/[name].[hash].js',
          chunkFileNames: '_nuxt/[name].[hash].js',
          assetFileNames: '_nuxt/[name].[hash][extname]',
        }
      }
    },
    server: {
      fs: {
        strict: false
      }
    }
  },
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
    // Make sure there's no trailing slash and no path prefix
    baseURL: "./",
    cdnURL: "/",
  },

  // Pinia configuration
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },

  nitro: {
    preset: "netlify",
    output: {
      dir: "dist",
      publicDir: "dist",
    },
    // Ensure proper SPA behavior
    routeRules: {
      "/**": { spa: true },
    },
    // Add prerender config
    prerender: {
      crawlLinks: false,
      routes: ["/"],
      ignore: [
        // ignore all paths with a dot
        /\./,
      ],
    },
  },

  // Disable any potentially problematic experimental features
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false,
  },

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },

  compatibilityDate: "2025-04-25",
});
