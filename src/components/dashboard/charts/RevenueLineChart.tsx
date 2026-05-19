import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueData } from "@/data";
import type { RevenueDataPoint } from "@/types";
import {
  chartMargins,
  chartTheme,
  formatCurrency,
  tooltipStyle,
} from "./chartUtils";

interface RevenueLineChartProps {
  data?: RevenueDataPoint[];
}

export function RevenueLineChart({
  data = revenueData,
}: RevenueLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={chartMargins}>
        <CartesianGrid
          stroke={chartTheme.grid}
          strokeDasharray="4 4"
          vertical={false}
        />
        <XAxis
          axisLine={false}
          dataKey="month"
          tick={{ fill: chartTheme.axis, fontSize: 12 }}
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          tick={{ fill: chartTheme.axis, fontSize: 12 }}
          tickFormatter={formatCurrency}
          tickLine={false}
          width={44}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          cursor={{ stroke: chartTheme.grid, strokeWidth: 1 }}
          formatter={(value) => [formatCurrency(Number(value ?? 0)), ""]}
          labelStyle={{ color: chartTheme.tooltipText, fontWeight: 600 }}
        />
        <Legend
          iconType="circle"
          wrapperStyle={{ color: chartTheme.axis, fontSize: 12 }}
        />
        <Line
          activeDot={{ r: 5 }}
          dataKey="revenue"
          dot={false}
          name="Revenue"
          stroke={chartTheme.revenue}
          strokeLinecap="round"
          strokeWidth={3}
          type="monotone"
        />
        <Line
          dataKey="forecast"
          dot={false}
          name="Forecast"
          stroke={chartTheme.sales}
          strokeDasharray="6 6"
          strokeLinecap="round"
          strokeWidth={2}
          type="monotone"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
