import { ArrowUpRight } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/common";
import { CustomerTable } from "@/components/tables";
import { recentCustomers } from "@/data";
import type { Customer } from "@/types";

interface RecentCustomersTableProps {
  customers?: Customer[];
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
        <CustomerTable customers={customers} showActions={false} />
      </CardContent>
    </Card>
  );
}
