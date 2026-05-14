import { type ReactNode } from "react";
import { cn } from "@/utils";

interface SectionHeaderProps {
  action?: ReactNode;
  align?: "start" | "center";
  className?: string;
  description?: string;
  eyebrow?: string;
  title: string;
}

export function SectionHeader({
  action,
  align = "start",
  className,
  description,
  eyebrow,
  title,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        align === "center" ? "text-center sm:block" : null,
        className,
      )}
    >
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-3 text-caption font-semibold uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-heading-lg">{title}</h2>
        {description ? (
          <p className="mt-3 text-body-md">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
