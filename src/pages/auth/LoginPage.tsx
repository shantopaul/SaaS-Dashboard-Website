import { PageShell } from "../PageShell";

export function LoginPage() {
  return (
    <PageShell
      badge="Auth Route"
      description="This placeholder confirms the /login route works. The full login UI will be built in Feature 11."
      primaryHref="/register"
      primaryLabel="Go to register route"
      title="Login Page"
    />
  );
}
