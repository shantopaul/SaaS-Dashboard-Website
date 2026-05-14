import {
  DollarSign,
  MousePointerClick,
  TrendingDown,
  TrendingUp,
  UserPlus,
  UsersRound,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common";
import { cn } from "@/utils";
import type { StatCardData } from "@/types";

const iconMap = {
  DollarSign,
  UsersRound,
  UserPlus,
  MousePointerClick,
};

interface StatCardProps {
  stat: StatCardData;
}

export function StatCard({ stat }: StatCardProps) {
  const Icon = iconMap[stat.iconName as keyof typeof iconMap];
  const isPositive = stat.trend === "up";

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {stat.title}
        </CardTitle>
        {Icon ? <Icon className="size-4 text-muted-foreground" /> : null}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{stat.value}</div>
        <div className="mt-1 flex items-center text-xs">
          <span
            className={cn(
              "flex items-center font-medium",
              isPositive ? "text-success" : "text-destructive",
            )}
          >
            {isPositive ? (
              <TrendingUp className="mr-1 size-3" />
            ) : (
              <TrendingDown className="mr-1 size-3" />
            )}
            {stat.change}
          </span>
          <span className="ml-2 text-muted-foreground">{stat.description}</span>
        </div>
      </CardContent>
    </Card>
  );
}
