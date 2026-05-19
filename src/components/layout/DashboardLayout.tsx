import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { DashboardHeader } from "./DashboardHeader";

export function DashboardLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-muted/40">
      <Sidebar />
      <div className="flex flex-1 flex-col min-h-0 sm:gap-4 sm:py-4 sm:pl-14 md:pl-0">
        <div className="flex flex-1 flex-col min-h-0 sm:px-4 md:px-8">
          <div className="flex-1 rounded-xl sm:border sm:border-border sm:bg-background sm:shadow-sm sm:overflow-hidden flex flex-col min-h-0">
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
