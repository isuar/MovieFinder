export default defineNuxtRouteMiddleware(() => {
  const userIsLoggedIn = () => false;
  if (!userIsLoggedIn()) {
    return navigateTo("/login");
  }
});

// const userIsLoggedIn = () => false;

// onMounted(() => {
//   if (!userIsLoggedIn()) {
//     navigateTo("/login");
//   }
// });
