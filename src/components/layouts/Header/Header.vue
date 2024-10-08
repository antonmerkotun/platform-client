<template>
  <header
    class="fixed left-0 top-0 z-50 w-full border-b border-gray-300 bg-gray-50 bg-opacity-40 shadow-md backdrop-blur-md"
  >
    <div
      class="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4"
    >
      <router-link
        :to="Urls.Main"
        class="text-2xl font-bold text-gray-800 transition duration-300 hover:text-gray-500"
      >
        Travel Adventure
      </router-link>

      <div v-if="!isSignInPage" class="relative">
        <img
          :src="
            accountStore.account?.picture ||
            'src/assets/icons/account-avatar.svg'
          "
          alt="avatar"
          @click="toggleMenu"
          ref="profileImage"
          class="h-8 w-8 cursor-pointer rounded"
        />

        <div
          v-if="showMenu"
          @mouseleave="toggleMenu"
          class="absolute right-0 mt-2 w-max overflow-hidden rounded-lg bg-white shadow-lg"
        >
          <button
            v-if="accountStore.account"
            @click="signOut"
            class="flex w-full items-center gap-4 p-4 text-red-600 hover:bg-gray-100"
          >
            <img
              src="@/assets/icons/logout.svg"
              width="17"
              height="16"
              alt="logo-google"
            />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import { Urls } from '@/constants/urls';
import router from '@/router/router';
import { useAccountStore } from '@/stores';

const accountStore = useAccountStore();
const route = useRoute();

const isSignInPage = computed(() => route.name === 'sign-in');
const showMenu = ref(false);
const profileImage = ref<HTMLElement | null>();

function toggleMenu() {
  showMenu.value = !showMenu.value;
}

async function signOut() {
  await accountStore.signOut();
  await router.push('/sign-in');
}
</script>

<style scoped>
header {
  background-color: rgba(249, 250, 251, 0.3);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
}
</style>
