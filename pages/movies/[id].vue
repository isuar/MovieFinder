<script setup>
const route = useRoute();


// throw new Error("Simulated server crash");

const { data, error } = await useFetch(`https://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
    {
        pick: ["Title", "Plot", "Year", "Error", "Poster"],
        key: `/movies/${route.params.id}`,
    }

);
if (error.value) {
    console.error("An error occurred while fetching data:", error.value);
    showError({ statusCode: 500, statusMessage: "Internal Server Error" });

}
if (data.value.Error === "Incorrect IMDb ID.") {
    showError({ statusCode: 404, statusMessage: "Page not found" });
}
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
            content: `${data.value.Title}, ${data.value.Year}`,
        },
    ],
});


</script>

<template>
    <div>
        <pre>
            {{ data }}
        </pre>
        <!-- <h1>
            {{ $route.params.id }}
        </h1> -->
    </div>
</template>