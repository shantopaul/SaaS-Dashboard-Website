import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function PublicLayout() {
  return (
    <div className="app-surface flex min-h-screen flex-col">
      {/* Skip-to-content for keyboard/AT users */}
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-1/2 focus:top-4 focus:-translate-x-1/2 focus:z-[300] focus:block focus:rounded-lg focus:border focus:border-primary/20 focus:bg-background/95 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary focus:shadow-xl focus:backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary"
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
