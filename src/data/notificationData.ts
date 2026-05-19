import type { NotificationItem } from "@/types";

export const notifications: NotificationItem[] = [
  {
    id: "ntf_001",
    title: "New customer signed up",
    description: "Olivia Hart from NovaTech started a Professional plan trial.",
    time: "10 minutes ago",
    unread: true,
    type: "customer",
  },
  {
    id: "ntf_002",
    title: "Payment received",
    description: "CloudPeak cleared invoice INV-2026-005 — $1,200 confirmed.",
    time: "1 hour ago",
    unread: true,
    type: "payment",
  },
  {
    id: "ntf_003",
    title: "May performance report ready",
    description:
      "Your monthly summary is available. Revenue is up 12.5% vs April.",
    time: "3 hours ago",
    unread: false,
    type: "report",
  },
  {
    id: "ntf_004",
    title: "Plan renewal in 7 days",
    description:
      "Your Professional plan renews on June 15, 2026. No action needed.",
    time: "Yesterday",
    unread: false,
    type: "system",
  },
  {
    id: "ntf_005",
    title: "Conversion rate alert",
    description:
      "Trial-to-paid conversion dropped 1.2% this week. Review the funnel.",
    time: "2 days ago",
    unread: false,
    type: "report",
  },
];
