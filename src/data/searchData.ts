import {
  billingHistory,
  dashboardNavigationItems,
  recentCustomers,
  recentTransactions,
} from "@/data";
import type { SearchResultItem } from "@/types";

const pageResults: SearchResultItem[] = dashboardNavigationItems.map(
  (item) => ({
    description: `Open the ${item.label.toLowerCase()} dashboard page.`,
    href: item.href,
    id: `page-${item.href}`,
    keywords: `${item.label} ${item.href}`,
    title: item.label,
    type: "page",
  }),
);

const customerResults: SearchResultItem[] = recentCustomers.map((customer) => ({
  description: `${customer.company} - ${customer.plan} plan - ${customer.status}`,
  href: "/dashboard",
  id: `customer-${customer.id}`,
  keywords: `${customer.name} ${customer.email} ${customer.company} ${customer.plan} ${customer.status}`,
  title: customer.name,
  type: "customer",
}));

const invoiceResults: SearchResultItem[] = billingHistory.map((invoice) => ({
  description: `${invoice.status} invoice for $${invoice.amount} from ${invoice.date}`,
  href: "/dashboard/billing",
  id: `invoice-${invoice.id}`,
  keywords: `${invoice.id} ${invoice.status} ${invoice.amount} ${invoice.date}`,
  title: invoice.id,
  type: "invoice",
}));

const transactionResults: SearchResultItem[] = recentTransactions.map(
  (transaction) => ({
    description: `${transaction.status} payment via ${transaction.method}`,
    href: "/dashboard/billing",
    id: `transaction-${transaction.id}`,
    keywords: `${transaction.customerName} ${transaction.status} ${transaction.method} ${transaction.amount}`,
    title: transaction.customerName,
    type: "transaction",
  }),
);

const reportResults: SearchResultItem[] = [
  {
    description: "Revenue, forecast, and customer growth trends.",
    href: "/dashboard/analytics",
    id: "report-revenue-analytics",
    keywords: "revenue analytics forecast growth report",
    title: "Revenue analytics report",
    type: "report",
  },
  {
    description: "Traffic sources, device mix, and conversion funnel.",
    href: "/dashboard/analytics",
    id: "report-traffic-conversion",
    keywords: "traffic conversion funnel device source report",
    title: "Traffic and conversion report",
    type: "report",
  },
  {
    description: "Billing activity, invoices, and recent transactions.",
    href: "/dashboard/billing",
    id: "report-billing-activity",
    keywords: "billing invoice transaction payment report",
    title: "Billing activity report",
    type: "report",
  },
];

export const dashboardSearchItems: SearchResultItem[] = [
  ...pageResults,
  ...customerResults,
  ...invoiceResults,
  ...transactionResults,
  ...reportResults,
];
