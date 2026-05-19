/**
 * Shared Framer Motion primitives for page and card entrance animations.
 *
 * Usage:
 *   <PageMotion>           – wraps an entire page, fades + slides up on mount
 *     <FadeUpItem>         – wraps individual cards/sections for staggered entrance
 *     </FadeUpItem>
 *   </PageMotion>
 *
 * All animations respect prefers-reduced-motion via globals.css.
 */
import { type ReactNode } from "react";
import { motion } from "framer-motion";

// ── Variants ──────────────────────────────────────────────────────────────────

const pageVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut" as const,
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: "easeOut" as const },
  },
};

// ── Components ────────────────────────────────────────────────────────────────

/** Wraps a full dashboard page – fades + stagger-children on mount. */
export function PageMotion({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate="visible"
      className="flex flex-col gap-6"
      initial="hidden"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}

/** Wraps an individual item inside a PageMotion – receives stagger from parent. */
export function FadeUpItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
