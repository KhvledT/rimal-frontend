import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15 },
    }),
  };

  return (
    <section className="relative bg-foreground text-white py-36 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
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
          variants={fadeUp}
          custom={1}
        >
          <Link
            to="/contact"
            className="bg-gold text-foreground font-medium px-10 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Schedule Discussion - Contact Us
          </Link>
        </motion.div>

        {/* Contact Info */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="flex flex-col md:flex-row items-center justify-center gap-10 text-white/70 text-sm"
        >
          <div className="flex items-center gap-3 hover:text-white transition">
            <Mail size={16} />
            <span>contact@rimalholding.com</span>
          </div>

          <div className="flex items-center gap-3 hover:text-white transition">
            <Linkedin size={16} />
            <span>linkedin.com/company/rimalholding</span>
          </div>

          <div className="flex items-center gap-3 hover:text-white transition">
            <MapPin size={16} />
            <span>Doha, Qatar</span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
