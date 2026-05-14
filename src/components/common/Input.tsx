import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  useId,
} from "react";
import { cn } from "@/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  helperText?: string;
  label?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error,
      helperText,
      id,
      label,
      leftElement,
      rightElement,
      type = "text",
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const descriptionId = `${inputId}-description`;
    const hasDescription = Boolean(error || helperText);

    return (
      <div className="space-y-2">
        {label ? (
          <label
            className="text-body-sm font-medium text-foreground"
            htmlFor={inputId}
          >
            {label}
          </label>
        ) : null}
        <div className="relative">
          {leftElement ? (
            <span className="pointer-events-none absolute left-3 top-1/2 flex -translate-y-1/2 text-muted-foreground">
              {leftElement}
            </span>
          ) : null}
          <input
            ref={ref}
            aria-describedby={hasDescription ? descriptionId : undefined}
            aria-invalid={Boolean(error) || undefined}
            className={cn(
              "focus-ring h-10 w-full rounded-md border border-input bg-background px-3 text-body-sm text-foreground transition-colors placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-55",
              leftElement ? "pl-10" : null,
              rightElement ? "pr-10" : null,
              error
                ? "border-destructive focus-visible:ring-destructive"
                : null,
              className,
            )}
            id={inputId}
            type={type}
            {...props}
          />
          {rightElement ? (
            <span className="absolute right-3 top-1/2 flex -translate-y-1/2 text-muted-foreground">
              {rightElement}
            </span>
          ) : null}
        </div>
        {hasDescription ? (
          <p
            className={cn(
              "text-caption",
              error ? "text-destructive" : "text-muted-foreground",
            )}
            id={descriptionId}
          >
            {error ?? helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
