export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billingCycle: string;
  description: string;
  features: string[];
  ctaLabel: string;
  isPopular?: boolean;
}

export interface PricingComparisonRow {
  feature: string;
  starter: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}
