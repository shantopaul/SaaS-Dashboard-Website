import { PageShell } from "../PageShell";

export function NotFoundPage() {
  return (
    <PageShell
      badge="404"
      description="The route you requested does not exist in the FlowPilot route map."
      primaryHref="/"
      primaryLabel="Return home"
      title="Page not found"
      withSurface={false}
    />
  );
}
