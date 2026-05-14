import { forwardRef, type TextareaHTMLAttributes, useId } from "react";
import { cn } from "@/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  helperText?: string;
  label?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, helperText, id, label, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;
    const descriptionId = `${textareaId}-description`;
    const hasDescription = Boolean(error || helperText);

    return (
      <div className="space-y-2">
        {label ? (
          <label
            className="text-body-sm font-medium text-foreground"
            htmlFor={textareaId}
          >
            {label}
          </label>
        ) : null}
        <textarea
          ref={ref}
          aria-describedby={hasDescription ? descriptionId : undefined}
          aria-invalid={Boolean(error) || undefined}
          className={cn(
            "focus-ring min-h-28 w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-body-sm text-foreground transition-colors placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-55",
            error ? "border-destructive focus-visible:ring-destructive" : null,
            className,
          )}
          id={textareaId}
          {...props}
        />
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

Textarea.displayName = "Textarea";
