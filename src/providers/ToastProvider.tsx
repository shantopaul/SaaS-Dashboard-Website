import { useEffect } from "react";
import { CheckCircle2, Info, TriangleAlert, X, XCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/common";
import { useToastStore, type ToastVariant } from "@/store";
import { cn } from "@/utils";

const toastIcons = {
  danger: XCircle,
  info: Info,
  success: CheckCircle2,
  warning: TriangleAlert,
};

const toastClasses: Record<ToastVariant, string> = {
  danger: "border-destructive/30 bg-destructive/10 text-destructive",
  info: "border-primary/30 bg-primary/10 text-primary",
  success: "border-success/30 bg-success/10 text-success",
  warning: "border-warning/30 bg-warning/15 text-warning-foreground",
};

export function ToastProvider() {
  const { dismissToast, toasts } = useToastStore();

  useEffect(() => {
    if (toasts.length === 0) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      dismissToast(toasts[toasts.length - 1].id);
    }, 4500);

    return () => window.clearTimeout(timeoutId);
  }, [dismissToast, toasts]);

  return (
    <div
      aria-live="polite"
      aria-relevant="additions text"
      className="pointer-events-none fixed right-4 top-4 z-[100] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3 sm:right-6 sm:top-6"
      role="status"
    >
      <AnimatePresence initial={false}>
        {toasts.map((toast) => {
          const Icon = toastIcons[toast.variant];

          return (
            <motion.div
              key={toast.id}
              animate={{ opacity: 1, x: 0 }}
              className="pointer-events-auto rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-card"
              exit={{ opacity: 0, x: 40, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, x: 40 }}
              layout
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="flex gap-3">
                <div
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-md border",
                    toastClasses[toast.variant],
                  )}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground">
                    {toast.title}
                  </p>
                  {toast.description ? (
                    <p className="mt-1 text-caption text-muted-foreground">
                      {toast.description}
                    </p>
                  ) : null}
                </div>
                <Button
                  aria-label="Dismiss notification"
                  className="-mr-2 -mt-2 size-8 text-muted-foreground hover:text-foreground"
                  onClick={() => dismissToast(toast.id)}
                  size="icon"
                  variant="ghost"
                >
                  <X className="size-4" />
                </Button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
