import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  CircleDollarSign,
  HelpCircle,
  Minus,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import {
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  SectionHeader,
} from "@/components";
import { faqItems, pricingComparisonRows, pricingPlans } from "@/data";
import type { PricingPlan } from "@/types";
import { cn } from "@/utils";

type BillingCycle = "monthly" | "annual";

const annualPriceByPlan: Record<string, string> = {
  starter: "$15",
  professional: "$39",
  enterprise: "Custom",
};

const pricingHighlights = [
  {
    title: "Cancel anytime",
    description: "Manage your billing easily directly from your settings.",
    icon: CircleDollarSign,
    colorClass:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/30 dark:hover:border-emerald-500/20",
  },
  {
    title: "Scale dynamically",
    description:
      "Seamlessly add team seats and unlock features as your operation grows.",
    icon: BadgeCheck,
    colorClass:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    hoverBorder: "hover:border-blue-500/30 dark:hover:border-blue-500/20",
  },
  {
    title: "Zero hidden fees",
    description:
      "Flat monthly pricing with absolutely no platform cuts or surprises.",
    icon: ShieldCheck,
    colorClass:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    hoverBorder: "hover:border-amber-500/30 dark:hover:border-amber-500/20",
  },
];

const planAccent: Record<string, string> = {
  starter: "bg-accent/10 text-accent",
  professional: "bg-primary/10 text-primary",
  enterprise: "bg-success/10 text-success",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionMotion = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
  variants: fadeUp,
};

function getPlanPrice(plan: PricingPlan, billingCycle: BillingCycle) {
  if (billingCycle === "annual") {
    return annualPriceByPlan[plan.id] ?? plan.price;
  }

  return plan.price;
}

function getBillingLabel(plan: PricingPlan, billingCycle: BillingCycle) {
  if (plan.price === "Custom") {
    return plan.billingCycle;
  }

  return billingCycle === "annual" ? "per month, billed yearly" : "per month";
}

function getPlanAction(plan: PricingPlan) {
  return plan.id === "enterprise"
    ? "mailto:sales@flowpilot.example"
    : "/register";
}

function formatComparisonValue(value: string | boolean) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-2 font-semibold text-success">
        <Check aria-hidden="true" className="size-4" />
        Included
      </span>
    );
  }

  if (value === false) {
    return (
      <span className="inline-flex items-center gap-2 text-muted-foreground">
        <X aria-hidden="true" className="size-4" />
        Not included
      </span>
    );
  }

  return <span className="font-medium text-foreground">{value}</span>;
}

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const highlightedPlan = useMemo(
    () => pricingPlans.find((plan) => plan.isPopular) ?? pricingPlans[1],
    [],
  );

  return (
    <>
      <section className="border-b border-border bg-secondary/35">
        <div className="container-shell grid gap-10 py-18 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            animate="visible"
            initial="hidden"
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
          >
            <Badge variant="info">Pricing Plans</Badge>
            <h1 className="mt-5 max-w-3xl text-heading-xl sm:text-display-md">
              Simple pricing for every stage of a growing SaaS team.
            </h1>
            <p className="mt-5 max-w-2xl text-body-lg">
              Choose a plan that fits your current workflow, then scale into
              deeper analytics, billing reports, support, and team controls when
              your operation needs more power.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-body-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                to="/register"
              >
                Start Free Trial
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <a
                className="focus-ring inline-flex h-11 items-center justify-center rounded-lg border border-border bg-background px-5 text-body-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                href="mailto:sales@flowpilot.example"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 26 }}
            transition={{ delay: 0.12, duration: 0.6, ease: "easeOut" }}
          >
            {pricingHighlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <Card
                  className={cn(
                    "transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover border-border/80 bg-card/60 backdrop-blur-sm",
                    highlight.hoverBorder,
                  )}
                  key={highlight.title}
                >
                  <CardHeader className="pb-2">
                    <div
                      className={cn(
                        "flex size-11 items-center justify-center rounded-lg border",
                        highlight.colorClass,
                      )}
                    >
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <CardTitle className="pt-4 text-heading-md font-extrabold tracking-tight text-foreground">
                      {highlight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </section>

      <motion.section className="py-18" {...sectionMotion}>
        <div className="container-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              className="md:max-w-2xl md:text-left"
              description="Pick from starter, professional, and enterprise options built from the same dashboard-ready pricing data."
              eyebrow="Plans"
              title="Choose the right workspace plan"
            />

            <div
              aria-label="Billing cycle"
              className="inline-grid grid-cols-2 rounded-lg border border-border bg-card p-1"
              role="group"
            >
              {(["monthly", "annual"] as const).map((cycle) => (
                <button
                  aria-pressed={billingCycle === cycle}
                  className={cn(
                    "focus-ring h-10 rounded-md px-4 text-body-sm font-semibold capitalize transition-colors",
                    billingCycle === cycle
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  type="button"
                >
                  {cycle === "annual" ? "Annual - save 20%" : "Monthly"}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                className={cn(
                  "relative flex h-full flex-col transition-shadow hover:shadow-card-hover",
                  plan.isPopular && "border-primary shadow-card",
                )}
                key={plan.id}
              >
                {plan.isPopular ? (
                  <div className="absolute right-5 top-5">
                    <Badge variant="default">Most Popular</Badge>
                  </div>
                ) : null}

                <CardHeader className="pb-4">
                  <div
                    className={cn(
                      "mb-4 flex size-11 items-center justify-center rounded-lg",
                      planAccent[plan.id] ?? "bg-muted text-muted-foreground",
                    )}
                  >
                    <Sparkles aria-hidden="true" className="size-5" />
                  </div>
                  <CardTitle className="pr-28 text-heading-lg">
                    {plan.name}
                  </CardTitle>
                  <p className="text-body-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex items-end gap-2">
                    <span className="text-heading-xl text-foreground">
                      {getPlanPrice(plan, billingCycle)}
                    </span>
                    <span className="pb-2 text-body-sm text-muted-foreground">
                      {getBillingLabel(plan, billingCycle)}
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {plan.features.map((feature) => (
                      <div className="flex gap-3 text-body-sm" key={feature}>
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 size-5 shrink-0 text-success"
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  {plan.id === "enterprise" ? (
                    <a
                      className="focus-ring inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 text-body-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                      href={getPlanAction(plan)}
                    >
                      {plan.ctaLabel}
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </a>
                  ) : (
                    <Link
                      className={cn(
                        "focus-ring inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg px-5 text-body-sm font-semibold transition-colors",
                        plan.isPopular
                          ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                          : "border border-border bg-background text-foreground hover:bg-secondary",
                      )}
                      to={getPlanAction(plan)}
                    >
                      {plan.ctaLabel}
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-border bg-card px-5 py-4 text-body-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Recommended:</span>{" "}
            {highlightedPlan.name} gives growing teams the strongest balance of
            advanced analytics, billing reports, more seats, and priority
            support.
          </div>
        </div>
      </motion.section>

      <motion.section
        className="border-y border-border bg-card/55 py-18"
        {...sectionMotion}
      >
        <div className="container-shell">
          <SectionHeader
            description="Compare the plan limits and capability coverage before choosing the workspace setup."
            eyebrow="Comparison"
            title="Plan details at a glance"
          />

          <div className="mt-10 overflow-hidden rounded-lg border border-border bg-background">
            <div className="overflow-x-auto">
              <table className="min-w-[760px] w-full border-collapse text-left">
                <caption className="sr-only">
                  Pricing plan comparison for Starter, Professional, and
                  Enterprise
                </caption>
                <thead>
                  <tr className="border-b border-border bg-secondary/60">
                    <th className="px-5 py-4 text-body-sm font-semibold text-foreground">
                      Feature
                    </th>
                    <th className="px-5 py-4 text-body-sm font-semibold text-foreground">
                      Starter
                    </th>
                    <th className="px-5 py-4 text-body-sm font-semibold text-foreground">
                      Professional
                    </th>
                    <th className="px-5 py-4 text-body-sm font-semibold text-foreground">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingComparisonRows.map((row) => (
                    <tr
                      className="border-b border-border last:border-b-0"
                      key={row.feature}
                    >
                      <th className="px-5 py-4 text-body-sm font-semibold text-foreground">
                        {row.feature}
                      </th>
                      <td className="px-5 py-4 text-body-sm text-muted-foreground">
                        {formatComparisonValue(row.starter)}
                      </td>
                      <td className="px-5 py-4 text-body-sm text-muted-foreground">
                        {formatComparisonValue(row.professional)}
                      </td>
                      <td className="px-5 py-4 text-body-sm text-muted-foreground">
                        {formatComparisonValue(row.enterprise)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="py-18" {...sectionMotion}>
        <div className="container-shell">
          <SectionHeader
            description="Short answers for the pricing questions most teams ask before starting."
            eyebrow="FAQ"
            title="Pricing questions, answered"
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqItems.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle
                      aria-hidden="true"
                      className="mt-1 size-5 shrink-0 text-primary"
                    />
                    <CardTitle>{item.question}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-body-sm">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative overflow-hidden border-t border-border bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-card/40 dark:to-background/60 py-16 text-white"
        {...sectionMotion}
      >
        {/* Soft glowing ambient lighting effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent)]" />

        {/* Deep, glowing blue spotlight glow - ONLY VISIBLE IN DARK MODE */}
        <div className="hidden dark:block absolute right-1/4 top-1/2 size-[500px] -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/12 via-accent/8 to-transparent opacity-75 blur-3xl -z-10" />

        <div className="container-shell relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-white/12 text-white border-none dark:bg-primary/10 dark:text-primary dark:border dark:border-primary/20 px-3 py-1 text-caption font-semibold">
              <Minus aria-hidden="true" className="size-4" />
              No setup delay
            </div>
            <h2 className="mt-5 max-w-2xl text-heading-xl font-extrabold tracking-tight text-white dark:text-foreground">
              Start with the right plan and grow into the full dashboard.
            </h2>
          </div>
          <Link
            className="focus-ring inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-white dark:bg-primary px-5 text-body-sm font-bold text-blue-600 dark:text-primary-foreground shadow-md shadow-black/10 dark:shadow-primary/15 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/15 dark:hover:shadow-primary/25"
            to="/register"
          >
            Create Workspace
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </motion.section>
    </>
  );
}
