import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

export default function StrategicNumbers() {
  const stats = [
    { value: "2025", label: "Established" },
    { value: "5+", label: "Sectors" },
    { value: "3+", label: "Markets" },
    { value: "Regional", label: "Strategic Vision" },
  ];

  return (
    <section className="bg-navy text-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.35em] uppercase text-gold">
            Strategic Overview
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-4">
            Growth Backed by Structure
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="group"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-gold mb-4 transition-all duration-300 group-hover:scale-105">
                {stat.value}
              </div>

              <p className="text-sm uppercase tracking-widest text-white/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
