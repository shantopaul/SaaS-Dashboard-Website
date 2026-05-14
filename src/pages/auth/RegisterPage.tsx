import { PageShell } from "../PageShell";

export function RegisterPage() {
  return (
    <PageShell
      badge="Auth Route"
      description="This placeholder confirms the /register route works. The full registration UI will be built in Feature 12."
      primaryHref="/login"
      primaryLabel="Go to login route"
      title="Register Page"
    />
  );
}
