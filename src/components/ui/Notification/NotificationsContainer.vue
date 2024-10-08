<template>
  <Teleport v-if="state.notifications.length" to="body">
    <div class="z-toast fixed bottom-8 left-8 flex flex-col space-y-4">
      <Notification
        v-for="notification in state.notifications"
        :key="notification.id"
        :notification="notification"
        class="!min-w-fit"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { Notification } from '@/components/ui/Notification';
import { useNotifications } from '@/composables/useNotifications';

const { state } = useNotifications();
</script>
