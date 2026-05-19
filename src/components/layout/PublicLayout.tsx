import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function PublicLayout() {
  return (
    <div className="app-surface flex min-h-screen flex-col">
      {/* Skip-to-content for keyboard/AT users */}
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:inline-block focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
        href="#page-content"
      >
        Skip to main content
      </a>
      <Navbar />
      <main className="flex-1" id="page-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
