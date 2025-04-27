<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - My Movie Site` : "My Movie Site";
  },
  meta: [
    {
      name: "description",
      content: "A simple movie app using Nuxt 3",
    },
    {
      name: "keywords",
      content: "Nuxt, Vue, Movies, App",
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: '/styles.css'
    }
  ]
});

</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
