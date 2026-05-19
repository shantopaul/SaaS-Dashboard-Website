import { type ButtonHTMLAttributes } from "react";
import { cn } from "@/utils";

interface ToggleProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange"
> {
  checked: boolean;
  label?: string;
  onCheckedChange?: (checked: boolean) => void;
}

export function Toggle({
  checked,
  className,
  disabled,
  label,
  onCheckedChange,
  // aria-label from spread props covers unlabelled usages
  ...props
}: ToggleProps) {
  return (
    <button
      aria-checked={checked}
      aria-label={label ?? (props["aria-label"] as string | undefined)}
      className={cn(
        "focus-ring inline-flex items-center gap-3 rounded-md text-left text-body-sm font-medium text-foreground disabled:pointer-events-none disabled:opacity-55",
        className,
      )}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      role="switch"
      type="button"
      {...props}
    >
      <span
        className={cn(
          "relative inline-flex h-6 w-11 shrink-0 rounded-full border border-transparent transition-colors",
          checked ? "bg-primary" : "bg-muted",
        )}
        aria-hidden="true"
      >
        <span
          className={cn(
            "absolute top-0.5 size-5 rounded-full bg-white shadow-sm transition-transform",
            checked ? "translate-x-5" : "translate-x-0.5",
          )}
        />
      </span>
      {label ? <span>{label}</span> : null}
    </button>
  );
}
