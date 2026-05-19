import { create } from "zustand";
import { notifications as notificationSeed } from "@/data";
import type { NotificationItem } from "@/types";

interface NotificationState {
  notifications: NotificationItem[];
  markAllAsRead: () => void;
  unreadCount: number;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: notificationSeed,
  unreadCount: notificationSeed.filter((notification) => notification.unread)
    .length,

  markAllAsRead: () => {
    set((state) => {
      const notifications = state.notifications.map((notification) => ({
        ...notification,
        unread: false,
      }));

      return {
        notifications,
        unreadCount: 0,
      };
    });
  },
}));
