import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { DashboardHeader } from "./DashboardHeader";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <Sidebar />
      <div className="flex flex-1 flex-col min-w-0">
        <div className="flex flex-1 flex-col px-0 sm:px-4 md:px-6 sm:py-4">
          <div className="flex flex-1 flex-col rounded-none sm:rounded-xl sm:border sm:border-border sm:bg-background sm:shadow-sm overflow-hidden">
            <DashboardHeader />
            <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
