import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  DatabaseZap,
  FileBarChart,
  Layers3,
  LockKeyhole,
  MessageSquare,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  SunMoon,
  TrendingUp,
  UsersRound,
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
import { featureItems } from "@/data";

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

const detailedSections = [
  {
    icon: DatabaseZap,
    title: "Real-time operating view",
    description:
      "Give teams a single interface for reading the health of revenue, acquisition, customer status, and workspace activity.",
    points: [
      "Live KPI cards",
      "Revenue and sales trends",
      "Customer lifecycle visibility",
    ],
  },
  {
    icon: Layers3,
    title: "Reusable dashboard patterns",
    description:
      "Build pages from shared primitives so the marketing site, forms, dashboard panels, and tables all feel connected.",
    points: [
      "Consistent cards and controls",
      "Typed sample data",
      "Responsive layout foundations",
    ],
  },
  {
    icon: LockKeyhole,
    title: "Account-ready workflows",
    description:
      "Prepare the app for authentication, billing, profile management, settings, and security preferences.",
    points: [
      "Protected route structure",
      "Billing and invoice data",
      "Settings-ready form patterns",
    ],
  },
];

const capabilityGroups = [
  "Analytics dashboards",
  "Customer management",
  "Billing reports",
  "Workspace settings",
  "Profile management",
  "Notification UI",
  "Search experience",
  "Dark and light mode",
];

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

export function FeaturesPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/35">
        <div className="container-shell grid gap-10 py-18 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            animate="visible"
            initial="hidden"
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
          >
            <Badge variant="info">Product Features</Badge>
            <h1 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight leading-[1.15] text-foreground sm:text-heading-xl md:text-display-md">
              Everything FlowPilot needs to feel like a real SaaS product.
            </h1>
            <p className="mt-5 max-w-2xl text-body-lg">
              Explore the core capabilities behind the dashboard: analytics,
              revenue tracking, customer management, billing, reports, account
              security, and theme-ready interface foundations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                className="focus-ring inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-5 text-body-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02]"
                to="/register"
              >
                Start Free Trial
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                className="focus-ring inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-lg border border-border bg-background px-5 text-body-sm font-semibold text-foreground transition-all duration-300 hover:bg-secondary hover:scale-[1.02]"
                to="/pricing"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-3 sm:grid-cols-2"
            initial={{ opacity: 0, y: 26 }}
            transition={{ delay: 0.12, duration: 0.6, ease: "easeOut" }}
          >
            {featureItems.slice(0, 4).map((feature) => {
              const Icon = featureIconMap[feature.iconName] ?? Sparkles;

              return (
                <Card
                  className="transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover hover:border-primary/20"
                  key={feature.id}
                >
                  <CardHeader>
                    <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <CardTitle className="pt-4">{feature.title}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </section>

      <motion.section className="py-18" {...sectionMotion}>
        <div className="container-shell">
          <SectionHeader
            description="Each feature is designed to support a real client-facing dashboard workflow, not just decorative UI."
            eyebrow="Feature grid"
            title="Eight product capabilities, built from shared foundations"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featureItems.map((feature) => {
              const Icon = featureIconMap[feature.iconName] ?? Sparkles;

              return (
                <Card
                  className="transition-shadow hover:shadow-card-hover"
                  key={feature.id}
                >
                  <CardHeader>
                    <div className="mb-1 flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <CardTitle className="text-heading-md">
                      {feature.title}
                    </CardTitle>
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
        className="border-y border-border bg-card/55 py-18"
        {...sectionMotion}
      >
        <div className="container-shell">
          <SectionHeader
            description="The features page explains how the product works at a deeper level than the homepage."
            eyebrow="How it helps"
            title="Built around the workflows clients expect"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {detailedSections.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <section.icon
                    aria-hidden="true"
                    className="size-6 text-primary"
                  />
                  <CardTitle className="pt-4">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body-sm">{section.description}</p>
                  <div className="mt-5 grid gap-3">
                    {section.points.map((point) => (
                      <div className="flex gap-3 text-body-sm" key={point}>
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 size-5 shrink-0 text-success"
                        />
                        <span className="text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-18" {...sectionMotion}>
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Badge variant="default">Capability map</Badge>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight leading-[1.15] text-foreground sm:text-heading-xl">
              A clear path from marketing pages to private dashboard features.
            </h2>
            <p className="mt-4 text-body-lg">
              The public feature story connects directly to the implementation
              plan: routing, layout, data, components, auth, dashboard
              analytics, billing, settings, and profile workflows.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilityGroups.map((capability) => (
              <div
                className="rounded-lg border border-border bg-secondary p-4 text-body-sm font-semibold text-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-card hover:bg-card"
                key={capability}
              >
                {capability}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative overflow-hidden border-t border-border bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-card/40 dark:to-background/60 py-20 text-white"
        {...sectionMotion}
      >
        {/* Soft glowing ambient lighting effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent)]" />

        {/* Deep, glowing blue spotlight glow behind text - ONLY VISIBLE IN DARK MODE */}
        <div className="hidden dark:block absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/12 via-accent/8 to-transparent opacity-70 blur-3xl -z-10" />

        <div className="container-shell relative z-10 text-center">
          <Badge className="bg-white/12 text-white border-none dark:bg-primary/10 dark:text-primary dark:border dark:border-primary/20">
            Ready for the next step
          </Badge>
          <h2 className="mx-auto mt-5 max-w-3xl text-heading-xl font-extrabold tracking-tight text-white dark:text-foreground sm:text-display-md">
            See how these features become pricing, auth, and dashboard
            workflows.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-blue-100 dark:text-muted-foreground">
            Continue through the public experience or jump into the demo route
            to preview the protected dashboard shell.
          </p>
          <div className="mt-8 flex flex-col justify-center items-center gap-3.5 sm:flex-row">
            <Link
              className="focus-ring inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-lg bg-white dark:bg-primary px-6 text-body-sm font-bold text-blue-600 dark:text-primary-foreground shadow-md shadow-black/10 dark:shadow-primary/15 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/15 dark:hover:shadow-primary/25"
              to="/pricing"
            >
              View Pricing
            </Link>
            <Link
              className="focus-ring inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-lg border border-white/30 dark:border-border bg-transparent dark:bg-background px-6 text-body-sm font-semibold text-white dark:text-foreground transition-all duration-300 hover:bg-white/10 dark:hover:bg-secondary hover:scale-[1.02]"
              to="/dashboard"
            >
              View Dashboard Demo
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
