import type { Customer } from "@/types";
import { DataTable, type DataTableColumn } from "./DataTable";
import { formatTableCurrency, formatTableDate } from "./tableFormat";
import { CustomerStatusBadge, TableActionButton } from "./tableUtils";

interface CustomerTableProps {
  customers: Customer[];
  showActions?: boolean;
  withSearch?: boolean;
}

const customerColumns: DataTableColumn<Customer>[] = [
  {
    accessor: (customer) => (
      <div>
        <div className="font-medium text-foreground">{customer.name}</div>
        <div className="text-caption text-muted-foreground">
          {customer.company} - {customer.email}
        </div>
      </div>
    ),
    header: "Customer",
    id: "customer",
  },
  {
    accessor: (customer) => customer.plan,
    header: "Plan",
    id: "plan",
  },
  {
    accessor: (customer) => <CustomerStatusBadge status={customer.status} />,
    header: "Status",
    id: "status",
  },
  {
    accessor: (customer) => (
      <time dateTime={customer.joinedDate}>
        {formatTableDate(customer.joinedDate)}
      </time>
    ),
    header: "Joined",
    id: "joined",
  },
  {
    accessor: (customer) => formatTableCurrency(customer.revenue),
    className: "text-right font-semibold text-foreground",
    header: "Revenue",
    id: "revenue",
  },
];

export function CustomerTable({
  customers,
  showActions = true,
  withSearch = false,
}: CustomerTableProps) {
  return (
    <DataTable
      caption="Recent customers"
      columns={customerColumns}
      data={customers}
      emptyMessage="No customers match your search."
      getMobileTitle={(customer) => (
        <>
          <h3 className="truncate text-sm font-semibold text-foreground">
            {customer.name}
          </h3>
          <p className="mt-1 truncate text-caption text-muted-foreground">
            {customer.company}
          </p>
        </>
      )}
      getRowId={(customer) => customer.id}
      getSearchText={(customer) =>
        `${customer.name} ${customer.email} ${customer.company} ${customer.plan} ${customer.status}`
      }
      mobileSummary={(customer) => (
        <CustomerStatusBadge status={customer.status} />
      )}
      renderActions={
        showActions
          ? (customer) => (
              <TableActionButton label={`View ${customer.name}`}>
                View
              </TableActionButton>
            )
          : undefined
      }
      searchPlaceholder="Search customers..."
      withSearch={withSearch}
    />
  );
}
