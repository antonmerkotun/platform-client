import { uniqueId } from 'lodash-es';
import { reactive } from 'vue';

import type { Notification } from '@/types/notification';

type Props = Omit<Notification, 'id' | 'type'>;

const state = reactive<{ notifications: Notification[] }>({
  notifications: [],
});

export const useNotifications = () => {
  function create(notification: Omit<Notification, 'id'>) {
    state.notifications.push({
      id: uniqueId('notification_'),
      closable: true,
      ...notification,
    });
  }

  function createSuccess(notification: Props) {
    create({
      type: 'success',
      ...notification,
    });
  }

  function createWarning(notification: Props) {
    create({
      type: 'warning',
      ...notification,
    });
  }

  function createInfo(notification: Props) {
    create({
      type: 'info',
      ...notification,
    });
  }

  function createError(notification: Props) {
    create({
      type: 'error',

      ...notification,
    });
  }

  function destroy(id: string) {
    state.notifications = state.notifications.filter((n) => n.id !== id);
  }

  function destroyAll() {
    state.notifications = [];
  }

  return {
    state,

    createSuccess,
    createWarning,
    createInfo,
    createError,
    destroy,
    destroyAll,
  };
};
