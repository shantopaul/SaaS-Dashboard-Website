import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/common";
import { cn } from "@/utils";

interface ChartCardProps {
  children: ReactNode;
  className?: string;
  description?: string;
  title: string;
}

export function ChartCard({
  children,
  className,
  description,
  title,
}: ChartCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        {description ? (
          <CardDescription className="text-caption">
            {description}
          </CardDescription>
        ) : null}
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[280px] min-w-0" role="img" aria-label={title}>
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
