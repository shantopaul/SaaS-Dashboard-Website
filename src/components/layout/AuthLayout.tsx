import { Outlet } from "react-router-dom";
import { BrandLogo } from "./BrandLogo";
import { ThemeToggle } from "@/components/common";

export function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4 md:p-8">
      {/* Theme Toggle - Fixed top right */}
      <div className="absolute right-4 top-4 z-50 md:right-8 md:top-8">
        <ThemeToggle />
      </div>
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <BrandLogo />
        </div>

        <div className="rounded-2xl border bg-card text-card-foreground shadow-xl">
          <Outlet />
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} FlowPilot. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
