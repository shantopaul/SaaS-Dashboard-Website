import { Navigate, Outlet } from "react-router-dom";
import { BrandLogo } from "./BrandLogo";
import { ThemeToggle, LoadingSpinner } from "@/components/common";
import { useAuthStore } from "@/store";

export function AuthLayout() {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate replace to="/dashboard" />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-3 sm:p-4 md:p-8">
      {/* Theme Toggle - Fixed top right */}
      <div className="absolute right-3 top-3 z-50 sm:right-4 sm:top-4 md:right-8 md:top-8">
        <ThemeToggle />
      </div>
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-6 flex justify-center sm:mb-8">
          <BrandLogo />
        </div>

        <div className="overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-xl">
          <Outlet />
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground sm:mt-8">
          <p>
            &copy; {new Date().getFullYear()} FlowPilot. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
