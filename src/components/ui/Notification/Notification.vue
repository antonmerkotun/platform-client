<template>
  <Transition name="fade">
    <div
      v-if="showRef"
      class="min-w-70 max-w-150 flex w-fit flex-row justify-between rounded-xl bg-slate-400 p-6"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div class="flex self-center">
        <div class="mr-4">
          {{ icon }}
        </div>

        <div>
          <h3 class="body-m-medium text-white">{{ notification.title }}</h3>

          <p
            v-if="notification.description"
            class="body-m-regular text-base-300"
          >
            {{ notification.description }}
          </p>
        </div>
      </div>

      <div class="ml-4 flex items-center space-x-4">
        <button v-if="notification.action" @click="handleClick">
          {{ notification.action.text }}
        </button>

        <div
          v-if="notification.closable"
          color="text-base-300"
          type="dark"
          icon="close"
          @click="destroy"
        >
          close
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import type { INotification } from '@/components/ui/Notification';

export interface IProps {
  notification: INotification;
}

export interface IEmits {
  (event: 'destroy:notification'): void;
}

const props = defineProps<IProps>();

const emit = defineEmits<IEmits>();

let timerId: number | null = null;
const duration = 5000;
const showRef = ref(false);

const iconNames: Record<INotification['type'], string> = {
  error: 'error-filled',
  info: 'info-filled',
  success: 'success-filled',
  warning: 'warning-filled',
};

const icon = computed(() => {
  return iconNames[props.notification.type];
});

function handleClick() {
  if (props.notification.action) {
    props.notification.action.handler();
  }

  destroy();
}

function handleMouseEnter(event: MouseEvent) {
  if (event.currentTarget !== event.target) return;
  if (timerId !== null) {
    window.clearTimeout(timerId);
    timerId = null;
  }
}

function handleMouseLeave(event: MouseEvent) {
  if (event.currentTarget !== event.target) return;
  if (!props.notification.persistent) {
    setHideTimeout();
  }
}

function setHideTimeout() {
  timerId = window.setTimeout(destroy, duration);
}

function destroy() {
  showRef.value = false;

  if (timerId) {
    clearTimeout(timerId);
  }

  setTimeout(() => {
    emit('destroy:notification');
  }, 500);
}

onMounted(() => {
  if (!props.notification.persistent) {
    setHideTimeout();
  }
  showRef.value = true;
});
</script>
