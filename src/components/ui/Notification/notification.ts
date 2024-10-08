interface INotificationAction {
  text: string;
  handler: () => void;
}

export interface INotification {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  description?: string;
  closable?: boolean;
  action?: INotificationAction;
  persistent?: boolean;
}
