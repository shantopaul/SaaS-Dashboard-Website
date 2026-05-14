import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { cn } from "@/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:bg-primary/85",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70",
  outline:
    "border border-border bg-background text-foreground hover:bg-secondary active:bg-muted",
  ghost: "text-foreground hover:bg-secondary active:bg-muted",
  danger:
    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 active:bg-destructive/85",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 gap-2 rounded-md px-3 text-body-sm",
  md: "h-10 gap-2 rounded-md px-4 text-body-sm",
  lg: "h-11 gap-2 rounded-lg px-5 text-body-md",
  icon: "size-10 rounded-md p-0",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      isLoading = false,
      leftIcon,
      rightIcon,
      size = "md",
      type = "button",
      variant = "primary",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        aria-busy={isLoading || undefined}
        className={cn(
          "focus-ring inline-flex items-center justify-center whitespace-nowrap font-semibold transition-colors disabled:pointer-events-none disabled:opacity-55",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        disabled={disabled || isLoading}
        type={type}
        {...props}
      >
        {isLoading ? <LoadingSpinner size="sm" /> : leftIcon}
        {size !== "icon" ? (
          children
        ) : (
          <span className="sr-only">{children}</span>
        )}
        {!isLoading ? rightIcon : null}
      </button>
    );
  },
);

Button.displayName = "Button";
