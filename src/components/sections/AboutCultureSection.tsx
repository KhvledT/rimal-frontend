import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

const culture = [
  { point: "Sales create revenue, but trust builds brands." },
  {
    point:
      "A first sale keeps you running today, trust keeps you thriving for decades.",
  },
  {
    point:
      "People don't just buy products, they buy belief, reliability, and consistency.",
  },
  { point: "We deliver value, listen actively, and act with integrity." },
];

const AboutCultureSection = () => {
  return (
    <section className="section-spacing bg-sand">
      <div className="section-padding max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          custom={0}
          className="mb-12"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
            Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mt-3">
            Our Culture
          </h2>
          <p className="font-body text-base text-foreground/60 mt-4 max-w-xl">
            At Rimal, success is a mindset, not an option. We build trust
            before transactions, because lasting brands are built on belief,
            reliability, and consistency.
          </p>
        </motion.div>

        <div className="space-y-8">
          {culture.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariant}
              custom={i}
              className="flex items-start gap-6 border-l-2 border-gold/30 pl-8 py-2"
            >
              <span className="font-serif text-2xl text-gold/40 font-bold">
                0{i + 1}
              </span>
              <p className="font-body text-base text-foreground/70 leading-relaxed">
                {item.point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCultureSection;
