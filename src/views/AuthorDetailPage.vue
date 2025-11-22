<script setup>
import { useRoute } from "vue-router";
import api from "../http/api";
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const route = useRoute();
const authorId = route.params.id;

let isCharged = ref(false);
let author = ref([]);

const loadAuthor = async () => {
  try {
    // L'intercepteur ajoute automatiquement le header Authorization
    const response = await api.get("/authors/" + authorId);

    console.log(response.data);
    author.value = response.data;
    isCharged.value = true;
  } catch (error) {
    console.error(error);
  }
};

loadAuthor();
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600">
    <!-- Header -->
    <header class="bg-white/10 backdrop-blur-md p-6">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-bold text-white">Slam Library</h1>
        <router-link
          to="/books"
          class="text-white/80 hover:text-white transition-colors"
        >
          ← Back to Books
        </router-link>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-6 py-12">
      <div
        v-if="isCharged"
        class="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-12 shadow-2xl"
      >
        <h2 class="text-5xl font-bold text-white mb-4">{{ author.name }}</h2>

        <div class="border-t border-white/30 pt-8">
          <h3 class="text-2xl font-bold text-white mb-4">Biography</h3>
          <div class="text-white/90 space-y-4 leading-relaxed text-lg">
            <p>{{ author.biography }}</p>
          </div>
        </div>

        <div v-for="book in author.books" class="">
          <router-link :to="`/books/${book.id}`">
            <p class="text-white/90 text-xl">{{ book.title }}</p>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>
