<script setup>
const user = useUser();
const username = ref('');
const password = ref('');
const showPassword = ref(false);
const isLoading = ref(false);
const error = ref('');

definePageMeta({
    layout: "plain",
});

async function handleLogin() {
    // Reset error state
    error.value = '';
    
    // Validate inputs
    if (!username.value || !password.value) {
        error.value = 'Please enter both username and password';
        return;
    }
    
    // Show loading state
    isLoading.value = true;
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
        // Call the login method from user composable
        user.login();
        // Clear form after successful login
        username.value = '';
        password.value = '';
    } catch (err) {
        error.value = 'Invalid username or password';
    } finally {
        isLoading.value = false;
    }
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
        <div class="w-full max-w-md">
            <!-- Logo/branding -->
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-indigo-600 dark:text-indigo-400">MovieFinder</h1>
                <p class="text-gray-600 dark:text-gray-400 mt-2">Sign in to your account</p>
            </div>
            
            <!-- Login form -->
            <form @submit.prevent="handleLogin" class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
                <!-- Error message -->
                <div v-if="error" class="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-md text-sm">
                    {{ error }}
                </div>
                
                <!-- Username field -->
                <div class="mb-6">
                    <label for="username" class="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Username</label>
                    <input
                        id="username"
                        v-model="username"
                        type="text"
                        class="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                        placeholder="Enter your username"
                        required
                    />
                </div>
                
                <!-- Password field -->
                <div class="mb-6">
                    <label for="password" class="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Password</label>
                    <div class="relative">
                        <input
                            id="password"
                            v-model="password"
                            :type="showPassword ? 'text' : 'password'"
                            class="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                            placeholder="Enter your password"
                            required
                        />
                        <button 
                            type="button" 
                            @click="showPassword = !showPassword"
                            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                        >
                            {{ showPassword ? 'Hide' : 'Show' }}
                        </button>
                    </div>
                </div>
                
                <!-- Remember me checkbox -->
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center">
                        <input
                            id="remember"
                            type="checkbox"
                            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label for="remember" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Remember me
                        </label>
                    </div>
                    <a href="#" class="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">Forgot password?</a>
                </div>
                
                <!-- Submit button -->
                <button
                    type="submit"
                    class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    :disabled="isLoading"
                >
                    <span v-if="isLoading" class="inline-block animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                    <span>{{ isLoading ? 'Signing in...' : 'Sign in' }}</span>
                </button>
            </form>
            
            <!-- Links -->
            <div class="text-center mt-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account? 
                    <a href="#" class="text-indigo-600 dark:text-indigo-400 hover:underline">Sign up</a>
                </p>
            </div>
            
            <!-- Back to home -->
            <div class="text-center mt-8">
                <NuxtLink to="/" class="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    &larr; Back to home
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Form element focus styles */
input:focus, button:focus {
    outline: none;
}

/* Transition effects */
button, a {
    transition: all 0.2s ease-in-out;
}
</style>