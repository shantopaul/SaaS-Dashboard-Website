import {
  ChartCard,
  MonthlySalesBarChart,
  RevenueLineChart,
  StatCard,
  TrafficSourceDonutChart,
  UserGrowthAreaChart,
} from "@/components/dashboard";
import { dashboardStats } from "@/data";

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <ChartCard
          className="xl:col-span-2"
          description="Actual revenue compared with forecast across the current fiscal period."
          title="Revenue Trend"
        >
          <RevenueLineChart />
        </ChartCard>

        <ChartCard
          description="Closed subscriptions and plan upgrades by month."
          title="Monthly Sales"
        >
          <MonthlySalesBarChart />
        </ChartCard>

        <ChartCard
          description="Active user base growth across the last seven months."
          title="User Growth"
        >
          <UserGrowthAreaChart />
        </ChartCard>

        <ChartCard
          className="xl:col-span-2"
          description="Visitor acquisition share across primary marketing channels."
          title="Traffic Sources"
        >
          <TrafficSourceDonutChart />
        </ChartCard>
      </div>
    </div>
  );
}
