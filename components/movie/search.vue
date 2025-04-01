<script setup>
const query = ref("batman");
const movies = ref([]);
async function search() {
    const { Search } = await $fetch(`http://www.omdbapi.com/?apikey=8e3f600b&s=${query.value}`);
    movies.value = Search;
}

search();
</script>

<template>
    <div>
        <form @submit.prevent="search">
            <input type="text" v-model="query" />
            <button>Search</button>
        </form>
        <ul style="display: flex; flex-wrap: wrap;">
            <li v-for="movie in movies" :key="movie.imdbID" style="width: 200px; margin: 10px;">
                <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
                    <img :src="movie.Poster" alt="movie.Title" style="width: 100%;" />
                    <h3>{{ movie.Title }}</h3>
                    <p>{{ movie.Year }}</p>
                </NuxtLink>

            </li>

        </ul>
    </div>
</template>

<style scoped></style>
