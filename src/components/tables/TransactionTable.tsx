import type { Transaction } from "@/types";
import { DataTable, type DataTableColumn } from "./DataTable";
import { formatTableCurrency, formatTableDate } from "./tableFormat";
import { TransactionStatusBadge } from "./tableUtils";

interface TransactionTableProps {
  transactions: Transaction[];
  withSearch?: boolean;
}

const transactionColumns: DataTableColumn<Transaction>[] = [
  {
    accessor: (transaction) => (
      <span className="font-medium text-foreground">
        {transaction.customerName}
      </span>
    ),
    header: "Customer",
    id: "customer",
  },
  {
    accessor: (transaction) => formatTableCurrency(transaction.amount),
    className: "font-semibold text-foreground",
    header: "Amount",
    id: "amount",
  },
  {
    accessor: (transaction) => (
      <TransactionStatusBadge status={transaction.status} />
    ),
    header: "Status",
    id: "status",
  },
  {
    accessor: (transaction) => transaction.method,
    header: "Method",
    id: "method",
  },
  {
    accessor: (transaction) => (
      <time dateTime={transaction.date}>
        {formatTableDate(transaction.date)}
      </time>
    ),
    header: "Date",
    id: "date",
  },
];

export function TransactionTable({
  transactions,
  withSearch = false,
}: TransactionTableProps) {
  return (
    <DataTable
      caption="Recent transactions"
      columns={transactionColumns}
      data={transactions}
      emptyMessage="No transactions match your search."
      getMobileTitle={(transaction) => (
        <>
          <h3 className="text-sm font-semibold text-foreground">
            {transaction.customerName}
          </h3>
          <p className="mt-1 text-caption text-muted-foreground">
            {transaction.method}
          </p>
        </>
      )}
      getRowId={(transaction) => transaction.id}
      getSearchText={(transaction) =>
        `${transaction.customerName} ${transaction.amount} ${transaction.status} ${transaction.method} ${transaction.date}`
      }
      mobileSummary={(transaction) => (
        <TransactionStatusBadge status={transaction.status} />
      )}
      searchPlaceholder="Search transactions..."
      withSearch={withSearch}
    />
  );
}
