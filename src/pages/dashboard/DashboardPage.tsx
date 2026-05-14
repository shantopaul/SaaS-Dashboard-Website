import { PageShell } from "../PageShell";

export function DashboardPage() {
  return (
    <PageShell
      badge="Protected Route"
      description="This placeholder confirms the /dashboard route works. The dashboard overview will be built in Feature 20 after layout, stats, charts, and tables are ready."
      primaryHref="/dashboard/analytics"
      primaryLabel="View analytics route"
      title="Dashboard Overview"
    />
  );
}
