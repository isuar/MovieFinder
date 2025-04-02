export default defineNuxtRouteMiddleware(() => {
  // Skip this middleware during static generation/SSR
  if (import.meta.server) return;

  const userIsLoggedIn = () => false; // Your actual auth check logic

  if (!userIsLoggedIn()) {
    return navigateTo({ path: "/login" });
  }
});

// const userIsLoggedIn = () => false;

// onMounted(() => {
//   if (!userIsLoggedIn()) {
//     navigateTo("/login");
//   }
// });
