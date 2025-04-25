import { defineStore } from 'pinia';

export const useUser = defineStore('user', () => {
  // State
  const isLoggedIn = ref(false);
  const user = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // Actions
  function login() {
    loading.value = true;
    error.value = null;
    
    try {
      // Simulate API login - in a real app, this would be an API call
      setTimeout(() => {
        isLoggedIn.value = true;
        user.value = {
          id: 1,
          username: 'demo_user',
          name: 'Demo User',
          email: 'demo@example.com',
          avatar: '/placeholder-avatar.svg',
        };
        loading.value = false;
        
        // Save to local storage for persistence
        if (process.client) {
          localStorage.setItem('user', JSON.stringify(user.value));
          localStorage.setItem('isLoggedIn', 'true');
        }
      }, 800);
    } catch (err) {
      console.error('Login error:', err);
      error.value = 'Failed to log in. Please try again.';
      loading.value = false;
    }
  }

  function logout() {
    isLoggedIn.value = false;
    user.value = null;
    
    // Clear from local storage
    if (process.client) {
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
    }
  }

  // Load user data from storage on init (client-side only)
  function init() {
    if (process.client) {
      const storedUser = localStorage.getItem('user');
      const storedLoginStatus = localStorage.getItem('isLoggedIn');
      
      if (storedLoginStatus === 'true' && storedUser) {
        try {
          user.value = JSON.parse(storedUser);
          isLoggedIn.value = true;
        } catch (e) {
          console.error('Failed to parse stored user data:', e);
          logout(); // Clean up if there's an issue
        }
      }
    }
  }

  // Call init right away for hydration
  init();

  return {
    // State
    isLoggedIn,
    user,
    loading,
    error,
    
    // Actions
    login,
    logout,
    init,
  };
});

// Make the store accessible via useUser() composable
export default function() {
  return useUser();
}
