interface NotificationAction {
  text: string;
  handler: () => void;
}

export interface Notification {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  description?: string;
  closable?: boolean;
  action?: NotificationAction;
}
