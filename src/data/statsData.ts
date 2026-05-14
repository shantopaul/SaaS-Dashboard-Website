import type { StatCardData } from "@/types";

export const dashboardStats: StatCardData[] = [
  {
    id: "total-revenue",
    title: "Total Revenue",
    value: "$84,230",
    change: "+12.5%",
    trend: "up",
    iconName: "DollarSign",
    description: "Compared with the previous month",
  },
  {
    id: "active-users",
    title: "Active Users",
    value: "12,480",
    change: "+8.2%",
    trend: "up",
    iconName: "UsersRound",
    description: "Across all active workspaces",
  },
  {
    id: "new-customers",
    title: "New Customers",
    value: "1,245",
    change: "+5.7%",
    trend: "up",
    iconName: "UserPlus",
    description: "Customers added this month",
  },
  {
    id: "conversion-rate",
    title: "Conversion Rate",
    value: "8.4%",
    change: "-1.2%",
    trend: "down",
    iconName: "MousePointerClick",
    description: "Trial to paid conversion",
  },
];
