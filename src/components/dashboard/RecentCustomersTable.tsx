import { ArrowUpRight } from "lucide-react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/common";
import { recentCustomers } from "@/data";
import type { Customer } from "@/types";

interface RecentCustomersTableProps {
  customers?: Customer[];
}

const statusVariant: Record<
  Customer["status"],
  "success" | "warning" | "danger"
> = {
  Active: "success",
  Pending: "warning",
  Cancelled: "danger",
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    currency: "USD",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
  }).format(new Date(value));
}

export function RecentCustomersTable({
  customers = recentCustomers,
}: RecentCustomersTableProps) {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <CardTitle className="text-base font-semibold">
            Recent Customers
          </CardTitle>
          <CardDescription>
            Latest signups and subscription revenue by account.
          </CardDescription>
        </div>
        <Button
          aria-label="View all customers"
          rightIcon={<ArrowUpRight className="size-4" aria-hidden="true" />}
          size="sm"
          variant="outline"
        >
          View all
        </Button>
      </CardHeader>
      <CardContent>
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">Recent customers</caption>
            <thead>
              <tr className="border-b border-border text-caption uppercase text-muted-foreground">
                <th className="pb-3 font-semibold" scope="col">
                  Customer
                </th>
                <th className="pb-3 font-semibold" scope="col">
                  Plan
                </th>
                <th className="pb-3 font-semibold" scope="col">
                  Status
                </th>
                <th className="pb-3 font-semibold" scope="col">
                  Joined
                </th>
                <th className="pb-3 text-right font-semibold" scope="col">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="transition-colors hover:bg-muted/40"
                >
                  <td className="py-4 pr-4">
                    <div className="font-medium text-foreground">
                      {customer.name}
                    </div>
                    <div className="text-caption text-muted-foreground">
                      {customer.company} · {customer.email}
                    </div>
                  </td>
                  <td className="py-4 pr-4 text-muted-foreground">
                    {customer.plan}
                  </td>
                  <td className="py-4 pr-4">
                    <Badge variant={statusVariant[customer.status]}>
                      {customer.status}
                    </Badge>
                  </td>
                  <td className="py-4 pr-4 text-muted-foreground">
                    <time dateTime={customer.joinedDate}>
                      {formatDate(customer.joinedDate)}
                    </time>
                  </td>
                  <td className="py-4 text-right font-semibold text-foreground">
                    {formatCurrency(customer.revenue)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-3 md:hidden">
          {customers.map((customer) => (
            <article
              key={customer.id}
              className="rounded-lg border border-border bg-background p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-foreground">
                    {customer.name}
                  </h3>
                  <p className="mt-1 truncate text-caption text-muted-foreground">
                    {customer.company}
                  </p>
                </div>
                <Badge variant={statusVariant[customer.status]}>
                  {customer.status}
                </Badge>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-caption">
                <div>
                  <p className="font-semibold uppercase text-muted-foreground">
                    Plan
                  </p>
                  <p className="mt-1 text-foreground">{customer.plan}</p>
                </div>
                <div>
                  <p className="font-semibold uppercase text-muted-foreground">
                    Revenue
                  </p>
                  <p className="mt-1 text-foreground">
                    {formatCurrency(customer.revenue)}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold uppercase text-muted-foreground">
                    Joined
                  </p>
                  <time
                    className="mt-1 block text-foreground"
                    dateTime={customer.joinedDate}
                  >
                    {formatDate(customer.joinedDate)}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
