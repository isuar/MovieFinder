export default defineNuxtRouteMiddleware((to) => {
  // Always skip this middleware during static generation/SSR
  if (import.meta.server) return;

  // Also skip if we're in a prerendering context
  try {
    const nuxtApp = useNuxtApp();
    if (nuxtApp?.payload?.prerender === true) return;

    const userIsLoggedIn = () => false;

    if (!userIsLoggedIn()) {
      return navigateTo({ path: "/login" });
    }
  } catch (error) {
    console.error("Middleware error:", error);
    // Don't redirect in case of error during static generation
    return;
  }
});

// const userIsLoggedIn = () => false;

// onMounted(() => {
//   if (!userIsLoggedIn()) {
//     navigateTo("/login");
//   }
// });
