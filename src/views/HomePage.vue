<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
    <!-- Header -->
    <header class="flex justify-between items-center p-6 bg-white/10 backdrop-blur-md">
      <h1 class="text-4xl font-bold text-white">Slam Library</h1>
      <div class="flex gap-4">
        <!-- Si l'utilisateur n'est pas connecté -->
        <template v-if="!authStore.isAuthenticated">
          <router-link 
            to="/login" 
            class="px-6 py-2 bg-white/20 hover:bg-white/30 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Login
          </router-link>
          <router-link 
            to="/register" 
            class="px-6 py-2 bg-white text-purple-600 hover:bg-purple-50 font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Register
          </router-link>
        </template>
        
        <!-- Si l'utilisateur est connecté -->
        <template v-else>
          <span class="px-4 py-2 text-white/90">Welcome, {{ authStore.user?.name }}</span>
          <router-link 
            to="/books" 
            class="px-6 py-2 bg-white/20 hover:bg-white/30 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Books
          </router-link>
          <button 
            @click="handleLogout"
            class="px-6 py-2 bg-red-500/80 hover:bg-red-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Logout
          </button>
        </template>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-6 py-16">
      <div class="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-12 shadow-2xl">
        <h2 class="text-3xl font-bold text-white mb-6">Welcome to Slam Library</h2>
        <div class="text-white/90 space-y-4 leading-relaxed">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  authStore.logout();
  router.push('/');
};
</script>

