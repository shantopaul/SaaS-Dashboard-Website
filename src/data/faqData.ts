import type { FAQItem } from "@/types";

export const faqItems: FAQItem[] = [
  {
    id: "trial",
    question: "Can I try FlowPilot before committing to a plan?",
    answer:
      "Yes. Every new account starts with a full-access trial so your team can explore dashboards, charts, billing, and settings before deciding on a tier.",
  },
  {
    id: "upgrade",
    question: "Can I upgrade or downgrade my plan later?",
    answer:
      "Absolutely. You can change plans at any time from the Billing page. Upgrades apply immediately, and downgrades take effect at the next renewal date.",
  },
  {
    id: "team-size",
    question: "Which plan is right for a growing team?",
    answer:
      "Professional is the most popular choice for scaling teams. It includes advanced analytics, up to 25 seats, priority support, and full billing reports — everything you need without Enterprise overhead.",
  },
  {
    id: "security",
    question: "How does FlowPilot handle account security?",
    answer:
      "Security settings include two-factor authentication, login-alert emails, session timeout control, and password management — all accessible from the Settings page.",
  },
  {
    id: "data",
    question: "Is my data safe and private?",
    answer:
      "Yes. All data displayed in FlowPilot is scoped to your workspace. The Enterprise plan adds custom data retention policies and SSO support for additional compliance requirements.",
  },
  {
    id: "cancel",
    question: "What happens if I cancel my subscription?",
    answer:
      "You keep full access until the end of your current billing period. After that, your account moves to read-only mode so you can always export your history.",
  },
];
