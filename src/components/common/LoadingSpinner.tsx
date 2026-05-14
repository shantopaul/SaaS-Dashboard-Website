import { cn } from "@/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "size-4 border-2",
  md: "size-5 border-2",
  lg: "size-8 border-[3px]",
};

export function LoadingSpinner({
  className,
  size = "md",
}: LoadingSpinnerProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block animate-spin rounded-full border-current border-r-transparent",
        sizeClasses[size],
        className,
      )}
    />
  );
}
