import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { DashboardHeader } from "./DashboardHeader";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      {/* Skip-to-content link: visible on focus, hidden otherwise */}
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-1/2 focus:top-4 focus:-translate-x-1/2 focus:z-[300] focus:block focus:rounded-lg focus:border focus:border-primary/20 focus:bg-background/95 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary focus:shadow-xl focus:backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary"
        href="#main-content"
      >
        Skip to main content
      </a>

      <Sidebar />
      {/* Desktop Sidebar Spacer */}
      <div className="hidden w-64 shrink-0 md:block" />

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
