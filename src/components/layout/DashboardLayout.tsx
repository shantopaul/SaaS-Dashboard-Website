import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { DashboardHeader } from "./DashboardHeader";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      {/* Skip-to-content link: visible on focus, hidden otherwise */}
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:inline-block focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
        href="#main-content"
      >
        Skip to main content
      </a>

      <Sidebar />

      <div className="flex flex-1 flex-col min-w-0">
        <div className="flex flex-1 flex-col px-0 sm:px-4 md:px-6 sm:py-4">
          <div className="flex flex-1 flex-col rounded-none sm:rounded-xl sm:border sm:border-border sm:bg-background sm:shadow-sm overflow-hidden">
            <DashboardHeader />
            <main
              className="flex-1 overflow-auto p-4 md:p-6 lg:p-8"
              id="main-content"
              tabIndex={-1}
            >
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
