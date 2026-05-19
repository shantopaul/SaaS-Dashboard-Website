import type { ActivityItem } from "@/types";
import { DataTable, type DataTableColumn } from "./DataTable";

interface ActivityTableProps {
  activities: ActivityItem[];
  withSearch?: boolean;
}

function formatActivityDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    month: "short",
  }).format(new Date(value));
}

const activityColumns: DataTableColumn<ActivityItem>[] = [
  {
    accessor: (activity) => (
      <div>
        <div className="font-medium text-foreground">{activity.title}</div>
        <div className="text-caption text-muted-foreground">
          {activity.description}
        </div>
      </div>
    ),
    header: "Activity",
    id: "activity",
  },
  {
    accessor: (activity) => activity.iconName,
    header: "Type",
    id: "type",
  },
  {
    accessor: (activity) => (
      <time dateTime={activity.timestamp}>
        {formatActivityDate(activity.timestamp)}
      </time>
    ),
    header: "Time",
    id: "time",
  },
];

export function ActivityTable({
  activities,
  withSearch = false,
}: ActivityTableProps) {
  return (
    <DataTable
      caption="Recent activity"
      columns={activityColumns}
      data={activities}
      emptyMessage="No activity matches your search."
      getMobileTitle={(activity) => (
        <>
          <h3 className="text-sm font-semibold text-foreground">
            {activity.title}
          </h3>
          <p className="mt-1 text-caption text-muted-foreground">
            {activity.description}
          </p>
        </>
      )}
      getRowId={(activity) => activity.id}
      getSearchText={(activity) =>
        `${activity.title} ${activity.description} ${activity.iconName}`
      }
      searchPlaceholder="Search activity..."
      withSearch={withSearch}
    />
  );
}
