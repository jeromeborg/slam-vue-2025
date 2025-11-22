<script setup>

import api from "../http/api";
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const form = ref({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const register = async () => {
    try {
        const response = await api.post("/register", 
            form.value
        );
        
        // Stocker le token et les données utilisateur
        authStore.setAuth(response.data.access_token, response.data.user);
        
        // Rediriger vers la liste de livres
        router.push('/books');
    } catch (error) {
        console.error(error);
    }
};

</script>


<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center p-6">
    <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl w-full max-w-md">
      <h1 class="text-3xl font-bold text-white mb-8 text-center">Register</h1>
      
      <form class="space-y-6">
        <div>
          <label for="name" class="block text-white font-medium mb-2">Full Name</label>
          <input 
            type="text" 
            id="name" 
            class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            placeholder="John Doe"
            v-model="form.name"
          />
        </div>
        
        <div>
          <label for="email" class="block text-white font-medium mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            placeholder="your@email.com"
            v-model="form.email"
          />
        </div>
        
        <div>
          <label for="password" class="block text-white font-medium mb-2">Password</label>
          <input 
            type="password" 
            id="password" 
            class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            placeholder="••••••••"
            v-model="form.password"
          />
        </div>
        
        <div>
          <label for="password_confirmation" class="block text-white font-medium mb-2">Confirm Password</label>
          <input 
            type="password" 
            id="password_confirmation" 
            class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            placeholder="••••••••"
            v-model="form.password_confirmation"
          />
        </div>
        
        <button 
          type="submit" 
          class="w-full py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
          @click.prevent="register"
        >
          Create Account
        </button>
      </form>
      
      <p class="text-white/70 text-center mt-6">
        Already have an account? 
        <router-link to="/login" class="text-white font-semibold hover:underline">Login</router-link>
      </p>
      
      <router-link to="/" class="block text-white/70 text-center mt-4 hover:text-white transition-colors">
        ← Back to Home
      </router-link>
    </div>
  </div>
</template>


