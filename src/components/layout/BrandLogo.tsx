import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";
import { cn } from "@/utils";

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Link
      className={cn(
        "focus-ring inline-flex items-center gap-3 rounded-md",
        className,
      )}
      to="/"
    >
      <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <BarChart3 aria-hidden="true" className="size-5" />
      </span>
      <span className="leading-tight">
        <span className="block text-body-md font-bold text-foreground">
          FlowPilot
        </span>
        <span className="block text-caption font-medium text-muted-foreground">
          SaaS Analytics
        </span>
      </span>
    </Link>
  );
}
