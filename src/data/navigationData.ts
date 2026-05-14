import type { NavigationItem } from "@/types";

export const publicNavigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    iconName: "Home",
  },
  {
    label: "Features",
    href: "/features",
    iconName: "Sparkles",
  },
  {
    label: "Pricing",
    href: "/pricing",
    iconName: "CreditCard",
  },
];

export const dashboardNavigationItems: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    iconName: "LayoutDashboard",
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    iconName: "ChartNoAxesCombined",
  },
  {
    label: "Billing",
    href: "/dashboard/billing",
    iconName: "ReceiptText",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    iconName: "Settings",
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    iconName: "UserRound",
  },
];
