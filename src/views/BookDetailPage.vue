<script setup>
import { useRoute } from 'vue-router'
import api from "../http/api";
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const route = useRoute()
const bookId = route.params.id

let isCharged = ref(false);
let book = ref([]);

const loadBook = async () => {
    try {
        // L'intercepteur ajoute automatiquement le header Authorization
        const response = await api.get("/books/" + bookId);
        
        console.log(response.data);
        book.value = response.data;
        isCharged.value = true;
    } catch (error) {
        console.error(error);
    }
};

loadBook();
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600">
    <!-- Header -->
    <header class="bg-white/10 backdrop-blur-md p-6">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-bold text-white">Slam Library</h1>
        <router-link to="/books" class="text-white/80 hover:text-white transition-colors">
          ← Back to Books
        </router-link>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-6 py-12">
      <div v-if="isCharged" class="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-12 shadow-2xl">
        <h2 class="text-5xl font-bold text-white mb-4">{{ book.title }}</h2>
        
        <div class="mb-8 space-y-2">
          <router-link :to="`/authors/${book.author.id}`">
          <p class="text-white/90 text-xl"><span class="font-semibold">Author:</span> {{ book.author.name }}</p>
          </router-link>
          <p class="text-white/90 text-xl"><span class="font-semibold">ISBN:</span> {{ book.isbn }}</p>
          <p class="text-white/90 text-xl"><span class="font-semibold">Price:</span> {{ book.price }}</p>
        </div>

        <div class="border-t border-white/30 pt-8">
          <h3 class="text-2xl font-bold text-white mb-4">Description</h3>
          <div class="text-white/90 space-y-4 leading-relaxed text-lg">
            <p>{{ book.description }}</p>
          </div>
        </div>

        <div class="mt-8 flex gap-4">
          <button class="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105">
            Borrow Book
          </button>
          <button class="px-8 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
            Add to Favorites
          </button>
        </div>
      </div>
    </main>
  </div>
</template>


