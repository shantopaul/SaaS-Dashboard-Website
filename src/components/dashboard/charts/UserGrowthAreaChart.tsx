import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { userGrowthData } from "@/data";
import type { UserGrowthDataPoint } from "@/types";
import {
  chartMargins,
  chartTheme,
  formatCompactNumber,
  tooltipStyle,
} from "./chartUtils";

interface UserGrowthAreaChartProps {
  data?: UserGrowthDataPoint[];
}

export function UserGrowthAreaChart({
  data = userGrowthData,
}: UserGrowthAreaChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full bg-transparent" />;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={chartMargins}>
        <defs>
          <linearGradient id="userGrowthFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor={chartTheme.users} stopOpacity={0.28} />
            <stop
              offset="95%"
              stopColor={chartTheme.users}
              stopOpacity={0.02}
            />
          </linearGradient>
        </defs>
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
          tickFormatter={formatCompactNumber}
          tickLine={false}
          width={44}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          cursor={{ stroke: chartTheme.grid, strokeWidth: 1 }}
          formatter={(value) => [
            formatCompactNumber(Number(value ?? 0)),
            "Users",
          ]}
          labelStyle={{ color: chartTheme.tooltipText, fontWeight: 600 }}
        />
        <Area
          dataKey="users"
          fill="url(#userGrowthFill)"
          name="Users"
          stroke={chartTheme.users}
          strokeLinecap="round"
          strokeWidth={3}
          type="monotone"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
