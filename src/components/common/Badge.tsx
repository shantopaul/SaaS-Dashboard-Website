import { type ReactNode } from "react";
import { cn } from "@/utils";

type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "muted";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-primary/10 text-primary ring-primary/20",
  success: "bg-success/10 text-success ring-success/20",
  warning: "bg-warning/15 text-warning-foreground ring-warning/20",
  danger: "bg-destructive/10 text-destructive ring-destructive/20",
  info: "bg-accent/10 text-accent ring-accent/20",
  muted: "bg-muted text-muted-foreground ring-border",
};

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-caption font-semibold ring-1 ring-inset",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
