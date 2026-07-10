import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

export default function WhyPartnerWithRimal() {
  const culture = [
    { point: "Deliver value beyond the transaction" },
    { point: "Listen actively and understand real needs" },
    { point: "Operate with integrity in every interaction" },
  ];

  return (
    <section className="relative bg-sand pt-24 pb-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Decorative top line */}
        <div className="w-16 h-[2px] bg-gold mb-8 opacity-60" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          custom={0}
          className="mb-16"
        >
          <span className="font-body text-xs uppercase tracking-[0.35em] text-gold">
            Our Approach
          </span>

          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 leading-snug">
            Building Trust Before Transactions
          </h2>

          <p className="font-body text-base text-foreground/60 mt-6 max-w-2xl leading-relaxed">
            We build trust before transactions, delivering value through
            integrity, active listening, and long-term commitment to every
            partnership.
          </p>
        </motion.div>

        <div className="space-y-12">
          {culture.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariant}
              custom={i}
              className="flex items-start gap-8 border-l border-gold/30 pl-10 relative"
            >
              {/* Big number background */}
              <span className="absolute -left-3 top-0 font-serif text-6xl text-gold/10 font-bold select-none">
                {`0${i + 1}`}
              </span>

              <p className="font-body pl-8 pt-[25px] text-lg text-foreground/80 leading-relaxed relative z-10">
                {item.point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
