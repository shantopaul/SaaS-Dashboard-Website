import { PageShell } from "../PageShell";

export function BillingPage() {
  return (
    <PageShell
      badge="Protected Route"
      description="This placeholder confirms the /dashboard/billing route works. Subscription and invoice UI will be built in Feature 25."
      primaryHref="/dashboard/settings"
      primaryLabel="View settings route"
      title="Billing Page"
    />
  );
}
