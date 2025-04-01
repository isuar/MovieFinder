<script setup>
const user = useUser();

</script>

<template>
    <div>
        <nav style="display:flex; gap: 10px; padding: 10px; background-color: #eee;">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/movies">Movies</NuxtLink>
            <NuxtLink to="https://vueschool.io">Vue website</NuxtLink>
            <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
            <a href="#" v-else @click.prevent="user.isLoggedIn = false">Logout</a>
        </nav>
        <slot>

        </slot>
    </div>
</template>