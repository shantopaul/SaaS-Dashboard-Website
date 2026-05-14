import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/utils";

interface DropdownProps {
  align?: "start" | "end";
  children: ReactNode;
  className?: string;
  trigger: ReactNode;
  triggerLabel: string;
}

export function Dropdown({
  align = "end",
  children,
  className,
  trigger,
  triggerLabel,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={cn("relative inline-block", className)} ref={wrapperRef}>
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        className="focus-ring inline-flex rounded-md"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span className="sr-only">{triggerLabel}</span>
        {trigger}
      </button>
      {open ? (
        <div
          className={cn(
            "absolute z-50 mt-2 min-w-56 rounded-lg border border-border bg-popover p-2 text-popover-foreground shadow-card",
            align === "end" ? "right-0" : "left-0",
          )}
          role="menu"
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
