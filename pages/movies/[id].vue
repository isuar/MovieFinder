<script setup>
const route = useRoute();

// Get more detailed movie info for this page
const { data, error, pending } = await useFetch(`https://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}&plot=full`,
    {
        // Get more fields for detailed view
        pick: [
            "Title", "Plot", "Year", "Error", "Poster", "Director", 
            "Actors", "Genre", "Runtime", "imdbRating", "imdbVotes", "Released", "Rated"
        ],
        key: `/movies/${route.params.id}`,
    }
);

// Handle errors
if (error.value) {
    console.error("An error occurred while fetching data:", error.value);
    showError({ statusCode: 500, statusMessage: "Internal Server Error" });
}

if (data.value.Error === "Incorrect IMDb ID.") {
    showError({ statusCode: 404, statusMessage: "Page not found" });
}

// Set metadata for SEO
useHead({
    title: data.value.Title,
    meta: [
        {
            name: "description",
            content: data.value.Plot,
        },
        { property: "og:description", content: data.value.Plot },
        { property: "og:image", content: data.value.Poster },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
            name: "keywords",
            content: `${data.value.Title}, ${data.value.Director}, ${data.value.Actors}, ${data.value.Year}`,
        },
    ],
});

// Generate rating stars
const ratingStars = computed(() => {
    const rating = parseFloat(data.value?.imdbRating) || 0;
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 >= 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    return {
        full: fullStars,
        half: halfStar,
        empty: emptyStars
    };
});

// Format date
const formattedReleaseDate = computed(() => {
    if (!data.value?.Released || data.value.Released === 'N/A') return 'Release date unknown';
    return new Date(data.value.Released).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
});
</script>

<template>
    <div class="container mx-auto px-4 py-8">
        <!-- Back button -->
        <NuxtLink to="/movies" class="inline-flex items-center mb-6 text-indigo-600 dark:text-indigo-400 hover:underline">
            <span class="mr-2">&larr;</span> Back to Search
        </NuxtLink>
        
        <!-- Loading state -->
        <div v-if="pending" class="flex justify-center items-center py-16">
            <div class="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
        </div>
        
        <div v-else class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <!-- Movie details -->
            <div class="md:flex">
                <!-- Movie poster -->
                <div class="md:w-1/3 lg:w-1/4">
                    <img 
                        :src="data.Poster !== 'N/A' ? data.Poster : '/placeholder-movie.png'" 
                        :alt="data.Title" 
                        class="w-full h-auto object-cover"
                    />
                </div>
                
                <!-- Movie info -->
                <div class="p-6 md:w-2/3 lg:w-3/4">
                    <div class="flex items-center justify-between mb-2">
                        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ data.Title }}</h1>
                        <span class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium">
                            {{ data.Year }}
                        </span>
                    </div>
                    
                    <!-- Movie metadata -->
                    <div class="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4 gap-4">
                        <span v-if="data.Rated && data.Rated !== 'N/A'" class="border border-gray-300 dark:border-gray-600 px-2 py-1 rounded">
                            {{ data.Rated }}
                        </span>
                        <span v-if="data.Runtime && data.Runtime !== 'N/A'">{{ data.Runtime }}</span>
                        <span v-if="data.Released && data.Released !== 'N/A'">{{ formattedReleaseDate }}</span>
                    </div>
                    
                    <!-- Rating -->
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400 mr-2">
                            <span v-for="i in ratingStars.full" :key="'full'+i" class="text-xl">★</span>
                            <span v-for="i in ratingStars.half" :key="'half'+i" class="text-xl">★</span>
                            <span v-for="i in ratingStars.empty" :key="'empty'+i" class="text-xl text-gray-300 dark:text-gray-600">★</span>
                        </div>
                        <span class="text-gray-700 dark:text-gray-300" v-if="data.imdbRating && data.imdbRating !== 'N/A'">
                            {{ data.imdbRating }}/10
                            <span class="text-gray-500 dark:text-gray-400 text-sm" v-if="data.imdbVotes && data.imdbVotes !== 'N/A'">
                                ({{ data.imdbVotes }} votes)
                            </span>
                        </span>
                    </div>
                    
                    <!-- Genres -->
                    <div v-if="data.Genre && data.Genre !== 'N/A'" class="mb-4">
                        <div class="flex flex-wrap gap-2">
                            <span 
                                v-for="genre in data.Genre.split(', ')" 
                                :key="genre"
                                class="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200"
                            >
                                {{ genre }}
                            </span>
                        </div>
                    </div>
                    
                    <!-- Plot -->
                    <div class="mb-6">
                        <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Plot</h2>
                        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {{ data.Plot || 'No plot description available.' }}
                        </p>
                    </div>
                    
                    <!-- Cast & Crew -->
                    <div class="grid md:grid-cols-2 gap-6">
                        <div v-if="data.Director && data.Director !== 'N/A'">
                            <h2 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Director</h2>
                            <p class="text-gray-700 dark:text-gray-300">{{ data.Director }}</p>
                        </div>
                        
                        <div v-if="data.Actors && data.Actors !== 'N/A'">
                            <h2 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Cast</h2>
                            <p class="text-gray-700 dark:text-gray-300">{{ data.Actors }}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Actions -->
            <div class="p-6 bg-gray-50 dark:bg-gray-900 flex justify-between items-center">
                <a 
                    :href="`https://www.imdb.com/title/${route.params.id}`" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                >
                    <span>View on IMDb</span>
                    <span class="ml-1">↗</span>
                </a>
                
                <NuxtLink 
                    to="/movies" 
                    class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                    Back to Movies
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Smooth transition for hover effects */
a, button {
    transition: all 0.2s ease-in-out;
}

/* Styling for movie details */
.container {
    max-width: 1200px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .md\:flex {
        flex-direction: column;
    }
    
    .md\:w-1\/3, .md\:w-2\/3 {
        width: 100%;
    }
}
</style>