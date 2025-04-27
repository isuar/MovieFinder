// Custom router configuration
export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  
  // Add any router customization here
  // For example, global navigation guards
  router.beforeEach((to, from, next) => {
    // Logic here
    next();
  });

  // You can also add global after hooks
  router.afterEach((to, from) => {
    // Logic here
  });
})
