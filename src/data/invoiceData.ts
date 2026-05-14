import type { CurrentPlan, Invoice, PaymentMethod, Transaction } from "@/types";

export const currentPlan: CurrentPlan = {
  name: "Professional",
  price: "$49/month",
  renewalDate: "2026-06-15",
  status: "Active",
  includedSeats: 25,
  usedSeats: 14,
};

export const paymentMethod: PaymentMethod = {
  brand: "Visa",
  last4: "4242",
  expiry: "12/28",
  billingEmail: "billing@flowpilot.dev",
};

export const billingHistory: Invoice[] = [
  {
    id: "INV-2026-005",
    date: "2026-05-01",
    amount: 49,
    status: "Paid",
    downloadLabel: "Download PDF",
  },
  {
    id: "INV-2026-004",
    date: "2026-04-01",
    amount: 49,
    status: "Paid",
    downloadLabel: "Download PDF",
  },
  {
    id: "INV-2026-003",
    date: "2026-03-01",
    amount: 49,
    status: "Paid",
    downloadLabel: "Download PDF",
  },
  {
    id: "INV-2026-002",
    date: "2026-02-01",
    amount: 49,
    status: "Open",
    downloadLabel: "View Invoice",
  },
];

export const recentTransactions: Transaction[] = [
  {
    id: "txn_001",
    customerName: "NovaTech",
    amount: 490,
    status: "Paid",
    date: "2026-05-11",
    method: "Visa",
  },
  {
    id: "txn_002",
    customerName: "CloudPeak",
    amount: 1200,
    status: "Paid",
    date: "2026-05-09",
    method: "Bank transfer",
  },
  {
    id: "txn_003",
    customerName: "Taskly",
    amount: 19,
    status: "Pending",
    date: "2026-05-07",
    method: "Mastercard",
  },
];
