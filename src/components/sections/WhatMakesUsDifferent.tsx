import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

export default function WhatMakesUsDifferent() {
  const points = [
    {
      title: "Heritage + Modern Strategy",
      desc: "Blending legacy values with forward-thinking execution models.",
    },
    {
      title: "Trust Before Transactions",
      desc: "Partnership-first philosophy built on credibility and alignment.",
    },
    {
      title: "Long-Term Brand Building",
      desc: "We scale sustainably with structured growth frameworks.",
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
              variants={fadeUpVariant}
          custom={0}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-gold">
            Our Competitive Edge
          </span>

          <h2 className="font-serif text-3xl md:text-4xl mt-4 text-foreground">
            What Makes Us Different?
          </h2>
        </motion.div>

        {/* Points */}
        <div className="grid md:grid-cols-3 gap-14">
          {points.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
                  variants={fadeUpVariant}
              className="group relative"
            >
              {/* Big Background Number */}
              <span className="absolute inset-0 flex items-center justify-center font-serif text-[120px] text-gold/5 font-bold select-none">
                0{i + 1}
              </span>

              <div className="relative z-10 transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-foreground/60 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
