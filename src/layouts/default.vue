<template>
  <main class="mb-24 flex flex-col">
    <div class="mx-auto w-full px-4 sm:px-6 lg:px-8">
      <Header />

      <div class="flex pt-24 lg:pt-32">
        <div
          class="mx-auto w-full max-w-md px-6 lg:max-w-screen-lg xl:max-w-screen-xl"
        >
          <RouterView />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Header from '@/components/layouts/Header/Header.vue';
</script>
