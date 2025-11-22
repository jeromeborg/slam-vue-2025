<script setup>
import { useRoute } from "vue-router";
import api from "../http/api";
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

let isCharged = ref(false);
let books = ref([]);

const loadBooks = async () => {
  try {
    // L'intercepteur ajoute automatiquement le header Authorization
    const response = await api.get("/books");

    console.log(response.data);
    books.value = response.data;
    isCharged.value = true;
  } catch (error) {
    console.error(error);
  }
};

loadBooks();
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-teal-500 to-cyan-600">
    <!-- Header -->
    <header class="bg-white/10 backdrop-blur-md p-6">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-bold text-white">Slam Library</h1>
        <router-link
          to="/"
          class="text-white/80 hover:text-white transition-colors"
        >
          ← Back to Home
        </router-link>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-6 py-12">
      <h2 class="text-4xl font-bold text-white mb-8">Books Collection</h2>

      <div
        v-if="isCharged"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <!-- Book Card -->
        <div
          v-for="book in books"
          :key="book.id"
          class="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          <router-link :to="`/books/${book.id}`">
            <h3 class="text-2xl font-bold text-white mb-3">{{ book.title }}</h3>
          </router-link>
          <router-link :to="`/authors/${book.author.id}`">
            <p class="text-white/80 mb-2">
              <span class="font-semibold">Author:</span> {{ book.author.name }}
            </p>
          </router-link>
          <router-link :to="`/books/${book.id}`">
            <p class="text-white/70 line-clamp-3">{{ book.description }}</p>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>
