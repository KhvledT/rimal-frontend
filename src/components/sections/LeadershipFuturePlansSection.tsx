import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUpVariant } from "@/lib/animations";

const LeadershipFuturePlansSection = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="section-padding max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0}
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
            Looking Ahead
          </span>
          <h2 className="font-serif text-2xl md:text-2xl italic text-beige mt-4 leading-relaxed">
            To expand our portfolio across multiple sectors, strengthen
            operational efficiency, and position Rimal Group as a trusted name
            in global markets.
          </h2>
          <div className="w-12 h-[2px] bg-gold mx-auto mt-8" />
          <Link
            to="/contact"
            className="inline-block bg-gold mt-8 text-foreground font-medium px-10 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Explore Strategic Opportunities →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipFuturePlansSection;
