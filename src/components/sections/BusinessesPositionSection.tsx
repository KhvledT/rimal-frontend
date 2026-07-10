import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

const BusinessesPositionSection = () => {
  return (
    <section className="section-spacing bg-sand">
      <div className="section-padding max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          custom={0}
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
            Our Position
          </span>
          <p className="font-serif text-xl md:text-2xl text-navy mt-6 leading-relaxed italic">
            "Rimal Trading Group stands at the intersection of innovation and
            reliability. We position ourselves as a forward-thinking business
            group that transforms ideas into impactful ventures while earning
            the trust of partners, customers, and communities."
          </p>
          <div className="w-12 h-[2px] bg-gold mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessesPositionSection;
