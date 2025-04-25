<script setup>
// Plain layout with no navigation or footer
// Used for login, register, and other standalone pages

const darkMode = useDarkMode();
</script>

<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
        <!-- Dark mode toggle in the corner -->
        <div class="absolute top-4 right-4 z-10">
            <DarkModeToggle />
        </div>
        <slot></slot>
    </div>
</template>

<style scoped>
.min-h-screen {
    min-height: 100vh;
}
</style>