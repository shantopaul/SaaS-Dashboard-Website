import { Badge, Button } from "@/components/common";
import type { Customer, Invoice, Transaction } from "@/types";

export function CustomerStatusBadge({
  status,
}: {
  status: Customer["status"];
}) {
  const variant = {
    Active: "success",
    Cancelled: "danger",
    Pending: "warning",
  } as const;

  return <Badge variant={variant[status]}>{status}</Badge>;
}

export function InvoiceStatusBadge({ status }: { status: Invoice["status"] }) {
  const variant = {
    Failed: "danger",
    Open: "warning",
    Paid: "success",
  } as const;

  return <Badge variant={variant[status]}>{status}</Badge>;
}

export function TransactionStatusBadge({
  status,
}: {
  status: Transaction["status"];
}) {
  const variant = {
    Failed: "danger",
    Paid: "success",
    Pending: "warning",
  } as const;

  return <Badge variant={variant[status]}>{status}</Badge>;
}

export function TableActionButton({
  children,
  label,
  onClick,
}: {
  children: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Button aria-label={label} onClick={onClick} size="sm" variant="ghost">
      {children}
    </Button>
  );
}
