import type { PricingComparisonRow, PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$19",
    billingCycle: "per month",
    description:
      "The right starting point for solo founders and small teams exploring their first analytics workflow.",
    features: [
      "Core analytics dashboard",
      "Up to 5 team members",
      "Email support",
      "Standard reports",
      "Billing history",
    ],
    ctaLabel: "Get started free",
  },
  {
    id: "professional",
    name: "Professional",
    price: "$49",
    billingCycle: "per month",
    description:
      "Built for growing teams that need full analytics depth, more collaboration, and faster reporting cycles.",
    features: [
      "Advanced analytics & forecasting",
      "Unlimited projects",
      "Up to 25 team members",
      "Priority email & chat support",
      "Full billing reports",
      "Custom notification rules",
    ],
    ctaLabel: "Start free trial",
    isPopular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    billingCycle: "tailored plan",
    description:
      "Designed for larger organisations that need dedicated support, custom integrations, and SLA guarantees.",
    features: [
      "Dedicated account manager",
      "Custom integrations & API access",
      "Advanced security & SSO",
      "Unlimited team members",
      "24/7 priority support",
      "Custom data retention policies",
    ],
    ctaLabel: "Talk to sales",
  },
];

export const pricingComparisonRows: PricingComparisonRow[] = [
  {
    feature: "Analytics dashboards",
    starter: "Standard",
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
  {
    feature: "Custom data retention",
    starter: false,
    professional: false,
    enterprise: true,
  },
];
