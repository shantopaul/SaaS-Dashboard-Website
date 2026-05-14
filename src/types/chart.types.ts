import type { TrendDirection } from "./common.types";

export interface StatCardData {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: TrendDirection;
  iconName: string;
  description: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface RevenueDataPoint {
  month: string;
  revenue: number;
  forecast: number;
}

export interface SalesDataPoint {
  month: string;
  sales: number;
}

export interface UserGrowthDataPoint {
  month: string;
  users: number;
}

export interface TrafficSourceDataPoint {
  source: string;
  visitors: number;
  fill: string;
}

export interface FunnelStepData {
  step: string;
  users: number;
  conversionRate: number;
}

export interface DeviceBreakdownDataPoint {
  device: string;
  sessions: number;
  percentage: number;
}
