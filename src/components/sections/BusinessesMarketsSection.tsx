import { motion } from "framer-motion";
import { siteContent } from "@/data/company";
import { fadeUpVariant } from "@/lib/animations";

const BusinessesMarketsSection = () => {
  return (
    <section className="section-spacing bg-burgundy">
      <div className="section-padding max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          custom={0}
          className="mb-16"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold text-center block">
            Reach
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mt-3 text-center">
            Target Markets
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              label: "Qatar & GCC (Primary)",
              value: siteContent.markets.primary,
              num: "01",
            },
            {
              label: "MENA (Secondary)",
              value: siteContent.markets.secondary,
              num: "02",
            },
            {
              label: "International Expansion (Strategic Vision)",
              value: siteContent.markets.global,
              num: "03",
            },
          ].map((market, i) => (
            <motion.div
              key={market.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariant}
              custom={i}
              className="border border-primary-foreground/10 p-8"
            >
              <span className="font-serif text-4xl text-gold/30 font-bold">
                {market.num}
              </span>
              <h4 className="font-body text-xs uppercase tracking-[0.2em] text-gold mt-4">
                {market.label}
              </h4>
              <p className="font-body text-base text-primary-foreground/70 mt-3">
                {market.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessesMarketsSection;
