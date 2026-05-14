import type { NotificationItem } from "@/types";

export const notifications: NotificationItem[] = [
  {
    id: "ntf_001",
    title: "New customer joined",
    description: "Olivia Hart from NovaTech started a Professional plan.",
    time: "10 minutes ago",
    unread: true,
    type: "customer",
  },
  {
    id: "ntf_002",
    title: "Payment received",
    description: "CloudPeak paid invoice INV-2026-005.",
    time: "1 hour ago",
    unread: true,
    type: "payment",
  },
  {
    id: "ntf_003",
    title: "Monthly report is ready",
    description: "Your May performance report is available for review.",
    time: "3 hours ago",
    unread: false,
    type: "report",
  },
  {
    id: "ntf_004",
    title: "Subscription renewal reminder",
    description: "Your Professional plan renews on June 15, 2026.",
    time: "Yesterday",
    unread: false,
    type: "system",
  },
];
