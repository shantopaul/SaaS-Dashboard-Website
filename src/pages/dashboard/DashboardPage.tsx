import { StatCard } from "@/components/dashboard";
import { dashboardStats } from "@/data";
import { PageShell } from "../PageShell";

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      <PageShell
        badge="Protected Route"
        description="The dashboard overview will be fully built out in Feature 20."
        primaryHref="/dashboard/analytics"
        primaryLabel="View analytics route"
        title="Dashboard Overview"
      />
    </div>
  );
}
