import {
  Bell,
  CreditCard,
  FileBarChart,
  Settings,
  UserPlus,
} from "lucide-react";
import { Badge, Button, Dropdown } from "@/components/common";
import { useNotificationStore, useToastStore } from "@/store";
import type { NotificationItem } from "@/types";

const notificationIcons = {
  customer: UserPlus,
  payment: CreditCard,
  report: FileBarChart,
  system: Settings,
};

interface NotificationRowProps {
  notification: NotificationItem;
}

function NotificationRow({ notification }: NotificationRowProps) {
  const Icon = notificationIcons[notification.type];

  return (
    <li className="rounded-md px-2 py-2 transition-colors hover:bg-secondary">
      <div className="flex gap-3">
        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="size-4" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm font-semibold text-foreground">
              {notification.title}
            </p>
            {notification.unread ? (
              <span className="mt-1 size-2 shrink-0 rounded-full bg-destructive" />
            ) : null}
          </div>
          <p className="mt-1 text-caption text-muted-foreground">
            {notification.description}
          </p>
          <p className="mt-1 text-caption font-medium text-muted-foreground">
            {notification.time}
          </p>
        </div>
      </div>
    </li>
  );
}

export function NotificationDropdown() {
  const { markAllAsRead, notifications, unreadCount } = useNotificationStore();
  const showToast = useToastStore((state) => state.showToast);

  const handleMarkAllAsRead = () => {
    markAllAsRead();
    showToast({
      description: "All recent notifications are now marked as read.",
      title: "Notifications updated",
      variant: "success",
    });
  };

  return (
    <Dropdown
      align="end"
      className="relative"
      trigger={
        <span className="relative inline-flex size-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
          <Bell className="size-5" aria-hidden="true" />
          {unreadCount > 0 ? (
            <span className="absolute right-1.5 top-1.5 flex min-w-5 items-center justify-center rounded-full bg-destructive px-1.5 py-0.5 text-[0.625rem] font-bold leading-none text-destructive-foreground">
              {unreadCount}
            </span>
          ) : null}
        </span>
      }
      triggerLabel="View notifications"
    >
      <div className="w-[min(22rem,calc(100vw-2rem))]">
        <div className="flex items-start justify-between gap-3 px-2 pb-3 pt-1">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Notifications
            </p>
            <p className="text-caption text-muted-foreground">
              Recent workspace updates
            </p>
          </div>
          <Badge variant={unreadCount > 0 ? "danger" : "muted"}>
            {unreadCount} unread
          </Badge>
        </div>

        <ul className="max-h-80 space-y-1 overflow-y-auto border-y border-border py-2">
          {notifications.map((notification) => (
            <NotificationRow
              key={notification.id}
              notification={notification}
            />
          ))}
        </ul>

        <div className="flex justify-end px-2 pt-3">
          <Button
            disabled={unreadCount === 0}
            onClick={handleMarkAllAsRead}
            size="sm"
            variant="outline"
          >
            Mark all as read
          </Button>
        </div>
      </div>
    </Dropdown>
  );
}
