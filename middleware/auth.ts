export default defineNuxtRouteMiddleware(() => {
  try {
    // Skip during static generation
    if (import.meta.server) return;

    const userIsLoggedIn = () => false;

    if (!userIsLoggedIn()) {
      return navigateTo({ path: "/login" });
    }
  } catch (error) {
    console.error("Middleware error:", error);
    // Provide a fallback behavior
  }
});

// const userIsLoggedIn = () => false;

// onMounted(() => {
//   if (!userIsLoggedIn()) {
//     navigateTo("/login");
//   }
// });
