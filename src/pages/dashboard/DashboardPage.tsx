import {
  ChartCard,
  MonthlySalesBarChart,
  RecentActivityFeed,
  RecentCustomersTable,
  RevenueLineChart,
  StatCard,
} from "@/components/dashboard";
import { FadeUpItem, PageMotion } from "@/components/common";
import { dashboardStats } from "@/data";

export function DashboardPage() {
  return (
    <PageMotion>
      <FadeUpItem>
        <section className="flex flex-col gap-2">
          <p className="text-body-sm font-medium text-muted-foreground">
            Welcome back. Here is how FlowPilot is performing this month.
          </p>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="text-heading-lg">Overview</h1>
            <p className="text-body-sm text-muted-foreground">
              Updated with July revenue, sales, and customer activity.
            </p>
          </div>
        </section>
      </FadeUpItem>

      <FadeUpItem>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </FadeUpItem>

      <FadeUpItem>
        <section className="grid gap-6 xl:grid-cols-5">
          <ChartCard
            className="xl:col-span-3"
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
        </section>
      </FadeUpItem>

      <FadeUpItem>
        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
          <RecentCustomersTable />
          <RecentActivityFeed />
        </section>
      </FadeUpItem>
    </PageMotion>
  );
}
