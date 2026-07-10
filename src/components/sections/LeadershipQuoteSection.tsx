import { motion } from "framer-motion";

const LeadershipQuoteSection = () => {
  return (
    <section className="section-spacing bg-burgundy">
      <div className="section-padding max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <span className="absolute -top-4 -left-10 font-serif text-8xl text-gold/60 leading-none select-none">
            "
          </span>
          <p className="font-serif italic text-2xl md:text-4xl lg:text-5xl text-primary-foreground leading-snug">
            As we expand, we remain committed to a culture where every person
            can contribute, develop, and succeed.
          </p>
          <p className="font-body text-sm text-gold mt-6 tracking-widest capitalize">
            — Message from Founder & CEO
          </p>
          <span className="absolute -bottom-8 right-0 md:right-8 font-serif text-8xl text-gold/60 leading-none select-none rotate-180">
            "
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipQuoteSection;
