import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { publicNavigationItems } from "@/data";
import { BrandLogo } from "./BrandLogo";
import { Button, ThemeToggle } from "@/components/common";
import { cn } from "@/utils";
import { useAuthStore } from "@/store";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "focus-ring rounded-md px-3 py-2 text-body-sm font-semibold transition-colors",
    isActive
      ? "text-primary bg-primary/5"
      : "text-muted-foreground hover:text-foreground hover:bg-secondary/40",
  );

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/92 backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <BrandLogo />

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {publicNavigationItems.map((item) => (
              <NavLink
                className={navLinkClass}
                end={item.href === "/"}
                key={item.href}
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            {isAuthenticated ? (
              <Link
                className="focus-ring inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-body-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                to="/dashboard"
              >
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  className="focus-ring inline-flex h-10 items-center justify-center rounded-md px-4 text-body-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="focus-ring inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-body-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                  to="/register"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen((current) => !current)}
              size="icon"
              variant="outline"
            >
              {mobileMenuOpen ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-border py-4 md:hidden">
            <nav aria-label="Mobile navigation" className="grid gap-2">
              {publicNavigationItems.map((item) => (
                <NavLink
                  className={navLinkClass}
                  end={item.href === "/"}
                  key={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-4 grid gap-2 border-t border-border pt-4">
              {isAuthenticated ? (
                <Link
                  className="focus-ring inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-body-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                  onClick={() => setMobileMenuOpen(false)}
                  to="/dashboard"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    className="focus-ring inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-4 text-body-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="focus-ring inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-body-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                    onClick={() => setMobileMenuOpen(false)}
                    to="/register"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
