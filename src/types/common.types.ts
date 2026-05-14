export type TrendDirection = "up" | "down";

export type StatusTone = "success" | "warning" | "danger" | "neutral" | "info";

export type TimeRange = "7d" | "30d" | "90d";

export interface SelectOption {
  label: string;
  value: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  iconName: string;
  isExternal?: boolean;
}
