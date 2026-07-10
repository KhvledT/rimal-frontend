import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { siteContent } from "@/data/company";

const WhyRimalSection = () => {
  return (
    <section className="section-spacing bg-sand">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-serif italic text-3xl md:text-4xl text-gold">Why RIMAL</h2>
          <p className="font-body text-base text-foreground/60 mt-4">
            Partnership built on excellence and trust
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {siteContent.values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="bg-card p-8 text-center shadow-sm"
            >
              <div className="w-14 h-14 mx-auto mb-6 bg-beige rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-lg text-navy font-semibold mb-3">{item.title}</h3>
              <p className="font-body text-sm text-foreground/60 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRimalSection;
