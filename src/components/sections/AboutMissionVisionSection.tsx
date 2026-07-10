import { motion } from "framer-motion";
import { siteContent } from "@/data/company";
import { fadeUpVariant } from "@/lib/animations";

const AboutMissionVisionSection = () => {
  return (
    <section className="section-spacing bg-sand">
      <div className="section-padding max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            { label: "Our Mission", text: siteContent.about.mission },
            { label: "Our Vision", text: siteContent.about.vision },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUpVariant}
              custom={i}
              className="relative"
            >
              <div className="w-12 h-[2px] bg-gold mb-6" />
              <h3 className="font-serif text-2xl text-navy mb-4">
                {item.label}
              </h3>
              <p className="font-body text-base text-foreground/70 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVisionSection;
