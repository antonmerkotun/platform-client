<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="mb-4 text-3xl font-bold">Sign In</h1>
    <div class="w-full max-w-sm">
      <button
        v-if="!accountStore.account"
        @click="signIn"
        class="flex w-full items-center gap-2 rounded-lg border border-gray-300 p-4 shadow-sm transition duration-300 ease-in-out hover:bg-gray-100"
      >
        <img
          src="@/assets/icons/logos/google.svg"
          width="17"
          height="16"
          alt="logo-google"
        />
        <span>Sign in with Google</span>
      </button>
      <p v-else class="mt-4 text-green-600">You are already signed in!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useNotifications } from '@/composables/useNotifications';
// import { useRequestHandler } from '@/composables/useRequestHandler';
import { useAccountStore } from '@/stores'

const accountStore = useAccountStore()

// const { requestHandler, isLoading } = useRequestHandler();
// const { createSuccess } = useNotifications();

async function signIn() {
  //   await requestHandler(async () => {
  //     const redirectUrl = await accountStore.signIn({
  //       clientRedirectUrl: window.location.origin,
  //     });
  //     createSuccess({
  //       title: 'New admin has been added',
  //     });
  //     window.location.href = redirectUrl;
  //   });

  const redirectUrl = await accountStore.signIn({
    clientRedirectUrl: window.location.origin,
  })
  
  window.location.href = redirectUrl
}
</script>
