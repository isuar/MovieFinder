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
});

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
