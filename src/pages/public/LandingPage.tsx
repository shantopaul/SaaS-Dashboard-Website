import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CreditCard,
  FileBarChart,
  LockKeyhole,
  MessageSquare,
  MousePointerClick,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  SunMoon,
  TrendingUp,
  UsersRound,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  SectionHeader,
} from "@/components";
import {
  dashboardStats,
  featureItems,
  monthlySalesData,
  pricingPlans,
  recentCustomers,
  revenueData,
  testimonials,
} from "@/data";
import { cn } from "@/utils";

const trustedBrands = [
  "NovaTech",
  "CloudPeak",
  "BrightLabs",
  "Taskly",
  "MarketFlow",
];

const featureIconMap: Record<string, LucideIcon> = {
  Activity,
  CreditCard,
  FileBarChart,
  MessagesSquare: MessageSquare,
  ReceiptText,
  ShieldCheck,
  SunMoon,
  TrendingUp,
  UsersRound,
};

const benefitItems = [
  "Track product, revenue, and customer momentum from one interface.",
  "Give teams a polished dashboard pattern they can understand quickly.",
  "Use consistent public and dashboard foundations for faster feature delivery.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionMotion = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.55, ease: "easeOut" as const },
  variants: fadeUp,
};

export function LandingPage() {
  const highlightedFeatures = featureItems.slice(0, 6);
  const popularPlan =
    pricingPlans.find((plan) => plan.isPopular) ?? pricingPlans[1];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_15%,hsl(var(--primary)/0.14),transparent_34%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--secondary)/0.55))]" />
        <div className="container-shell grid min-h-[calc(100vh-5rem)] content-center gap-10 py-16 lg:py-20">
          <motion.div
            animate="visible"
            className="mx-auto max-w-4xl text-center"
            initial="hidden"
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
          >
            <Badge variant="info">Modern SaaS dashboard website</Badge>
            <h1 className="mt-6 text-display-md sm:text-display-lg">
              FlowPilot SaaS Dashboard
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-body-lg">
              Track performance, monitor revenue, manage customers, and make
              better business decisions from one beautiful dashboard.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-body-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                to="/register"
              >
                Start Free Trial
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                className="focus-ring inline-flex h-11 items-center justify-center rounded-lg border border-border bg-background px-5 text-body-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                to="/dashboard"
              >
                View Demo
              </Link>
            </div>
          </motion.div>

          <motion.div
            animate="visible"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }}
          >
            <DashboardPreview />
          </motion.div>
        </div>
      </section>

      <motion.section
        className="border-b border-border bg-card/45 py-8"
        {...sectionMotion}
      >
        <div className="container-shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-body-sm font-semibold text-muted-foreground">
              Trusted by focused teams building cleaner operations
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {trustedBrands.map((brand) => (
                <div
                  className="rounded-md border border-border bg-background px-4 py-3 text-center text-body-sm font-bold text-foreground"
                  key={brand}
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="py-18" {...sectionMotion}>
        <div className="container-shell">
          <SectionHeader
            description="FlowPilot brings the most important business signals into one reusable, polished SaaS interface."
            eyebrow="Feature highlights"
            title="Everything a modern team needs to understand growth"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highlightedFeatures.map((feature) => {
              const Icon = featureIconMap[feature.iconName] ?? Sparkles;

              return (
                <Card
                  className="transition-shadow hover:shadow-card-hover"
                  key={feature.id}
                >
                  <CardHeader>
                    <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="border-y border-border bg-secondary/45 py-18"
        {...sectionMotion}
      >
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge variant="default">Analytics preview</Badge>
            <h2 className="mt-5 text-heading-xl">
              See revenue, customers, and conversion movement at a glance.
            </h2>
            <p className="mt-4 text-body-lg">
              A clear dashboard preview gives clients an immediate sense of the
              product: metrics first, charts second, and customer activity close
              enough for action.
            </p>
            <div className="mt-6 grid gap-3">
              {benefitItems.map((item) => (
                <div className="flex gap-3 text-body-sm" key={item}>
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-success"
                  />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <AnalyticsPreview />
        </div>
      </motion.section>

      <motion.section className="py-18" {...sectionMotion}>
        <div className="container-shell">
          <SectionHeader
            description="The interface is designed for teams that need to scan, compare, and act without fighting the UI."
            eyebrow="Benefits"
            title="A dashboard experience built for repeated work"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Fast to scan",
                description:
                  "Dense but calm sections help stakeholders compare revenue, usage, and customer status quickly.",
              },
              {
                icon: ShieldCheck,
                title: "Client-ready polish",
                description:
                  "Consistent tokens, spacing, cards, tables, and forms make the project feel cohesive from the start.",
              },
              {
                icon: LockKeyhole,
                title: "Ready for app flows",
                description:
                  "Public pages, auth routes, protected dashboards, settings, and billing all have a clear path forward.",
              },
            ].map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader>
                  <benefit.icon
                    aria-hidden="true"
                    className="size-6 text-primary"
                  />
                  <CardTitle className="pt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="border-y border-border bg-card/55 py-18"
        {...sectionMotion}
      >
        <div className="container-shell">
          <SectionHeader
            description="Short, realistic feedback makes the SaaS story feel grounded and client-facing."
            eyebrow="Testimonials"
            title="Loved by teams that care about clean reporting"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <CardContent className="pt-5">
                  <p className="text-body-md text-foreground">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-body-sm font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-caption text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-18" {...sectionMotion}>
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge variant="warning">Pricing preview</Badge>
            <h2 className="mt-5 text-heading-xl">
              Start small, then grow into deeper analytics.
            </h2>
            <p className="mt-4 text-body-lg">
              The full pricing page comes later, but the landing page gives a
              quick path into the recommended plan and the complete pricing
              route.
            </p>
            <Link
              className="focus-ring mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 text-body-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              to="/pricing"
            >
              Compare all plans
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <Card className="border-primary/35">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge variant="default">Most Popular</Badge>
                  <CardTitle className="pt-4">{popularPlan.name}</CardTitle>
                </div>
                <p className="text-heading-lg text-primary">
                  {popularPlan.price}
                </p>
              </div>
              <p className="text-body-sm text-muted-foreground">
                {popularPlan.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {popularPlan.features.map((feature) => (
                  <div
                    className="flex items-center gap-3 text-body-sm"
                    key={feature}
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="size-5 text-success"
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                className="focus-ring mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary px-5 text-body-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                to="/register"
              >
                {popularPlan.ctaLabel}
              </Link>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <motion.section
        className="border-t border-border bg-primary py-18 text-primary-foreground"
        {...sectionMotion}
      >
        <div className="container-shell text-center">
          <h2 className="mx-auto max-w-3xl text-heading-xl text-primary-foreground">
            Ready to grow your business with smarter analytics?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-primary-foreground/78">
            Start your free trial today and explore the dashboard foundation
            built for modern SaaS teams.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="focus-ring inline-flex h-11 items-center justify-center rounded-lg bg-primary-foreground px-5 text-body-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
              to="/register"
            >
              Start Free Trial
            </Link>
            <Link
              className="focus-ring inline-flex h-11 items-center justify-center rounded-lg border border-primary-foreground/30 px-5 text-body-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              to="/dashboard"
            >
              View Demo
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}

function DashboardPreview() {
  return (
    <div className="mx-auto w-full max-w-6xl rounded-xl border border-border bg-card p-3 shadow-card">
      <div className="rounded-lg border border-border bg-background p-4">
        <div className="mb-5 flex items-center justify-between gap-4 border-b border-border pb-4">
          <div>
            <p className="text-caption font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Live overview
            </p>
            <h2 className="mt-1 text-heading-md">Business command center</h2>
          </div>
          <Badge variant="success">Live</Badge>
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {dashboardStats.map((stat) => (
            <div
              className="rounded-lg border border-border bg-card p-4"
              key={stat.id}
            >
              <p className="text-caption font-semibold text-muted-foreground">
                {stat.title}
              </p>
              <p className="mt-2 text-heading-md">{stat.value}</p>
              <p
                className={cn(
                  "mt-2 text-caption font-semibold",
                  stat.trend === "up" ? "text-success" : "text-destructive",
                )}
              >
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-body-sm font-semibold">Revenue growth</p>
              <TrendingUp aria-hidden="true" className="size-5 text-success" />
            </div>
            <div className="flex h-44 items-end gap-2">
              {revenueData.map((item) => (
                <div
                  className="flex flex-1 flex-col items-center gap-2"
                  key={item.month}
                >
                  <div
                    className="w-full rounded-t-md bg-primary"
                    style={{ height: `${Math.max(18, item.revenue / 900)}%` }}
                  />
                  <span className="text-caption text-muted-foreground">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-body-sm font-semibold">Recent customers</p>
              <UsersRound aria-hidden="true" className="size-5 text-primary" />
            </div>
            <div className="grid gap-3">
              {recentCustomers.slice(0, 4).map((customer) => (
                <div
                  className="flex items-center justify-between gap-3"
                  key={customer.id}
                >
                  <div>
                    <p className="text-body-sm font-semibold text-foreground">
                      {customer.company}
                    </p>
                    <p className="text-caption text-muted-foreground">
                      {customer.plan}
                    </p>
                  </div>
                  <Badge
                    variant={customer.status === "Active" ? "success" : "muted"}
                  >
                    {customer.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsPreview() {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-card">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-caption font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Monthly sales
          </p>
          <h3 className="mt-1 text-heading-md">Performance snapshot</h3>
        </div>
        <BarChart3 aria-hidden="true" className="size-6 text-primary" />
      </div>
      <div className="grid gap-5 md:grid-cols-[1fr_0.75fr]">
        <div className="flex h-64 items-end gap-3 rounded-lg border border-border bg-background p-4">
          {monthlySalesData.map((item) => (
            <div
              className="flex flex-1 flex-col items-center gap-2"
              key={item.month}
            >
              <div
                className="w-full rounded-t-md bg-accent"
                style={{ height: `${Math.max(14, item.sales / 7)}%` }}
              />
              <span className="text-caption text-muted-foreground">
                {item.month}
              </span>
            </div>
          ))}
        </div>
        <div className="grid gap-3">
          {[
            {
              label: "Trial conversion",
              value: "8.4%",
              icon: MousePointerClick,
            },
            { label: "Invoices paid", value: "$84.2k", icon: ReceiptText },
            { label: "Reports ready", value: "24", icon: FileBarChart },
          ].map((item) => (
            <div
              className="rounded-lg border border-border bg-background p-4"
              key={item.label}
            >
              <item.icon
                aria-hidden="true"
                className="mb-4 size-5 text-primary"
              />
              <p className="text-heading-md">{item.value}</p>
              <p className="text-caption text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
