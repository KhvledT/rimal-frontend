import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PageHeroProps {
  /** Short eyebrow label above the title (e.g. "About Us", "Capabilities") */
  eyebrow: string;
  /** Main heading — accepts a ReactNode so callers can add <br/> and styled <span> */
  title: React.ReactNode;
  /** Optional subtitle paragraph */
  subtitle?: string;
  /** Tailwind bg class for the hero background (default: "bg-burgundy") */
  bgClassName?: string;
  /** Tailwind min-height class (default: "min-h-[55vh]") */
  minHeight?: string;
  /** Optional right-side slot for images/graphics */
  aside?: React.ReactNode;
}

/**
 * Shared hero section used on every inner page (About, Businesses, Leadership, Contact).
 *
 * Owns the parallax scroll logic (heroRef, useScroll, useTransform) so it's
 * defined exactly once. All pages use standardised transform ranges:
 *   Y:       [0, 1] → [0, 100px]
 *   Opacity: [0, 0.6] → [1, 0]
 */
const PageHero = ({
  eyebrow,
  title,
  subtitle,
  bgClassName = "bg-burgundy",
  minHeight = "min-h-[55vh]",
  aside,
}: PageHeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={heroRef}
      className={`relative ${bgClassName} flex items-center flex-col lg:flex-row overflow-hidden ${minHeight}`}
    >
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative pt-24 z-30 section-padding lg:pt-32 pb-20 w-full"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-body text-xs uppercase tracking-[0.3em] text-gold"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl text-primary-foreground mt-4 leading-[0.95]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-body text-lg text-primary-foreground/60 mt-8 max-w-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="w-24 h-[2px] bg-gold mt-8 origin-left"
        />
      </motion.div>

      {aside && (
        <div className="h-full hidden lg:block relative">
          {aside}
        </div>
      )}
    </section>
  );
};

export default PageHero;
