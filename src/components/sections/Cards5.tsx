import { motion } from "framer-motion";

export default function Cards5() {
  return (
    <section className="bg-beige py-28 section-padding text-center">
      <span className="text-xs tracking-[0.35em] uppercase text-gold">
        Our Sectors
      </span>

      <h2 className="font-serif text-3xl md:text-4xl mt-4 text-foreground">
        Expanding Across Multiple Sectors
      </h2>

      <p className="font-body text-sm text-foreground/60 mt-5 max-w-xl mx-auto">
        We are actively building and expanding our portfolio across key
        industries, bringing new ventures to life across Qatar, the GCC, and
        beyond.
      </p>

      <div className="flex items-center justify-center py-12">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group bg-white/70 backdrop-blur-sm font-bold border border-gold/20 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gold/40"
        >
          Coming Soon
        </motion.h3>
      </div>
    </section>
  );
}
