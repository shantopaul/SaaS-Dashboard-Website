import type { ActivityItem } from "@/types";

export const recentActivity: ActivityItem[] = [
  {
    id: "act_001",
    title: "New customer onboarded",
    description: "NovaTech created a workspace and invited 4 team members.",
    timestamp: "2026-05-14T15:20:00.000Z",
    iconName: "UserPlus",
  },
  {
    id: "act_002",
    title: "Invoice paid",
    description:
      "CloudPeak settled INV-2026-005 — $1,200 cleared via bank transfer.",
    timestamp: "2026-05-14T13:45:00.000Z",
    iconName: "ReceiptText",
  },
  {
    id: "act_003",
    title: "Plan upgraded",
    description:
      "MarketFlow moved from Starter to Professional — 25 seats now active.",
    timestamp: "2026-05-13T17:30:00.000Z",
    iconName: "TrendingUp",
  },
  {
    id: "act_004",
    title: "Weekly report generated",
    description:
      "The May customer acquisition summary is ready for your review.",
    timestamp: "2026-05-13T09:15:00.000Z",
    iconName: "FileBarChart",
  },
  {
    id: "act_005",
    title: "Security settings updated",
    description: "Two-factor authentication was enabled by Shanto Paul.",
    timestamp: "2026-05-12T11:00:00.000Z",
    iconName: "ShieldCheck",
  },
  {
    id: "act_006",
    title: "Subscription renewed",
    description:
      "BrightLabs Professional plan renewed successfully for another month.",
    timestamp: "2026-05-12T08:30:00.000Z",
    iconName: "RefreshCcw",
  },
];
