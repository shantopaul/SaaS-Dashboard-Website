import { useEffect, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { monthlySalesData } from "@/data";
import type { SalesDataPoint } from "@/types";
import {
  chartMargins,
  chartTheme,
  formatCompactNumber,
  tooltipStyle,
} from "./chartUtils";

interface MonthlySalesBarChartProps {
  data?: SalesDataPoint[];
}

export function MonthlySalesBarChart({
  data = monthlySalesData,
}: MonthlySalesBarChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[280px]">
      {dimensions.width > 0 && dimensions.height > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={chartMargins}>
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
              width={34}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              cursor={{ fill: "hsl(var(--muted) / 0.45)" }}
              formatter={(value) => [
                formatCompactNumber(Number(value ?? 0)),
                "Sales",
              ]}
              labelStyle={{ color: chartTheme.tooltipText, fontWeight: 600 }}
            />
            <Bar
              dataKey="sales"
              fill={chartTheme.sales}
              name="Sales"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : null}
    </div>
  );
}
