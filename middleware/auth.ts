export default defineNuxtRouteMiddleware(() => {
  const userIsLoggedIn = () => false;
  if (!userIsLoggedIn()) {
    return navigateTo({ path: "/login" });
  }
});
