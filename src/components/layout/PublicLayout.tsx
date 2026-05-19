import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function PublicLayout() {
  return (
    <div className="app-surface flex min-h-screen flex-col">
      {/* Skip-to-content for keyboard/AT users */}
      <a
        className="focus-ring fixed left-4 top-4 z-[200] -translate-y-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg transition-transform focus:translate-y-0"
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
