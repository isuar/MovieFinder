// User.ts
import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
  state: () => ({
    isLoggedIn: false
  }),
  getters: {},
  actions: {
    login() {
      // Simulate a login action
      this.isLoggedIn = true
      
      // Use navigateTo instead of direct router access
      navigateTo('/')
    }
  }
})
