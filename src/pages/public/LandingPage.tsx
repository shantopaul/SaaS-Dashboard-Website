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
    <section className="container-shell flex min-h-[calc(100vh-5rem)] items-center py-16">
      <div className="grid w-full gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="mb-4 text-caption font-semibold uppercase tracking-[0.24em] text-accent">
            FlowPilot
          </p>
          <h1 className="max-w-3xl text-heading-xl sm:text-display-md">
            Public layout foundation for the SaaS website is ready.
          </h1>
          <p className="mt-5 max-w-2xl text-body-lg">
            Feature 06 adds the shared public navbar, footer, mobile menu,
            active navigation states, CTA links, and theme-control placement.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-body-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              to="/register"
            >
              Start Free Trial
            </Link>
            <Link
              className="focus-ring inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-4 text-body-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              to="/dashboard"
            >
              View Demo Route
            </Link>
          </div>
        </div>

        <Card>
          <CardHeader>
            <Badge variant="success">Public Layout Ready</Badge>
            <CardTitle className="pt-4">Marketing route shell</CardTitle>
            <CardDescription>
              The page-specific landing content comes later; this feature
              establishes the shared frame all public pages will use.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "/",
                "/features",
                "/pricing",
                "/login",
                "/register",
                "/dashboard",
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
  );
}
