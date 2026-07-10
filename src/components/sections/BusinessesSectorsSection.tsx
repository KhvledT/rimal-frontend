import { motion } from "framer-motion";

const BusinessesSectorsSection = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="section-padding max-w-4xl mx-auto text-center">
        <div className="w-12 h-[2px] bg-gold/60 mx-auto mb-10" />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl text-foreground tracking-wide"
        >
          Coming Soon
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-sm md:text-base text-foreground/50 mt-6 max-w-md mx-auto"
        >
          Our ventures will be showcased here soon.
        </motion.p>
      </div>
    </section>
  );
};

export default BusinessesSectorsSection;
