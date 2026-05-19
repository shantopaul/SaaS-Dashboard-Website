import {
  AlertTriangle,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  Download,
  Mail,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { useToastStore } from "@/store/toastStore";
import {
  billingHistory,
  currentPlan,
  paymentMethod,
  pricingPlans,
} from "@/data";
import type { Invoice } from "@/types";
import { cn } from "@/utils";

// ─── helpers ────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function invoiceBadgeVariant(status: Invoice["status"]) {
  if (status === "Paid") return "success";
  if (status === "Failed") return "danger";
  return "warning";
}

// ─── Current Plan Card ───────────────────────────────────────────────────────

function CurrentPlanCard() {
  const showToast = useToastStore((s) => s.showToast);
  const seatsPercent = Math.round(
    (currentPlan.usedSeats / currentPlan.includedSeats) * 100,
  );

  const statusVariant =
    currentPlan.status === "Active"
      ? "success"
      : currentPlan.status === "Past Due"
        ? "danger"
        : "warning";

  const handleCancel = () => {
    showToast({
      title: "Subscription management",
      description:
        "Please contact support to cancel or modify your subscription.",
      variant: "info",
    });
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mb-1 text-caption font-semibold uppercase tracking-wider text-muted-foreground">
            Current Plan
          </p>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-foreground">
              {currentPlan.name}
            </h2>
            <Badge variant={statusVariant}>{currentPlan.status}</Badge>
          </div>
          <p className="mt-1 text-body-sm text-muted-foreground">
            {currentPlan.price} &bull; renews{" "}
            {formatDate(currentPlan.renewalDate)}
          </p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={handleCancel}>
            Cancel plan
          </Button>
        </div>
      </div>

      {/* Seat usage bar */}
      <div>
        <div className="mb-2 flex items-center justify-between text-body-sm">
          <span className="flex items-center gap-1.5 font-medium text-foreground">
            <Users className="size-4 text-muted-foreground" />
            Team seats used
          </span>
          <span className="font-semibold text-foreground">
            {currentPlan.usedSeats} / {currentPlan.includedSeats}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className={cn(
              "h-full rounded-full transition-all",
              seatsPercent >= 90
                ? "bg-destructive"
                : seatsPercent >= 70
                  ? "bg-warning"
                  : "bg-primary",
            )}
            style={{ width: `${seatsPercent}%` }}
            role="progressbar"
            aria-valuenow={currentPlan.usedSeats}
            aria-valuemin={0}
            aria-valuemax={currentPlan.includedSeats}
          />
        </div>
        <p className="mt-1.5 text-caption text-muted-foreground">
          {currentPlan.includedSeats - currentPlan.usedSeats} seats remaining
        </p>
      </div>
    </div>
  );
}

// ─── Payment Method Card ─────────────────────────────────────────────────────

const cardGradients: Record<string, string> = {
  Visa: "from-blue-600 to-blue-800",
  Mastercard: "from-orange-500 to-red-600",
  Amex: "from-slate-600 to-slate-800",
};

function PaymentMethodCard() {
  const showToast = useToastStore((s) => s.showToast);

  const handleUpdate = () => {
    showToast({
      title: "Payment method update",
      description:
        "Billing portal integration is required to update payment details.",
      variant: "info",
    });
  };

  const gradient =
    cardGradients[paymentMethod.brand] ?? "from-slate-600 to-slate-800";

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="mb-1 text-caption font-semibold uppercase tracking-wider text-muted-foreground">
            Payment Method
          </p>
          <h2 className="text-lg font-bold text-foreground">Saved card</h2>
        </div>
        <Button size="sm" variant="outline" onClick={handleUpdate}>
          Update
        </Button>
      </div>

      {/* Credit card visual */}
      <div
        className={cn(
          "relative mb-5 aspect-video max-w-xs overflow-hidden rounded-2xl bg-gradient-to-br p-5 text-white shadow-md",
          gradient,
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest opacity-80">
            FLOWPILOT
          </span>
          <CreditCard className="size-5 opacity-70" aria-hidden />
        </div>
        <p className="mb-4 font-mono text-base tracking-[0.25em] opacity-90">
          •••• •••• •••• {paymentMethod.last4}
        </p>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase opacity-60">Expires</p>
            <p className="text-sm font-semibold">{paymentMethod.expiry}</p>
          </div>
          <p className="text-sm font-bold">{paymentMethod.brand}</p>
        </div>
      </div>

      {/* Billing email */}
      <div className="flex items-center gap-2 text-body-sm text-muted-foreground">
        <Mail className="size-4 shrink-0" />
        <span>Billing email: </span>
        <span className="font-medium text-foreground">
          {paymentMethod.billingEmail}
        </span>
      </div>
    </div>
  );
}

// ─── Billing History Table ───────────────────────────────────────────────────

function BillingHistoryTable() {
  const showToast = useToastStore((s) => s.showToast);

  const handleDownload = (invoiceId: string) => {
    showToast({
      title: "Invoice download",
      description: `${invoiceId} would be downloaded as a PDF in a live integration.`,
      variant: "success",
    });
  };

  return (
    <div className="rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Billing History
          </h2>
          <p className="text-body-sm text-muted-foreground">
            Download past invoices for your records.
          </p>
        </div>
        <Button
          size="sm"
          variant="outline"
          leftIcon={<Download className="size-4" />}
          onClick={() =>
            showToast({
              title: "Export invoices",
              description:
                "Exporting all invoices as CSV requires a live billing integration.",
              variant: "info",
            })
          }
        >
          Export all
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-6 py-3 text-left text-caption font-semibold uppercase tracking-wider text-muted-foreground">
                Invoice
              </th>
              <th className="px-6 py-3 text-left text-caption font-semibold uppercase tracking-wider text-muted-foreground">
                Date
              </th>
              <th className="px-6 py-3 text-left text-caption font-semibold uppercase tracking-wider text-muted-foreground">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-caption font-semibold uppercase tracking-wider text-muted-foreground">
                Status
              </th>
              <th className="px-6 py-3 text-right text-caption font-semibold uppercase tracking-wider text-muted-foreground">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {billingHistory.map((invoice) => (
              <tr
                key={invoice.id}
                className="transition-colors hover:bg-muted/20"
              >
                <td className="px-6 py-4 font-mono text-sm font-medium text-foreground">
                  {invoice.id}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="size-3.5 shrink-0" aria-hidden />
                    {formatDate(invoice.date)}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-foreground">
                  ${invoice.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <Badge variant={invoiceBadgeVariant(invoice.status)}>
                    {invoice.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <Button
                    size="sm"
                    variant="ghost"
                    leftIcon={<Download className="size-3.5" />}
                    onClick={() => handleDownload(invoice.id)}
                  >
                    {invoice.downloadLabel}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Upgrade Plan Section ────────────────────────────────────────────────────

const planIcons: Record<string, typeof Zap> = {
  starter: Shield,
  professional: Zap,
  enterprise: ArrowUpRight,
};

function UpgradePlanSection() {
  const showToast = useToastStore((s) => s.showToast);

  const upgradablePlans = pricingPlans.filter(
    (p) => p.id !== currentPlan.name.toLowerCase(),
  );

  const handleSelect = (planName: string) => {
    if (planName === "Enterprise") {
      showToast({
        title: "Enterprise inquiry",
        description:
          "Our sales team will reach out to discuss your custom plan.",
        variant: "info",
      });
    } else {
      showToast({
        title: "Plan upgrade",
        description: `Switching to ${planName} requires payment confirmation in a live integration.`,
        variant: "info",
      });
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card shadow-sm">
      <div className="border-b border-border px-6 py-4">
        <h2 className="text-base font-semibold text-foreground">
          Upgrade Your Plan
        </h2>
        <p className="text-body-sm text-muted-foreground">
          Unlock more features by moving to a higher-tier plan.
        </p>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {upgradablePlans.map((plan) => {
          const Icon = planIcons[plan.id] ?? Zap;
          const isCurrent =
            plan.name.toLowerCase() === currentPlan.name.toLowerCase();

          return (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-xl border p-5 transition-shadow hover:shadow-md",
                isCurrent
                  ? "border-primary bg-primary/5"
                  : "border-border bg-background",
                plan.isPopular && !isCurrent
                  ? "border-primary/40 ring-1 ring-primary/20"
                  : "",
              )}
            >
              {plan.isPopular && (
                <span className="absolute -top-3 left-4 rounded-full bg-primary px-3 py-0.5 text-[11px] font-semibold text-primary-foreground shadow-sm">
                  Most Popular
                </span>
              )}

              <div className="mb-3 flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="font-semibold text-foreground">
                  {plan.name}
                </span>
              </div>

              <p className="mb-1 text-2xl font-bold text-foreground">
                {plan.price}
                {plan.price !== "Custom" && (
                  <span className="text-sm font-normal text-muted-foreground">
                    {" "}
                    /mo
                  </span>
                )}
              </p>
              <p className="mb-4 text-body-sm text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mb-5 flex flex-col gap-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-body-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      className="size-4 shrink-0 text-success"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="mt-auto w-full"
                disabled={isCurrent}
                variant={isCurrent ? "secondary" : "outline"}
                onClick={() => handleSelect(plan.name)}
              >
                {isCurrent ? "Current plan" : plan.ctaLabel}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export function BillingPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <section>
        <p className="mb-1 text-body-sm font-medium text-muted-foreground">
          Manage your subscription, payment details, and billing history.
        </p>
        <h1 className="text-heading-lg">Billing</h1>
      </section>

      {/* Top two cards: current plan + payment method */}
      <div className="grid gap-6 lg:grid-cols-2">
        <CurrentPlanCard />
        <PaymentMethodCard />
      </div>

      {/* Billing history table */}
      <BillingHistoryTable />

      {/* Upgrade plan section */}
      <UpgradePlanSection />

      {/* Security note */}
      <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/30 px-5 py-4 text-body-sm text-muted-foreground">
        <AlertTriangle
          className="mt-0.5 size-4 shrink-0 text-warning"
          aria-hidden
        />
        <span>
          All billing operations in this interface are{" "}
          <span className="font-semibold text-foreground">UI-only</span>. No
          actual charges or changes will be made. A live integration with a
          payment provider such as Stripe would handle real transactions.
        </span>
      </div>
    </div>
  );
}
