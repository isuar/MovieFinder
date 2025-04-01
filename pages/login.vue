<script setup>

const user = useUser()

definePageMeta({
    layout: "plain",
});


</script>

<template>
    <form @submit.prevent="user.login"
        style="display: flex; flex-direction: column; gap: 10px; padding: 10px; background-color: #eee;">
        <h1>Login</h1>
        <label>
            Username:
            <input type="text" name="username" required />
        </label>
        <label>
            Password:
            <input type="password" name="password" required />
        </label>
        <button>Login</button>
    </form>
</template>