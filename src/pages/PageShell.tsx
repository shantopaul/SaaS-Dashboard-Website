import { Link } from "react-router-dom";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components";

interface PageShellProps {
  badge: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  title: string;
  withSurface?: boolean;
}

export function PageShell({
  badge,
  description,
  primaryHref = "/",
  primaryLabel = "Back home",
  title,
  withSurface = true,
}: PageShellProps) {
  const content = (
    <section className="container-shell flex min-h-[calc(100vh-5rem)] items-center py-16">
      <Card className="mx-auto w-full max-w-3xl">
        <CardHeader>
          <Badge variant="info">{badge}</Badge>
          <CardTitle className="pt-4 text-heading-xl">{title}</CardTitle>
          <CardDescription className="max-w-2xl text-body-md">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            className="focus-ring inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-body-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            to={primaryHref}
          >
            {primaryLabel}
          </Link>
        </CardContent>
      </Card>
    </section>
  );

  return withSurface ? <main className="app-surface">{content}</main> : content;
}
