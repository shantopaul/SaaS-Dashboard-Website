import type { PricingComparisonRow, PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$19",
    billingCycle: "per month",
    description:
      "Best for individuals and small teams launching their first dashboard.",
    features: [
      "Basic analytics",
      "5 team members",
      "Email support",
      "Core reports",
    ],
    ctaLabel: "Start Starter",
  },
  {
    id: "professional",
    name: "Professional",
    price: "$49",
    billingCycle: "per month",
    description:
      "Best for growing businesses that need deeper analytics and reports.",
    features: [
      "Advanced analytics",
      "Unlimited projects",
      "25 team members",
      "Priority support",
      "Billing reports",
    ],
    ctaLabel: "Start Professional",
    isPopular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    billingCycle: "tailored plan",
    description:
      "Best for larger companies with custom security and integration needs.",
    features: [
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security",
      "Unlimited team members",
      "24/7 support",
    ],
    ctaLabel: "Contact Sales",
  },
];

export const pricingComparisonRows: PricingComparisonRow[] = [
  {
    feature: "Analytics dashboards",
    starter: "Basic",
    professional: "Advanced",
    enterprise: "Custom",
  },
  {
    feature: "Team members",
    starter: "5",
    professional: "25",
    enterprise: "Unlimited",
  },
  {
    feature: "Billing reports",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Custom integrations",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    feature: "Support",
    starter: "Email",
    professional: "Priority",
    enterprise: "24/7",
  },
];
