import { Bell, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Dropdown,
  SearchInput,
  ThemeToggle,
} from "@/components/common";
import { useAuthStore, useLayoutStore } from "@/store";
import { dashboardNavigationItems } from "@/data";

export function DashboardHeader() {
  const { openSidebar } = useLayoutStore();
  const { user, logout } = useAuthStore();
  const location = useLocation();

  // Find the current page title based on the route
  const currentNavItem = dashboardNavigationItems.find(
    (item) => item.href === location.pathname,
  );
  const pageTitle = currentNavItem ? currentNavItem.label : "Dashboard";

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b border-border bg-card px-4 md:px-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 md:hidden">
          <Button
            aria-label="Open sidebar"
            onClick={openSidebar}
            size="icon"
            variant="outline"
          >
            <Menu className="size-5" />
          </Button>
          <span className="text-sm font-semibold sm:hidden">FlowPilot</span>
        </div>
        <h1 className="hidden text-heading-md font-bold md:block">
          {pageTitle}
        </h1>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
        <div className="hidden w-full max-w-sm sm:block">
          <SearchInput className="bg-background" />
        </div>

        <Button
          aria-label="View notifications"
          className="relative text-muted-foreground hover:text-foreground"
          size="icon"
          variant="ghost"
        >
          <Bell className="size-5" />
          {/* Notification dot */}
          <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-destructive" />
        </Button>

        <ThemeToggle />

        {user ? (
          <Dropdown
            align="end"
            trigger={
              <div className="relative size-8 overflow-hidden rounded-full ring-1 ring-border">
                {user.avatar ? (
                  <img
                    alt={user.name}
                    className="h-full w-full object-cover"
                    src={user.avatar}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-primary text-primary-foreground">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            }
            triggerLabel="User menu"
          >
            <div className="px-2 py-1.5 text-sm">
              <p className="font-medium text-foreground">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
            <div className="my-1 border-t border-border" />
            <Link
              className="flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-secondary focus:bg-secondary focus:outline-none"
              to="/dashboard/profile"
            >
              Profile Settings
            </Link>
            <div className="my-1 border-t border-border" />
            <button
              className="flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-sm text-destructive transition-colors hover:bg-destructive/10 focus:bg-destructive/10 focus:outline-none"
              onClick={logout}
              type="button"
            >
              Logout
            </button>
          </Dropdown>
        ) : null}
      </div>
    </header>
  );
}
