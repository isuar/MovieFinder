// This plugin initializes the dark mode on app startup (client-side only)
export default defineNuxtPlugin(() => {
  const darkMode = useDarkMode();
  
  // Initialize dark mode settings
  darkMode.initDarkMode();
});
