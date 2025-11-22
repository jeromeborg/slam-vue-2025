import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // State
  const accessToken = ref(localStorage.getItem('access_token') || null)
  
  // Parse user safely from localStorage
  const getUserFromStorage = () => {
    const userStr = localStorage.getItem('user')
    if (!userStr || userStr === 'null') return null
    try {
      return JSON.parse(userStr)
    } catch {
      return null
    }
  }
  
  const user = ref(getUserFromStorage())


  // Getters
  const isAuthenticated = computed(() => !!accessToken.value)

  // Actions
  function setAuth(token, userData) {
    accessToken.value = token
    user.value = userData
    
    // Persist to localStorage
    localStorage.setItem('access_token', token)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  function logout() {
    accessToken.value = null
    user.value = null
    
    // Clear localStorage
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
  }

  return {
    accessToken,
    user,
    isAuthenticated,
    setAuth,
    logout
  }
})
