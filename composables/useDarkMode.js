import { defineStore } from 'pinia';

export const useDarkMode = defineStore('darkMode', () => {
  // State
  const isDark = ref(false);
  
  // Actions
  function toggleDarkMode() {
    isDark.value = !isDark.value;
    updateDocumentClass();
    savePreference();
  }
  
  function setDarkMode(value) {
    isDark.value = value;
    updateDocumentClass();
    savePreference();
  }
  
  // Apply dark mode to document element
  function updateDocumentClass() {
    if (process.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
  
  // Save user preference to localStorage
  function savePreference() {
    if (process.client) {
      localStorage.setItem('darkMode', isDark.value ? 'true' : 'false');
    }
  }
  
  // Load user preference or fallback to system preference
  function initDarkMode() {
    if (process.client) {
      // First check if user has saved preference
      const savedPreference = localStorage.getItem('darkMode');
      
      if (savedPreference !== null) {
        // Use saved preference
        isDark.value = savedPreference === 'true';
      } else {
        // Otherwise use system preference
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      
      // Apply immediately
      updateDocumentClass();
      
      // Listen for system preference changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        // Only update if user has no saved preference
        if (localStorage.getItem('darkMode') === null) {
          isDark.value = event.matches;
          updateDocumentClass();
        }
      });
    }
  }
  
  return {
    isDark,
    toggleDarkMode,
    setDarkMode,
    initDarkMode
  };
});

// Make the store accessible via useDarkMode() composable
export default function() {
  return useDarkMode();
}
