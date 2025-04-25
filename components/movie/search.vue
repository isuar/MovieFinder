<script setup>
const query = ref("");
const movies = ref([]);
const isLoading = ref(false);
const error = ref(null);

// Popular movie search terms for random selection
const popularSearchTerms = [
    "Avengers",
    "Star Wars",
    "Harry Potter",
    "Lord of the Rings",
    "Korean",
    "Marvel",
    "Anime",
    "John Wick",
    "Inception",
    "Animation"
];

// Get a random search term
function getRandomSearchTerm() {
    const randomIndex = Math.floor(Math.random() * popularSearchTerms.length);
    return popularSearchTerms[randomIndex];
}

// Search function
async function search() {
    isLoading.value = true;
    error.value = null;

    // Use user query or random term if empty
    const searchTerm = query.value.trim() || getRandomSearchTerm();

    try {
        const response = await $fetch(`https://www.omdbapi.com/?apikey=8e3f600b&s=${searchTerm}`);

        if (response.Error) {
            error.value = response.Error;
            movies.value = [];
        } else {
            movies.value = response.Search || [];
            // If using random search term and the input is empty, show what was searched
            if (!query.value.trim()) {
                query.value = searchTerm;
            }
        }
    } catch (err) {
        error.value = 'Failed to fetch movies. Please try again.';
        console.error('Search error:', err);
    } finally {
        isLoading.value = false;
    }
}

// Initial search with random movie
search();
</script>

<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Movie Search</h1>

        <!-- Search form -->
        <form @submit.prevent="search" class="max-w-md mx-auto mb-8">
            <div class="flex shadow-md rounded-lg overflow-hidden">
                <input type="text" v-model="query" placeholder="Search for movies..."
                    class="flex-grow px-4 py-3 focus:outline-none dark:bg-gray-700 dark:text-white" />
                <button type="submit"
                    class="bg-indigo-600 text-white px-6 py-3 font-medium hover:bg-indigo-700 transition"
                    :disabled="isLoading">
                    <span v-if="isLoading">Searching...</span>
                    <span v-else>Search</span>
                </button>
            </div>
        </form>

        <!-- Loading indicator -->
        <div v-if="isLoading" class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-500 border-t-transparent">
            </div>
            <p class="mt-2 text-gray-600 dark:text-gray-400">Searching for movies...</p>
        </div>

        <!-- Error message -->
        <div v-else-if="error" class="text-center py-8 px-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <p class="text-red-600 dark:text-red-400">{{ error }}</p>
            <button @click="search"
                class="mt-4 px-4 py-2 bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-200 rounded-md hover:bg-red-200 dark:hover:bg-red-700 transition">
                Try Again
            </button>
        </div>

        <!-- Results -->
        <div v-else-if="movies.length" class="py-4">
            <p class="text-gray-600 dark:text-gray-400 mb-6 text-center">Found {{ movies.length }} results for "{{ query
            }}"</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                <div v-for="movie in movies" :key="movie.imdbID"
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
                    <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }" class="block h-full">
                        <div class="aspect-w-2 aspect-h-3 relative">
                            <img :src="movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.png'"
                                :alt="movie.Title" class="w-full h-64 object-cover" loading="lazy" />
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-lg mb-1 text-gray-800 dark:text-white truncate">{{ movie.Title }}
                            </h3>
                            <p class="text-indigo-600 dark:text-indigo-400">{{ movie.Year }}</p>
                            <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">{{ movie.Type }}</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- No results -->
        <div v-else-if="!isLoading && !error" class="text-center py-12">
            <p class="text-gray-600 dark:text-gray-400">No movies found. Try a different search term.</p>
        </div>
    </div>
</template>

<style scoped>
/* Hover effect for movie cards */
.movie-card:hover {
    transform: translateY(-5px);
}

/* Fade in animation for results */
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.grid {
    animation: fadeIn 0.3s ease-in-out;
}

/* Make sure posters are properly sized */
.aspect-w-2 {
    position: relative;
    padding-bottom: 150%;
    /* 2:3 aspect ratio */
}

.aspect-w-2>img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>
