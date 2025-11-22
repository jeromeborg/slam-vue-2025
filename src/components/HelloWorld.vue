<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl max-w-2xl">
    <h1 class="text-5xl font-bold text-white mb-8">{{ msg }}</h1>

    <div class="mb-6">
      <button 
        type="button" 
        @click="count++" 
        class="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        count is {{ count }}
      </button>
      <p class="mt-4 text-white/80">
        Edit
        <code class="bg-white/20 px-2 py-1 rounded text-sm">components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p class="text-white/70 mb-3 font-bold">
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" class="text-blue-200 hover:text-blue-100 underline">
        create-vue
      </a>, the official Vue + Vite starter
    </p>
    <p class="text-white/70 mb-3 text-base">
      Learn more about IDE Support for Vue in the
      <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
        class="text-blue-200 hover:text-blue-100 underline"
      >Vue Docs Scaling up Guide</a>.
    </p>
    <p class="text-white/50 text-sm mt-6">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

