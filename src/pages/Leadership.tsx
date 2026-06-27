import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/Layout";
import LeadershipImage from "@/assets/Leadership_Image.webp";
import TeamSection from "@/components/sections/TeamSection";
import { Link } from "react-router-dom";

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

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const Leadership = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 bg-burgundy-deep overflow-hidden min-h-[60vh] flex items-center"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="section-padding max-w-5xl relative z-10"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs uppercase tracking-[0.3em] text-gold"
          >
            Leadership Framework
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl text-primary-foreground mt-4 leading-[0.95]"
          >
            Leadership
            <br />
            <span className="italic text-gold">& Values</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-lg text-primary-foreground/50 mt-8 max-w-lg"
          >
            How we lead, how decisions are made, and how partnerships are
            chosen.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="w-24 h-[2px] bg-gold mt-8 origin-left"
          />
        </motion.div>
      </section>

      {/* Principles */}
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
            />
            <div className="absolute top-0 left-0 w-full h-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Quote */}
      <section className="section-spacing bg-burgundy">
        <div className="section-padding max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <span className="absolute -top-4 -left-10 font-serif text-8xl text-gold/60 leading-none select-none">
              "
            </span>
            <p className="font-serif italic text-2xl md:text-4xl lg:text-5xl text-primary-foreground leading-snug">
              As we expand, we remain committed to a culture where every person
              can contribute, develop, and succeed.
            </p>
            <p className="font-body text-sm text-gold mt-6 tracking-widest uppercase">
              — Message from Founder & CEO
            </p>
            <span className="absolute -bottom-8 right-0 md:right-8 font-serif text-8xl text-gold/60 leading-none select-none rotate-180">
              "
            </span>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* Future Plans */}
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
              to={"/contact"}
              className="bg-gold mt-4 text-foreground font-medium px-10 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Explore Strategic Opportunities →
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
