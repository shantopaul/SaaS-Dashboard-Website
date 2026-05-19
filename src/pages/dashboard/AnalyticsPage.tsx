import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  MousePointerClick,
  TrendingUp,
  UsersRound,
  WalletCards,
} from "lucide-react";
import {
  ChartCard,
  RevenueLineChart,
  TrafficSourceDonutChart,
  UserGrowthAreaChart,
} from "@/components/dashboard";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/common";
import {
  conversionFunnelData,
  deviceBreakdownData,
  revenueData,
  trafficSourceData,
  userGrowthData,
} from "@/data";
import { cn } from "@/utils";

const rangeFilters = ["7 days", "30 days", "90 days"] as const;
type RangeFilter = (typeof rangeFilters)[number];

const analyticsSummary = [
  {
    change: "+12.6%",
    description: "Total sessions",
    icon: MousePointerClick,
    trend: "up",
    value: "48.2k",
  },
  {
    change: "+8.9%",
    description: "Active users",
    icon: UsersRound,
    trend: "up",
    value: "12.4k",
  },
  {
    change: "-1.8%",
    description: "Bounce rate",
    icon: ArrowDownRight,
    trend: "down",
    value: "31.4%",
  },
  {
    change: "+16.2%",
    description: "Revenue impact",
    icon: WalletCards,
    trend: "up",
    value: "$84.2k",
  },
] as const;

function formatCompactNumber(value: number) {
  return new Intl.NumberFormat("en", {
    maximumFractionDigits: 1,
    notation: "compact",
  }).format(value);
}

export function AnalyticsPage() {
  const [activeRange, setActiveRange] = useState<RangeFilter>("30 days");
  const totalTraffic = trafficSourceData.reduce(
    (total, source) => total + source.visitors,
    0,
  );
  const totalSessions = deviceBreakdownData.reduce(
    (total, device) => total + device.sessions,
    0,
  );
  const latestRevenue = revenueData[revenueData.length - 1]?.revenue ?? 0;
  const latestUsers = userGrowthData[userGrowthData.length - 1]?.users ?? 0;

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-body-sm font-medium text-muted-foreground">
            Analytics workspace
          </p>
          <h2 className="mt-1 text-heading-lg">Performance Analytics</h2>
          <p className="mt-2 text-body-sm text-muted-foreground">
            Track acquisition, revenue, user growth, and conversion quality
            across the selected reporting window.
          </p>
        </div>

        <div
          aria-label="Analytics date range"
          className="inline-flex rounded-lg border border-border bg-card p-1"
          role="group"
        >
          {rangeFilters.map((range) => (
            <Button
              key={range}
              aria-pressed={activeRange === range}
              className={cn(
                "h-9 px-3",
                activeRange === range
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-transparent text-muted-foreground hover:text-foreground",
              )}
              onClick={() => setActiveRange(range)}
              size="sm"
              variant={activeRange === range ? "primary" : "ghost"}
            >
              {range}
            </Button>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {analyticsSummary.map((item) => {
          const Icon = item.icon;
          const isPositive = item.trend === "up";

          return (
            <Card key={item.description}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-body-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-foreground">
                      {item.value}
                    </p>
                  </div>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                </div>
                <div
                  className={cn(
                    "mt-4 flex items-center gap-1 text-caption font-semibold",
                    isPositive ? "text-success" : "text-destructive",
                  )}
                >
                  {isPositive ? (
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  ) : (
                    <ArrowDownRight className="size-3.5" aria-hidden="true" />
                  )}
                  {item.change}
                  <span className="font-normal text-muted-foreground">
                    vs previous {activeRange}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-5">
        <ChartCard
          className="xl:col-span-3"
          description={`Revenue reached $${formatCompactNumber(
            latestRevenue,
          )} in the latest month.`}
          title="Revenue Analytics"
        >
          <RevenueLineChart />
        </ChartCard>

        <ChartCard
          className="xl:col-span-2"
          description={`${formatCompactNumber(
            latestUsers,
          )} active users at the end of the period.`}
          title="User Growth"
        >
          <UserGrowthAreaChart />
        </ChartCard>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <ChartCard
          description={`${totalTraffic}% of traffic split across primary channels.`}
          title="Traffic Sources"
        >
          <TrafficSourceDonutChart />
        </ChartCard>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Website Traffic Overview
            </CardTitle>
            <CardDescription>
              Channel mix and session quality for the current range.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {trafficSourceData.map((source) => (
              <div key={source.source} className="space-y-2">
                <div className="flex items-center justify-between gap-3 text-body-sm">
                  <span className="font-medium text-foreground">
                    {source.source}
                  </span>
                  <span className="text-muted-foreground">
                    {source.visitors}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: source.fill,
                      width: `${source.visitors}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Conversion Funnel
            </CardTitle>
            <CardDescription>
              Visitor progress from awareness to paid subscription.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {conversionFunnelData.map((step) => (
              <div key={step.step} className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {step.step}
                    </p>
                    <p className="text-caption text-muted-foreground">
                      {formatCompactNumber(step.users)} users
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {step.conversionRate}%
                  </span>
                </div>
                <div className="h-2.5 rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${step.conversionRate}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Device Breakdown
            </CardTitle>
            <CardDescription>
              Session distribution across desktop, mobile, and tablet.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {deviceBreakdownData.map((device) => (
              <div
                key={device.device}
                className="rounded-lg border border-border bg-background p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {device.device}
                    </p>
                    <p className="text-caption text-muted-foreground">
                      {formatCompactNumber(device.sessions)} of{" "}
                      {formatCompactNumber(totalSessions)} sessions
                    </p>
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent">
                    {device.percentage}%
                  </div>
                </div>
                <div className="mt-4 h-2 rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${device.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <TrendingUp className="size-5 text-success" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-foreground">8.4%</p>
                <p className="text-caption text-muted-foreground">
                  Trial-to-paid conversion
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <UsersRound className="size-5 text-primary" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-foreground">1,245</p>
                <p className="text-caption text-muted-foreground">
                  New customers this period
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <WalletCards className="size-5 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-foreground">$1.8k</p>
                <p className="text-caption text-muted-foreground">
                  Average revenue per account
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
