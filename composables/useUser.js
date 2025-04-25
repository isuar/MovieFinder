// Simple composable for user state without using Pinia
export default function() {
  // State
  const isLoggedIn = ref(false);
  const user = ref(null);
  
  // Actions
  function login() {
    isLoggedIn.value = true;
    user.value = {
      id: 1,
      username: 'demo_user',
      name: 'Demo User',
      email: 'demo@example.com',
      avatar: '/placeholder-avatar.svg',
    };
    
    // Save to local storage
    if (process.client) {
      localStorage.setItem('isLoggedIn', 'true');
    }
  }

  function logout() {
    isLoggedIn.value = false;
    user.value = null;
    
    // Clear from local storage
    if (process.client) {
      localStorage.removeItem('isLoggedIn');
    }
  }

  // Initialize on client-side
  onMounted(() => {
    if (process.client) {
      const storedLoginStatus = localStorage.getItem('isLoggedIn');
      if (storedLoginStatus === 'true') {
        login();
      }
    }
  });

  return {
    isLoggedIn,
    user,
    login,
    logout
  };
}
