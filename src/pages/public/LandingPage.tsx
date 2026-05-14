import { Link } from "react-router-dom";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components";

export function LandingPage() {
  return (
    <main className="app-surface">
      <section className="container-shell flex min-h-screen items-center py-16">
        <div className="grid w-full gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 text-caption font-semibold uppercase tracking-[0.24em] text-accent">
              FlowPilot
            </p>
            <h1 className="max-w-3xl text-heading-xl sm:text-display-md">
              Route foundation for the SaaS dashboard is ready.
            </h1>
            <p className="mt-5 max-w-2xl text-body-lg">
              Feature 05 wires public, authentication, dashboard, protected, and
              not-found routes so each future page can be built in order.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="focus-ring inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-body-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                to="/dashboard"
              >
                View Dashboard Route
              </Link>
              <Link
                className="focus-ring inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-4 text-body-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                to="/features"
              >
                Explore Features Route
              </Link>
            </div>
          </div>

          <Card>
            <CardHeader>
              <Badge variant="success">Routing Ready</Badge>
              <CardTitle className="pt-4">Feature 05 route map</CardTitle>
              <CardDescription>
                These shells intentionally stay simple until their page-specific
                features are implemented.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "/features",
                  "/pricing",
                  "/login",
                  "/register",
                  "/dashboard",
                  "/dashboard/analytics",
                  "/dashboard/billing",
                  "/dashboard/settings",
                ].map((path) => (
                  <Link
                    className="focus-ring rounded-md border border-border bg-secondary px-3 py-2 text-body-sm font-medium transition-colors hover:bg-muted"
                    key={path}
                    to={path}
                  >
                    {path}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
