import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/store";

export function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      aria-label="Toggle theme"
      className="focus-ring flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      onClick={toggleTheme}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
