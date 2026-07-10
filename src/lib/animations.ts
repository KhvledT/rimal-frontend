/**
 * Shared Framer Motion animation variants.
 *
 * Defined at module scope (not inside components) so Framer Motion
 * gets a stable object reference and doesn't recreate animation
 * controllers on every render.
 *
 * Usage:
 *   import { fadeUpVariant } from "@/lib/animations";
 *   <motion.div variants={fadeUpVariant} custom={0} initial="hidden" whileInView="visible" …>
 */
import type { Variants } from "framer-motion";

/**
 * Staggered fade-up variant.
 * Pass `custom={index}` on the motion element to stagger siblings.
 * Delay per item = index × 0.12s.
 */
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" },
  }),
};

/**
 * Simple entrance variant — no stagger, fixed delay.
 * Use for single elements that don't need per-item delays.
 */
export const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
