import { motion } from "framer-motion";
import { siteContent } from "@/data/company";
import { fadeUpVariant } from "@/lib/animations";

const AboutNameSection = () => {
  return (
    <section className="section-spacing bg-sand">
      <div className="section-padding max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            custom={0}
          >
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
              Heritage
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-navy mt-3 leading-tight">
              The Name
              <br />
              <span className="italic text-primary">"Rimal"</span>
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            custom={1}
          >
            <p className="font-body text-base text-foreground/70 leading-relaxed">
              Inspired by Arabian heritage, "Rimal" refers to sands —
              symbolizing abundance, resilience, and the land where our
              forefathers once lived. The name carries with it the weight of
              tradition and the promise of a bold future.
            </p>
            <p className="font-body text-base text-foreground/70 leading-relaxed mt-6">
              {siteContent.about.description} What began as independent
              businesses has grown into a dynamic group that embodies unity,
              professionalism, and ambition.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutNameSection;
