import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
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
  "Track revenue, customers, and product performance from a single, unified view.",
  "Give stakeholders clean, scannable reports they can act on immediately.",
  "Move faster with a consistent design system across public pages and the full dashboard.",
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
        {/* Futuristic Grid Pattern & Glowing Ambient Backdrops */}
        <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
          {/* Main Primary Glow (centered top) */}
          <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.18)_0%,transparent_65%)] blur-[80px]" />
          {/* Accent Glow (bottom-left) */}
          <div className="absolute -left-20 bottom-10 h-[450px] w-[700px] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.12)_0%,transparent_65%)] blur-[70px]" />
          {/* Secondary Soft Ambient Wave */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
          {/* High-tech Blueprint Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.16)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.16)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container-shell flex flex-col items-center justify-center gap-10 pt-20 pb-16 text-center">
          <motion.div
            animate="visible"
            className="mx-auto flex max-w-4xl flex-col items-center text-center"
            initial="hidden"
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
          >
            {/* Sleek Glowing Glassmorphic Pill */}
            <div className="mx-auto mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-primary/12">
              <Sparkles
                aria-hidden="true"
                className="size-3.5 animate-pulse text-primary"
              />
              <span>Built for modern SaaS teams</span>
            </div>

            {/* Premium Dynamic Glowing Gradient Title */}
            <h1 className="mt-6 text-display-md font-extrabold tracking-tight text-foreground pb-2 sm:text-display-lg">
              The analytics dashboard your team will{" "}
              <span className="bg-gradient-to-r from-primary via-indigo-500 to-accent bg-clip-text text-transparent">
                actually use
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-body-lg text-muted-foreground">
              Track performance, manage customers, monitor revenue, and make
              smarter decisions — all from one beautifully designed dashboard.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                className="focus-ring group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-body-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-xl hover:shadow-primary/25 active:translate-y-0"
                to="/register"
              >
                Start Free Trial
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                className="focus-ring inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background/60 px-6 text-body-sm font-semibold text-foreground shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground active:translate-y-0"
                to="/dashboard"
              >
                View Demo
              </Link>
            </div>

            {/* Centered Chevron Scroll Down Button directly below CTAs */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  document
                    .getElementById("trusted-brands-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="focus-ring group flex size-12 items-center justify-center rounded-full border border-border bg-background/60 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-background/80 hover:shadow-md"
                aria-label="Scroll to next section"
              >
                <ChevronDown className="size-5 text-muted-foreground transition-colors group-hover:text-primary animate-bounce" />
              </button>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="relative w-full min-w-0 max-w-5xl mt-6 rounded-2xl border border-border/80 bg-background/60 p-2 shadow-2xl shadow-primary/8 backdrop-blur-md"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }}
          >
            {/* Soft Glowing Ambient Halo behind the Dashboard Mockup */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/20 via-accent/20 to-primary/10 opacity-40 blur-xl -z-10" />
            <DashboardPreview />
          </motion.div>
        </div>
      </section>

      <motion.section
        id="trusted-brands-section"
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
            description="Everything your team needs to monitor growth, manage customers, and close the loop on revenue — in one interface."
            eyebrow="Feature highlights"
            title="Built for the metrics that actually move your business"
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
            description="Every surface — from the metrics grid to the billing table — is designed to reduce decision time, not add to it."
            eyebrow="Benefits"
            title="A dashboard your whole team will trust"
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
            description="Real teams. Real outcomes. Here is what they said after switching to a FlowPilot-style workflow."
            eyebrow="Testimonials"
            title="Trusted by teams that care about clean data"
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
            <Badge variant="warning">Simple, transparent pricing</Badge>
            <h2 className="mt-5 text-heading-xl">
              Start small. Scale when you're ready.
            </h2>
            <p className="mt-4 text-body-lg">
              Choose the plan that fits where your team is today. Upgrade any
              time as your reporting needs grow.
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
            Ready to get clear on your numbers?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-primary-foreground/78">
            Start your free trial and give your team a dashboard they will
            actually open every morning.
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
    <div className="mx-auto w-full min-w-0 max-w-6xl rounded-xl border border-border bg-card p-2 sm:p-3 shadow-card">
      <div className="w-full rounded-lg border border-border bg-background p-3 sm:p-4">
        <div className="mb-4 flex items-center justify-between gap-4 border-b border-border pb-3 sm:pb-4">
          <div>
            <p className="text-[10px] sm:text-caption font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Live overview
            </p>
            <h2 className="mt-1 text-sm sm:text-heading-md font-bold text-foreground">
              Business command center
            </h2>
          </div>
          <Badge variant="success">Live</Badge>
        </div>

        <div className="grid gap-2 sm:gap-3 grid-cols-2 md:grid-cols-4">
          {dashboardStats.map((stat) => (
            <div
              className="rounded-lg border border-border bg-card p-2.5 sm:p-4"
              key={stat.id}
            >
              <p className="text-[10px] sm:text-caption font-semibold text-muted-foreground truncate">
                {stat.title}
              </p>
              <p className="mt-1 sm:mt-2 text-sm sm:text-heading-md font-bold text-foreground">
                {stat.value}
              </p>
              <p
                className={cn(
                  "mt-1 sm:mt-2 text-[10px] sm:text-caption font-semibold",
                  stat.trend === "up" ? "text-success" : "text-destructive",
                )}
              >
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-lg border border-border bg-card p-3 sm:p-4">
            <div className="mb-3 sm:mb-4 flex items-center justify-between">
              <p className="text-xs sm:text-body-sm font-semibold">
                Revenue growth
              </p>
              <TrendingUp
                aria-hidden="true"
                className="size-4 sm:size-5 text-success"
              />
            </div>
            <div className="flex h-36 sm:h-44 items-end gap-1.5 sm:gap-2">
              {revenueData.map((item) => (
                <div
                  className="flex flex-1 flex-col items-center gap-1.5 sm:gap-2"
                  key={item.month}
                >
                  <div
                    className="w-full rounded-t bg-primary"
                    style={{ height: `${Math.max(18, item.revenue / 900)}%` }}
                  />
                  <span className="text-[10px] sm:text-caption text-muted-foreground">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-3 sm:p-4">
            <div className="mb-3 sm:mb-4 flex items-center justify-between">
              <p className="text-xs sm:text-body-sm font-semibold">
                Recent customers
              </p>
              <UsersRound
                aria-hidden="true"
                className="size-4 sm:size-5 text-primary"
              />
            </div>
            <div className="grid gap-2 sm:gap-3">
              {recentCustomers.slice(0, 4).map((customer) => (
                <div
                  className="flex items-center justify-between gap-2 sm:gap-3"
                  key={customer.id}
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs sm:text-body-sm font-semibold text-foreground">
                      {customer.company}
                    </p>
                    <p className="truncate text-[10px] sm:text-caption text-muted-foreground">
                      {customer.plan}
                    </p>
                  </div>
                  <Badge
                    className="text-[10px] sm:text-xs"
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
