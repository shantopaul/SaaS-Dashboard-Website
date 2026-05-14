import { forwardRef, type SelectHTMLAttributes, useId } from "react";
import { cn } from "@/utils";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  helperText?: string;
  label?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, error, helperText, id, label, options, placeholder, ...props },
    ref,
  ) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    const descriptionId = `${selectId}-description`;
    const hasDescription = Boolean(error || helperText);

    return (
      <div className="space-y-2">
        {label ? (
          <label
            className="text-body-sm font-medium text-foreground"
            htmlFor={selectId}
          >
            {label}
          </label>
        ) : null}
        <select
          ref={ref}
          aria-describedby={hasDescription ? descriptionId : undefined}
          aria-invalid={Boolean(error) || undefined}
          className={cn(
            "focus-ring h-10 w-full rounded-md border border-input bg-background px-3 text-body-sm text-foreground transition-colors disabled:cursor-not-allowed disabled:opacity-55",
            error ? "border-destructive focus-visible:ring-destructive" : null,
            className,
          )}
          id={selectId}
          {...props}
        >
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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

Select.displayName = "Select";
