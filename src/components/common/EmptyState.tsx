import { type ReactNode } from "react";
import { Button } from "./Button";
import { cn } from "@/utils";

interface EmptyStateProps {
  actionLabel?: string;
  children?: ReactNode;
  className?: string;
  description: string;
  icon?: ReactNode;
  onAction?: () => void;
  title: string;
}

export function EmptyState({
  actionLabel,
  children,
  className,
  description,
  icon,
  onAction,
  title,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-dashed border-border bg-card p-8 text-center",
        className,
      )}
    >
      {icon ? (
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
          {icon}
        </div>
      ) : null}
      <h3 className="text-heading-md">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-body-sm">{description}</p>
      {actionLabel && onAction ? (
        <Button className="mt-5" onClick={onAction} variant="secondary">
          {actionLabel}
        </Button>
      ) : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}
