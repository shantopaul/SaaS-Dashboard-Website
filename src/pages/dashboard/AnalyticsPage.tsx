import { PageShell } from "../PageShell";

export function AnalyticsPage() {
  return (
    <PageShell
      badge="Protected Route"
      description="This placeholder confirms the /dashboard/analytics route works. The full analytics experience will be built in Feature 22."
      primaryHref="/dashboard/billing"
      primaryLabel="View billing route"
      title="Analytics Page"
    />
  );
}
