import { ref } from 'vue';

import { useNotifications } from '@/composables/useNotifications';

export const useRequestHandler = () => {
  const isLoading = ref(false);
  const notificationStore = useNotifications();

  const requestHandler = async (
    callback: () => Promise<void>,
    options: {
      disableErrorNotification?: boolean;
      onError?: (error: unknown) => Promise<unknown> | unknown;
      onFinally?: () => Promise<void> | void;
    } = {
      disableErrorNotification: false,
    },
  ) => {
    if (isLoading.value) return;

    isLoading.value = true;

    try {
      await callback();
    } catch (error) {
      options.onError && (await options.onError(error));
      if (!options.disableErrorNotification) {
        notificationStore.createError({
          title: getErrorMessage(error),
        });
      }
    } finally {
      options.onFinally && (await options.onFinally());

      isLoading.value = false;
    }
  };

  return {
    isLoading,
    requestHandler,
  };
};

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
}
