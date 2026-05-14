import type { FAQItem } from "@/types";

export const faqItems: FAQItem[] = [
  {
    id: "trial",
    question: "Can I try FlowPilot before choosing a plan?",
    answer:
      "Yes. The product experience is designed around a guided trial so teams can explore dashboards, charts, billing, and settings before upgrading.",
  },
  {
    id: "upgrade",
    question: "Can I upgrade or downgrade later?",
    answer:
      "Yes. Plan changes can be represented from the billing page and are reflected in the current plan card.",
  },
  {
    id: "team-size",
    question: "Which plan is best for a growing team?",
    answer:
      "Professional is the recommended plan for growing teams because it includes advanced analytics, more seats, priority support, and billing reports.",
  },
  {
    id: "security",
    question: "Does the dashboard support security preferences?",
    answer:
      "Yes. The settings page will include security options such as two-factor authentication, login alerts, and session preferences.",
  },
];
