import type { ActivityItem } from "@/types";

export const recentActivity: ActivityItem[] = [
  {
    id: "act_001",
    title: "New customer joined",
    description: "NovaTech created a workspace and invited 4 team members.",
    timestamp: "2026-05-14T15:20:00.000Z",
    iconName: "UserPlus",
  },
  {
    id: "act_002",
    title: "Invoice paid",
    description: "CloudPeak paid INV-2026-005 for $1,200.",
    timestamp: "2026-05-14T13:45:00.000Z",
    iconName: "ReceiptText",
  },
  {
    id: "act_003",
    title: "Plan upgraded",
    description: "MarketFlow moved from Starter to Professional.",
    timestamp: "2026-05-13T17:30:00.000Z",
    iconName: "TrendingUp",
  },
  {
    id: "act_004",
    title: "Report generated",
    description: "The weekly acquisition summary was generated successfully.",
    timestamp: "2026-05-13T09:15:00.000Z",
    iconName: "FileBarChart",
  },
];
