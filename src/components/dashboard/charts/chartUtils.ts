export const chartTheme = {
  axis: "hsl(var(--muted-foreground))",
  grid: "hsl(var(--border))",
  muted: "hsl(var(--muted))",
  revenue: "hsl(var(--chart-revenue))",
  sales: "hsl(var(--chart-sales))",
  users: "hsl(var(--chart-users))",
  traffic: "hsl(var(--chart-traffic))",
  conversion: "hsl(var(--chart-conversion))",
  tooltipBackground: "hsl(var(--popover))",
  tooltipBorder: "hsl(var(--border))",
  tooltipText: "hsl(var(--popover-foreground))",
};

export const chartMargins = {
  top: 8,
  right: 8,
  bottom: 0,
  left: 0,
};

export function formatCurrency(value: number) {
  if (value >= 1000) {
    return `$${Math.round(value / 1000)}k`;
  }

  return `$${value}`;
}

export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatPercent(value: number) {
  return `${value}%`;
}

export const tooltipStyle = {
  backgroundColor: chartTheme.tooltipBackground,
  border: `1px solid ${chartTheme.tooltipBorder}`,
  borderRadius: "8px",
  boxShadow:
    "0 10px 30px hsl(var(--shadow-color) / 0.12), 0 1px 2px hsl(var(--shadow-color) / 0.06)",
  color: chartTheme.tooltipText,
};
