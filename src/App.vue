<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
    <div class="text-center">
      <div class="flex justify-center gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" class="h-24 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all duration-300" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="h-24 hover:drop-shadow-[0_0_2em_#42b883aa] transition-all duration-300" alt="Vue logo" />
        </a>
      </div>
      <HelloWorld msg="Vite + Vue + Tailwind CSS" />
    </div>
  </div>
</template>

