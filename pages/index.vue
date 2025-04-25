<script setup lang="ts">
// Get latest 5 popular movies for the homepage
const latestMovies = ref([]);

async function getPopularMovies() {
  try {
    // Using Batman as a sample search to get some movies
    const { Search } = await $fetch(`https://www.omdbapi.com/?apikey=8e3f600b&s=popular&type=movie`);
    latestMovies.value = Search ? Search.slice(0, 5) : [];
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
}

onMounted(() => {
  getPopularMovies();
});
</script>

<template>
  <div>
    <!-- Hero section -->
    <section class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 rounded-lg mb-8">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-6">Welcome to MovieFinder</h1>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Discover your next favorite movie with our extensive database of films from around the world.</p>
        <NuxtLink to="/movies" class="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">Start Exploring</NuxtLink>
      </div>
    </section>

    <!-- Features section -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-8 text-center">Why Use MovieFinder?</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
            <span class="text-indigo-600 dark:text-indigo-400 text-2xl">🔍</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">Easy Search</h3>
          <p class="text-gray-600 dark:text-gray-400">Find movies quickly with our powerful search engine.</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
            <span class="text-indigo-600 dark:text-indigo-400 text-2xl">📱</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">Responsive Design</h3>
          <p class="text-gray-600 dark:text-gray-400">Enjoy a seamless experience on any device.</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
            <span class="text-indigo-600 dark:text-indigo-400 text-2xl">🚀</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">Fast Loading</h3>
          <p class="text-gray-600 dark:text-gray-400">Built with Nuxt 3 for optimal performance.</p>
        </div>
      </div>
    </section>

    <!-- Call to action -->
    <section class="bg-gray-200 dark:bg-gray-800 p-8 rounded-lg text-center">
      <h2 class="text-2xl font-bold mb-4">Ready to discover amazing movies?</h2>
      <p class="mb-6">Start your journey with MovieFinder today.</p>
      <NuxtLink to="/movies" class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">Search Movies</NuxtLink>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
