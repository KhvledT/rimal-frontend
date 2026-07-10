import { motion } from "framer-motion";
import LeadershipImage from "@/assets/Leadership_Image.webp";
import { fadeUpVariant } from "@/lib/animations";

const principles = [
  {
    num: "01",
    title: "Passion",
    description: "We are wholeheartedly committed to everything we do.",
  },
  {
    num: "02",
    title: "Creativity",
    description: "Innovation is the engine that drives our success.",
  },
  {
    num: "03",
    title: "Persistence",
    description:
      "Growth takes time, and challenges strengthen our determination.",
  },
  {
    num: "04",
    title: "Humility",
    description: "We grow with respect, responsibility, and integrity.",
  },
  {
    num: "05",
    title: "Transparency",
    description: "We value openness and clarity in every interaction.",
  },
  {
    num: "06",
    title: "Diversity",
    description: "Uniting different perspectives in one inclusive community.",
  },
];

const LeadershipPrinciplesSection = () => {
  return (
    <section className="section-spacing bg-sand flex flex-col lg:flex-row w-full items-center">
      <div className="section-padding max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
          custom={0}
          className="mb-16"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
            Our Values
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mt-3">
            The Values That Drive Us
          </h2>
        </motion.div>

        <div className="space-y-0">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariant}
              custom={i}
              className="grid grid-cols-[auto_1fr] gap-8 md:gap-12 py-10 border-b border-border last:border-b-0 group"
            >
              <span className="font-serif text-5xl md:text-6xl text-gold/20 font-bold group-hover:text-gold/40 transition-colors duration-500">
                {p.num}
              </span>
              <div>
                <h3 className="font-serif text-2xl text-navy mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-base text-foreground/60 leading-relaxed max-w-xl">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUpVariant}
        custom={1}
        className="relative w-1/2 pr-16 hidden xl:block"
      >
        <div className="relative border border-gold/30 p-3">
          <img
            src={LeadershipImage}
            alt="Rimal Leadership Team"
            className="w-full aspect-[4/3] object-cover"
            loading="lazy"
          />
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default LeadershipPrinciplesSection;
