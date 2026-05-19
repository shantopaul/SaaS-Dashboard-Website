import {
  FileBarChart,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/common";
import { recentActivity } from "@/data";
import type { ActivityItem } from "@/types";

const iconMap = {
  FileBarChart,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  TrendingUp,
  UserPlus,
};

interface RecentActivityFeedProps {
  activities?: ActivityItem[];
}

function formatActivityTime(timestamp: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(timestamp));
}

export function RecentActivityFeed({
  activities = recentActivity,
}: RecentActivityFeedProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          Recent Activity
        </CardTitle>
        <CardDescription>
          Key workspace events from the last 48 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="space-y-4">
          {activities.map((activity) => {
            const Icon = iconMap[activity.iconName as keyof typeof iconMap];

            return (
              <li key={activity.id} className="flex gap-3">
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/15">
                  {Icon ? <Icon className="size-4" aria-hidden="true" /> : null}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-semibold text-foreground">
                      {activity.title}
                    </p>
                    <time
                      className="text-caption text-muted-foreground"
                      dateTime={activity.timestamp}
                    >
                      {formatActivityTime(activity.timestamp)}
                    </time>
                  </div>
                  <p className="mt-1 text-body-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>
  );
}
