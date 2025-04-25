<script setup>
const pageTitle = ref('Discover Popular Movies');
</script>

<template>
    <div>
        <h1 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">{{ pageTitle }}</h1>
        <p class="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Browse through a collection of popular movies or search for your favorites. Each time you visit, we'll show you a random selection of great films!
        </p>
        <MovieSearch />
    </div>
</template>