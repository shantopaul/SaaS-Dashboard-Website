import type {
  DeviceBreakdownDataPoint,
  FunnelStepData,
  RevenueDataPoint,
  SalesDataPoint,
  TrafficSourceDataPoint,
  UserGrowthDataPoint,
} from "@/types";

export const revenueData: RevenueDataPoint[] = [
  { month: "Jan", revenue: 42000, forecast: 40000 },
  { month: "Feb", revenue: 47500, forecast: 45500 },
  { month: "Mar", revenue: 51200, forecast: 50000 },
  { month: "Apr", revenue: 58600, forecast: 56000 },
  { month: "May", revenue: 64200, forecast: 62000 },
  { month: "Jun", revenue: 71800, forecast: 70000 },
  { month: "Jul", revenue: 84230, forecast: 81500 },
];

export const monthlySalesData: SalesDataPoint[] = [
  { month: "Jan", sales: 310 },
  { month: "Feb", sales: 356 },
  { month: "Mar", sales: 402 },
  { month: "Apr", sales: 438 },
  { month: "May", sales: 492 },
  { month: "Jun", sales: 518 },
  { month: "Jul", sales: 604 },
];

export const userGrowthData: UserGrowthDataPoint[] = [
  { month: "Jan", users: 7200 },
  { month: "Feb", users: 8150 },
  { month: "Mar", users: 9020 },
  { month: "Apr", users: 9875 },
  { month: "May", users: 10840 },
  { month: "Jun", users: 11620 },
  { month: "Jul", users: 12480 },
];

export const trafficSourceData: TrafficSourceDataPoint[] = [
  { source: "Organic Search", visitors: 42, fill: "hsl(var(--chart-revenue))" },
  { source: "Direct", visitors: 27, fill: "hsl(var(--chart-sales))" },
  { source: "Referral", visitors: 18, fill: "hsl(var(--chart-users))" },
  { source: "Social", visitors: 13, fill: "hsl(var(--chart-traffic))" },
];

export const conversionFunnelData: FunnelStepData[] = [
  { step: "Visitors", users: 48200, conversionRate: 100 },
  { step: "Signups", users: 8420, conversionRate: 17.5 },
  { step: "Trials", users: 3920, conversionRate: 46.6 },
  { step: "Paid", users: 1245, conversionRate: 31.8 },
];

export const deviceBreakdownData: DeviceBreakdownDataPoint[] = [
  { device: "Desktop", sessions: 28400, percentage: 59 },
  { device: "Mobile", sessions: 15400, percentage: 32 },
  { device: "Tablet", sessions: 4400, percentage: 9 },
];
