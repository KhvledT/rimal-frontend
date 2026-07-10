import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

const ceoMessage = `Our journey began with a simple belief: Uniqueness and Excellence lead to prosperity. Thus, we support creative ideas in our local market and try to bring innovative brands from abroad.

In our globalized generation, a true modernity is born when legacy integrates with novelty, that is why we have deep respect for our heritage. The values passed down through generations — integrity, resilience, and pride in quality — are the same values that guide us as we build a forward-looking, innovative organization.

We believe that innovation is not a luxury; it is a responsibility. We encourage new ideas, challenge outdated assumptions, and constantly seek inventive ways to improve our work.`;

const AboutCEOSection = () => {
  return (
    <section className="section-spacing bg-beige">
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
            Founder & CEO
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mt-3">
            A Message from <span className="italic text-primary">CEO</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          <span className="absolute -top-6 -left-2 font-serif text-[120px] text-gold/20 leading-none select-none hidden md:block">
            "
          </span>
          <div className="space-y-6 md:pl-16">
            {ceoMessage.split("\n\n").map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeUpVariant}
                custom={i + 1}
                className="font-body text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={4}
          className="font-serif italic text-gold text-lg mt-10 md:pl-16"
        >
          "Driven by Ideas. Powered by Trust."
        </motion.p>
      </div>
    </section>
  );
};

export default AboutCEOSection;
