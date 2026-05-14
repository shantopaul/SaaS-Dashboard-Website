import { PageShell } from "../PageShell";

export function SettingsPage() {
  return (
    <PageShell
      badge="Protected Route"
      description="This placeholder confirms the /dashboard/settings route works. Settings forms and toggles will be built in Feature 26."
      primaryHref="/dashboard/profile"
      primaryLabel="View profile route"
      title="Settings Page"
    />
  );
}
