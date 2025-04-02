export default defineNuxtRouteMiddleware((to, from) => {
  // Skip during static generation/build
  if (import.meta.server) return;

  console.log(to, from, "from the name middleware");
});
