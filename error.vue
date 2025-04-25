<script setup>
const props = defineProps({
    error: Object
});

const statusCode = computed(() => props.error.statusCode || 500);
const statusMessage = computed(() => props.error.statusMessage || 'An error occurred');

// Clear the error and return to homepage
function handleError() {
    clearError({ redirect: '/' });
}
</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 text-center">
        <div class="max-w-md w-full">
            <!-- Error icon -->
            <div class="mb-8">
                <div class="mx-auto h-24 w-24 text-red-500 dark:text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
            </div>

            <!-- Error information -->
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">{{ statusCode }}</h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">{{ statusMessage }}</p>
            
            <!-- Actions -->
            <div class="flex flex-col space-y-4">
                <button 
                    @click="handleError"
                    class="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                    Back to homepage
                </button>
                
                <a 
                    href="#" 
                    @click.prevent="() => window.location.reload()"
                    class="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                    Try again
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Fade in animation */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.min-h-screen {
    animation: fadeIn 0.5s ease-out;
}
</style>