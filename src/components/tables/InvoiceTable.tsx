import type { Invoice } from "@/types";
import { DataTable, type DataTableColumn } from "./DataTable";
import { formatTableCurrency, formatTableDate } from "./tableFormat";
import { InvoiceStatusBadge, TableActionButton } from "./tableUtils";

interface InvoiceTableProps {
  invoices: Invoice[];
  onInvoiceAction?: (invoice: Invoice) => void;
  withSearch?: boolean;
}

const invoiceColumns: DataTableColumn<Invoice>[] = [
  {
    accessor: (invoice) => (
      <span className="font-medium text-foreground">{invoice.id}</span>
    ),
    header: "Invoice",
    id: "invoice",
  },
  {
    accessor: (invoice) => (
      <time dateTime={invoice.date}>{formatTableDate(invoice.date)}</time>
    ),
    header: "Date",
    id: "date",
  },
  {
    accessor: (invoice) => formatTableCurrency(invoice.amount),
    className: "font-semibold text-foreground",
    header: "Amount",
    id: "amount",
  },
  {
    accessor: (invoice) => <InvoiceStatusBadge status={invoice.status} />,
    header: "Status",
    id: "status",
  },
];

export function InvoiceTable({
  invoices,
  onInvoiceAction,
  withSearch = false,
}: InvoiceTableProps) {
  return (
    <DataTable
      caption="Billing invoices"
      columns={invoiceColumns}
      data={invoices}
      emptyMessage="No invoices match your search."
      getMobileTitle={(invoice) => (
        <>
          <h3 className="text-sm font-semibold text-foreground">
            {invoice.id}
          </h3>
          <p className="mt-1 text-caption text-muted-foreground">
            {formatTableDate(invoice.date)}
          </p>
        </>
      )}
      getRowId={(invoice) => invoice.id}
      getSearchText={(invoice) =>
        `${invoice.id} ${invoice.date} ${invoice.status} ${invoice.amount}`
      }
      mobileSummary={(invoice) => (
        <InvoiceStatusBadge status={invoice.status} />
      )}
      renderActions={(invoice) => (
        <TableActionButton
          label={`${invoice.downloadLabel} for ${invoice.id}`}
          onClick={() => onInvoiceAction?.(invoice)}
        >
          {invoice.downloadLabel}
        </TableActionButton>
      )}
      searchPlaceholder="Search invoices..."
      withSearch={withSearch}
    />
  );
}
