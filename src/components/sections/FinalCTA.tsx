import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUpVariant } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section className="relative bg-foreground text-white py-36 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0}
          className="mb-12"
        >
          <h2 className="font-serif text-4xl leading-tight">
            Emphasizes Creativity, Forward-Thinking and Reliability.
          </h2>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={1}
        >
          <Link
            to="/contact"
            className="bg-gold text-foreground font-medium px-10 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Schedule Discussion - Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
