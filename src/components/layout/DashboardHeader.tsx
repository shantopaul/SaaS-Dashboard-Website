import { Menu } from "lucide-react";
import { Button, ThemeToggle } from "@/components/common";
import { useLayoutStore } from "@/store";

export function DashboardHeader() {
  const { openSidebar } = useLayoutStore();

  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b border-border bg-card px-4 md:px-6">
      <div className="flex items-center gap-2 md:hidden">
        <Button
          aria-label="Open sidebar"
          onClick={openSidebar}
          size="icon"
          variant="outline"
        >
          <Menu className="size-5" />
        </Button>
        <span className="text-sm font-semibold">FlowPilot</span>
      </div>

      <div className="flex flex-1 items-center justify-end gap-4">
        <ThemeToggle />
        {/* User profile dropdown placeholder */}
        <div className="h-8 w-8 rounded-full bg-muted" />
      </div>
    </header>
  );
}
