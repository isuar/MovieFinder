<script>
const router = useRouter()
const message = computed(() => {
    return `I'm on team: ${router.params.teamSlug} and my user: ${router.params.userId}`
})

</script>

<template>
    <p>
        {{ message }}
    </p>

</template>