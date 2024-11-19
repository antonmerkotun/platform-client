<template>
  <div class="max-w-2xl mx-auto p-4">
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-6">Travel Adventure</h1>
    
    <div class="relative">
      <input
        v-model="query"
        type="text"
        placeholder="Search for a place..."
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        @click="searchPlace"
        class="absolute right-2 top-2 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
      >
        Search
      </button>
    </div>

    <div v-if="isLoading" class="mt-4 text-center text-gray-600">Searching...</div>

    <div v-if="places.length > 0" class="mt-6">
      <h2 class="text-2xl font-semibold mb-4">Search Results:</h2>
      <ul class="space-y-4">
        <li
          v-for="place in places"
          :key="place.id"
          class="p-4 border border-gray-200 rounded-md shadow-sm"
        >
          <h3 class="text-xl font-bold">{{ place.name }}</h3>
          <p>{{ place.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRequestHandler } from '@/composables/useRequestHandler';

const { requestHandler, isLoading } = useRequestHandler();

const query = ref('')
const places = ref([])

const searchPlace = async () => {
  await requestHandler(async () => {
    const response = await fetch(`https://your-backend-api.com/search?q=${query.value}`)
    const data = await response.json()
    places.value = data.places
  });
}
</script>
