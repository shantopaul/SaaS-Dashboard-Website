import { Link } from "react-router-dom";
import { publicNavigationItems } from "@/data";
import { BrandLogo } from "./BrandLogo";

const footerLinks = [
  { label: "Login", href: "/login" },
  { label: "Register", href: "/register" },
  { label: "Dashboard", href: "/dashboard" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-shell py-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <BrandLogo />
            <p className="mt-4 max-w-md text-body-sm">
              FlowPilot helps teams prepare a clean SaaS dashboard experience
              for analytics, billing, customers, and workflow insights.
            </p>
          </div>

          <div>
            <h2 className="text-body-sm font-semibold">Product</h2>
            <nav
              aria-label="Footer product navigation"
              className="mt-3 grid gap-2"
            >
              {publicNavigationItems.map((item) => (
                <Link
                  className="focus-ring rounded-md text-body-sm text-muted-foreground transition-colors hover:text-foreground"
                  key={item.href}
                  to={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-body-sm font-semibold">Account</h2>
            <nav
              aria-label="Footer account navigation"
              className="mt-3 grid gap-2"
            >
              {footerLinks.map((item) => (
                <Link
                  className="focus-ring rounded-md text-body-sm text-muted-foreground transition-colors hover:text-foreground"
                  key={item.href}
                  to={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-caption text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 FlowPilot. Portfolio SaaS dashboard project.</p>
          <p>Built with React, TypeScript, Tailwind CSS, and React Router.</p>
        </div>
      </div>
    </footer>
  );
}
