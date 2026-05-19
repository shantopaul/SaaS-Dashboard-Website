import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ChartNoAxesCombined,
  LayoutDashboard,
  LogOut,
  ReceiptText,
  Settings,
  UserRound,
  X,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { dashboardNavigationItems } from "@/data";
import { useAuthStore, useLayoutStore, useToastStore } from "@/store";
import { cn } from "@/utils";
import { Button } from "@/components/common";

const iconMap = {
  LayoutDashboard,
  ChartNoAxesCombined,
  ReceiptText,
  Settings,
  UserRound,
};

export function Sidebar() {
  const { logout } = useAuthStore();
  const { isSidebarOpen, closeSidebar } = useLayoutStore();
  const showToast = useToastStore((state) => state.showToast);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showToast({
      description: "You have been signed out of FlowPilot.",
      title: "Logged out",
      variant: "info",
    });
    navigate("/login");
  };

  const sidebarContent = (
    <>
      <div className="flex h-16 shrink-0 items-center justify-between px-4 sm:px-6">
        <BrandLogo />
        <Button
          className="md:hidden"
          onClick={closeSidebar}
          size="icon"
          variant="ghost"
        >
          <X className="size-5" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto px-3 py-4">
        <nav className="flex-1 space-y-1" aria-label="Dashboard navigation">
          {dashboardNavigationItems.map((item) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap];
            return (
              <NavLink
                className={({ isActive }) =>
                  cn(
                    "focus-ring flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )
                }
                end={item.href === "/dashboard"}
                key={item.href}
                onClick={closeSidebar}
                to={item.href}
              >
                {({ isActive }) => (
                  <>
                    {Icon ? (
                      <Icon aria-hidden="true" className="size-5 shrink-0" />
                    ) : null}
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="sr-only">(current page)</span>
                    ) : null}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-border pt-4">
          <button
            className="focus-ring flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
            onClick={handleLogout}
            type="button"
          >
            <LogOut aria-hidden="true" className="size-5 shrink-0" />
            Sign out
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-card md:flex">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 md:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={closeSidebar}
            />
            {/* Drawer */}
            <motion.aside
              animate={{ x: 0 }}
              className="absolute inset-y-0 left-0 flex w-72 max-w-[80vw] flex-col border-r border-border bg-card shadow-xl"
              exit={{ x: "-100%" }}
              initial={{ x: "-100%" }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {sidebarContent}
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
