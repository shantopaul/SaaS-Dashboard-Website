import { type ReactNode, useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
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
  const titleId = useId();
  const descId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    // Focus close button on open
    closeButtonRef.current?.focus();

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
      aria-describedby={description ? descId : undefined}
      aria-labelledby={titleId}
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-4 backdrop-blur-sm"
      role="dialog"
    >
      {/* Backdrop close */}
      <button
        aria-label="Close dialog"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        tabIndex={-1}
        type="button"
      />
      <div
        className={cn("panel relative z-10 w-full max-w-lg overflow-hidden")}
      >
        <div className="border-b border-border p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-heading-md" id={titleId}>
                {title}
              </h2>
              {description ? (
                <p
                  className="mt-1 text-body-sm text-muted-foreground"
                  id={descId}
                >
                  {description}
                </p>
              ) : null}
            </div>
            <Button
              ref={closeButtonRef}
              aria-label="Close dialog"
              onClick={onClose}
              size="icon"
              variant="ghost"
            >
              <X aria-hidden="true" className="size-4" />
            </Button>
          </div>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
