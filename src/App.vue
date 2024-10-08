<template>
  <div class="app">
    <RouterView />
    <NotificationsContainer />
  </div>
</template>

<script setup lang="ts">
import { NotificationsContainer } from '@/components/ui/Notification';
</script>
