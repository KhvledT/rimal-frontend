import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteContent } from "@/data/content";
import heroImage from "@/assets/About_Image.webp";
import bgImage from "@/assets/About_Bg.webp";

const AboutSection = () => {
  return (
    <section id="about" className="relative section-spacing bg-sand">
      <div className="absolute top-0 left-0 w-full bg-gradient-to-br from-sand z-0 opacity-30 h-5/6 lg:h-4/5 ">
        <img
          src={bgImage}
          alt="About background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-fit"
          >
            {/* Decorative stripes - UNDER image (absolute layer) */}
            <div className="absolute -bottom-5 -left-6 w-16 h-32 flex gap-1 rotate-45">
              <div className="bg-navy h-72 w-72 mr-1" />
              <div className="bg-navy h-72 w-72 mr-1" />
              <div className="bg-navy h-72 w-72" />
            </div>

            {/* Image */}
            <div className="relative z-20 border border-gold/30 p-3 bg-burgundy">
              <img
                src={heroImage}
                alt="RIMAL team"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:pl-10 z-10"
          >
            <span className="font-serif italic text-gold text-lg">
              Who We Are?
            </span>
            <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-primary mt-2 leading-tight">
              RIMAL Trading Group
            </h2>
            <p className="font-body text-base text-foreground mt-8 leading-relaxed max-w-lg">
              Rimal Trading Group stands at the intersection of heritage and
              modernity proud of where we come from, ambitious about where we
              are going, and determined to build a future that reflects our
              values.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-body text-sm text-navy border-b border-navy/30 pb-1 hover:border-navy transition-colors duration-300"
            >
              Explore More <span>→</span>
            </Link>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-20 grid grid-cols-3 gap-16 w-fit mx-auto lg:mx-0"
            >
              {siteContent.stats.map((stat) => (
                <div key={stat.value} className="text-center">
                  <span className="font-serif text-3xl md:text-4xl text-primary font-bold">
                    {stat.value}
                  </span>
                  <p className="font-body text-sm text-foreground/60 mt-2 whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
