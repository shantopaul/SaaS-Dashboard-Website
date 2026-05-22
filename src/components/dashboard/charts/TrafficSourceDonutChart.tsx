import { useEffect, useRef, useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { trafficSourceData } from "@/data";
import type { TrafficSourceDataPoint } from "@/types";
import { chartTheme, formatPercent, tooltipStyle } from "./chartUtils";

interface TrafficSourceDonutChartProps {
  data?: TrafficSourceDataPoint[];
}

export function TrafficSourceDonutChart({
  data = trafficSourceData,
}: TrafficSourceDonutChartProps) {
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
          <PieChart>
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [formatPercent(Number(value ?? 0)), "Traffic"]}
              labelStyle={{ color: chartTheme.tooltipText, fontWeight: 600 }}
            />
            <Pie
              cx="50%"
              cy="45%"
              data={data}
              dataKey="visitors"
              innerRadius="58%"
              nameKey="source"
              outerRadius="82%"
              paddingAngle={3}
              stroke="hsl(var(--card))"
              strokeWidth={3}
            >
              {data.map((entry) => (
                <Cell key={entry.source} fill={entry.fill} />
              ))}
            </Pie>
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              wrapperStyle={{
                color: chartTheme.axis,
                fontSize: 12,
                lineHeight: "20px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      ) : null}
    </div>
  );
}
