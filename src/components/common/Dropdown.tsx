import {
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  const close = useCallback(() => {
    setOpen(false);
    // Return focus to trigger button after closing
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, close]);

  return (
    <div className={cn("relative inline-block", className)} ref={wrapperRef}>
      <button
        ref={triggerRef}
        aria-controls={open ? menuId : undefined}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={triggerLabel}
        className="focus-ring inline-flex rounded-md"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        {trigger}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            aria-label={triggerLabel}
            className={cn(
              "absolute z-50 mt-2 min-w-56 rounded-lg border border-border bg-popover p-2 text-popover-foreground shadow-card",
              align === "end" ? "right-0" : "left-0",
            )}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            id={menuId}
            initial={{ opacity: 0, scale: 0.95, y: -6 }}
            role="menu"
            transition={{ duration: 0.14, ease: "easeOut" as const }}
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
