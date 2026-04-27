import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";
import {
  ShoppingBag,
  Utensils,
  Building2,
  Briefcase,
  Factory,
  Monitor,
  Mail,
  Linkedin,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const sectorIcons = [
  ShoppingBag,
  Utensils,
  Building2,
  Briefcase,
  Factory,
  Monitor,
];

const sectorDetails = [
  {
    name: "Retail & Fashion",
    description:
      "Footwear, apparel, and lifestyle brands that define modern taste and cultural identity.",
    approach:
      "We curate and bring the world's most sought-after brands to local markets, creating retail experiences that resonate with diverse communities.",
  },
  {
    name: "Food & Beverage",
    description:
      "Cafés, restaurants, and franchise operations that deliver exceptional dining experiences.",
    approach:
      "From concept development to operations, we build F&B ventures that combine culinary excellence with smart business strategy.",
  },
  {
    name: "Real Estate",
    description:
      "Strategic development and investment in properties that shape communities.",
    approach:
      "We identify high-potential real estate opportunities, developing spaces that serve both commercial goals and community needs.",
  },
  {
    name: "Services & Holdings",
    description:
      "Strategic investments and diversified services powering regional growth.",
    approach:
      "Our holdings portfolio spans strategic investments that create long-term value while supporting our group's broader mission.",
  },
  {
    name: "Manufacturing",
    description:
      "Expanding into new production sectors with agility and precision.",
    approach:
      "We value upcycling and sustainability, recognizing that the future belongs to companies that balance progress with people and the environment.",
  },
  {
    name: "Technology",
    description:
      "Digital innovation and emerging platforms driving the next era of commerce.",
    approach:
      "We invest in digital transformation, building technology-forward solutions that complement our physical business operations.",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const Businesses = () => {
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
        className="relative pt-32 pb-24 bg-primary overflow-hidden min-h-[60vh] flex items-center"
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
            Capabilities
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl text-primary-foreground mt-4 leading-[0.95]"
          >
            Our
            <br />
            <span className="italic text-gold">Businesses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-lg text-primary-foreground/50 mt-8 max-w-lg"
          >
            Six structured sectors engineered for scalable regional growth.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="w-24 h-[2px] bg-gold mt-8 origin-left"
          />
        </motion.div>
      </section>

      {/* Sectors Grid */}
      <section className="section-spacing bg-white">
        <div className="section-padding max-w-4xl mx-auto text-center">
          {/* subtle top line */}
          <div className="w-12 h-[2px] bg-gold/60 mx-auto mb-10" />

          {/* main text */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
            font-serif
            text-4xl
            md:text-5xl
            text-foreground
            tracking-wide
          "
          >
            Coming Soon
          </motion.h2>

          {/* sub text (optional very light) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
            font-body
            text-sm
            md:text-base
            text-foreground/50
            mt-6
            max-w-md
            mx-auto
          "
          >
            Our ventures will be showcased here soon.
          </motion.p>
        </div>
      </section>
      {/* <section className="section-spacing bg-sand">
        <div className="section-padding max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {sectorDetails.map((sector, i) => {
              const Icon = sectorIcons[i];
              return (
                <motion.div
                  key={sector.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUpVariant}
                  custom={i}
                  className="bg-card p-10 md:p-12 group hover:bg-beige transition-colors duration-500"
                >
                  <div className="w-12 h-12 bg-beige group-hover:bg-card rounded-lg flex items-center justify-center mb-6 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-navy mb-3">{sector.name}</h3>
                  <p className="font-body text-sm text-foreground/60 leading-relaxed mb-4">{sector.description}</p>
                  <p className="font-body text-sm text-foreground/50 leading-relaxed italic">{sector.approach}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Markets */}
      <section className="section-spacing bg-burgundy">
        <div className="section-padding max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            custom={0}
            className="mb-16"
          >
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold text-center block">
              Reach
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mt-3 text-center">
              Target Markets
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                label: "Qatar & GCC (Primary)",
                value: siteContent.markets.primary,
                num: "01",
              },
              {
                label: "MENA (Secondary)",
                value: siteContent.markets.secondary,
                num: "02",
              },
              {
                label: "International Expansion (Strategic Vision)",
                value: siteContent.markets.global,
                num: "03",
              },
            ].map((market, i) => (
              <motion.div
                key={market.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariant}
                custom={i}
                className="border border-primary-foreground/10 p-8"
              >
                <span className="font-serif text-4xl text-gold/30 font-bold">
                  {market.num}
                </span>
                <h4 className="font-body text-xs uppercase tracking-[0.2em] text-gold mt-4">
                  {market.label}
                </h4>
                <p className="font-body text-base text-primary-foreground/70 mt-3">
                  {market.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="section-spacing bg-sand">
        <div className="section-padding max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            custom={0}
          >
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
              Our Position
            </span>
            <p className="font-serif text-xl md:text-2xl text-navy mt-6 leading-relaxed italic">
              "Rimal Trading Group stands at the intersection of innovation and
              reliability. We position ourselves as a forward-thinking business
              group that transforms ideas into impactful ventures while earning
              the trust of partners, customers, and communities."
            </p>
            <div className="w-12 h-[2px] bg-gold mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="relative bg-foreground text-white py-36 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          Headline
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: (i: number) => ({
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: i * 0.15 },
              }),
            }}
            custom={0}
            className="mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Explore Partnership Opportunities
            </h2>
          </motion.div>

          CTA Button
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: (i: number) => ({
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: i * 0.15 },
              }),
            }}
            custom={1}
            className="mb-20"
          >
            <Link
              to={"/partners"}
              className="bg-gold text-foreground font-medium px-10 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Partners
            </Link>
          </motion.div>

          Contact Info
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: (i: number) => ({
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: i * 0.15 },
              }),
            }}
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
          </motion.div>
        </div>

        Subtle Background Accent
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent pointer-events-none" />
      </section> */}
    </Layout>
  );
};

export default Businesses;
