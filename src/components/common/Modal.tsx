import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import { cn } from "@/utils";

interface ModalProps {
  children: ReactNode;
  description?: string;
  onClose: () => void;
  open: boolean;
  title: string;
}

export function Modal({
  children,
  description,
  onClose,
  open,
  title,
}: ModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-4 backdrop-blur-sm"
      role="dialog"
    >
      <button
        aria-label="Close modal"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        type="button"
      />
      <div className="panel relative z-10 w-full max-w-lg overflow-hidden">
        <div className="border-b border-border p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-heading-md">{title}</h2>
              {description ? (
                <p className="mt-1 text-body-sm text-muted-foreground">
                  {description}
                </p>
              ) : null}
            </div>
            <Button onClick={onClose} size="sm" variant="ghost">
              Close
            </Button>
          </div>
        </div>
        <div className={cn("p-5")}>{children}</div>
      </div>
    </div>,
    document.body,
  );
}
