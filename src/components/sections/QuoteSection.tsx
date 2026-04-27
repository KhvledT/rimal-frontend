import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="bg-burgundy section-spacing">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center relative"
        >
          {/* Opening quote */}
          <span className="absolute -top-4 -left-10 font-serif text-8xl text-gold/60 leading-none select-none">
            "
          </span>

          <p className="font-serif italic text-2xl md:text-4xl lg:text-5xl text-primary-foreground leading-snug">
            We support creative ideas in our local market and try to bring
            innovative brands from abroad.
          </p>

          {/* Closing quote */}
          <span className="absolute -bottom-8 right-0 md:right-8 font-serif text-8xl text-gold/60 leading-none select-none rotate-180">
            "
          </span>

          <p className="font-body text-sm text-primary-foreground/60 mt-5 max-w-xl mx-auto">
            Message From CEO
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
