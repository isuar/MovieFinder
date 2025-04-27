<script setup>
// Import the Tailwind CSS directly
import '~/assets/css/tailwind.css';

const user = useUser();
</script>

<template>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
        <nav class="bg-white dark:bg-gray-800 shadow-md p-4">
            <div class="container mx-auto flex items-center justify-between">
                <div class="flex items-center space-x-6">
                    <h1 class="text-xl font-bold text-indigo-600 dark:text-indigo-400">MovieFinder</h1>
                    <NuxtLink class="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition" to="/">Home</NuxtLink>
                    <NuxtLink class="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition" to="/movies">Movies</NuxtLink>
                </div>
                <div class="flex items-center space-x-4">
                    <DarkModeToggle />
                    <NuxtLink v-if="!user.isLoggedIn" to="/login" class="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">Login</NuxtLink>
                    <a href="#" v-else @click.prevent="user.isLoggedIn = false" class="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition">Logout</a>
                </div>
            </div>
        </nav>
        <main class="container mx-auto p-4">
            <slot></slot>
        </main>
        <footer class="bg-white dark:bg-gray-800 shadow-inner p-4 mt-8">
            <div class="container mx-auto text-center text-gray-600 dark:text-gray-400">
                <p>© 2025 MovieFinder | Powered by Nuxt 3</p>
            </div>
        </footer>
    </div>
</template>

<style>
/* Base styles */
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: #333;
}

.dark body {
    color: #f3f4f6;
    background-color: #111827;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Navigation active link styles */
.router-link-active {
    color: #4f46e5;
    font-weight: 500;
}
</style>