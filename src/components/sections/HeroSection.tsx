import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-handshake.webp";
import profilePDF from "@/assets/Profile PDF/05 RTG - Rimal Company profile Vol.01.pdf";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative lg:h-screen bg-burgundy flex items-center flex-col lg:flex-row"
    >
      {/* Image */}
      <div className="h-full py-28 sm:py-36 lg:py-0 lg:absolute lg:top-0 lg:right-0 w-1/2">
        <img
          src={heroImage}
          alt="Corporate partnership"
          className="w-full h-full object-cover scale-150 lg:scale-100"
        />
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 section-padding pt-0 lg:pt-32 pb-20 w-full text-center lg:text-left">
        <div className="max-w-2xl mx-auto lg:mx-0">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="
              font-serif
              text-4xl
              sm:text-5xl
              leading-tight
              text-primary-foreground
              whitespace-pre-line
            "
          >
            DRIVEN BY IDEAS,{"\n"}
            <span className="italic text-gold">POWERED BY TRUST.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="
              mt-6
              font-body
              text-sm
              sm:text-base
              lg:text-lg
              xl:text-xl
              text-primary-foreground/70
              leading-relaxed
              max-w-md
              whitespace-pre-line
              mx-auto
              lg:mx-0
            "
          >
            We transform ideas into impactful ventures, building brands that
            inspire trust, drive innovation, and shape lifestyles across Qatar,
            the GCC, and beyond.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            className="mt-12 flex gap-4 flex-row max-w-fit mx-auto lg:mx-0"
          >
            <Link
              to="/partners"
              className="
                px-8 py-3.5
                bg-gold
                text-secondary-foreground
                font-body
                text-xs
                sm:text-sm
                tracking-wide
                hover:opacity-90
                transition-opacity
                duration-300
              "
            >
              Explore Partnership
            </Link>

            <a
              href={profilePDF}
              className="
                px-8 py-3.5
                border
                border-primary-foreground/30
                text-primary-foreground
                font-body
                text-xs
                sm:text-sm
                tracking-wide
                hover:border-primary-foreground/60
                transition-colors
                duration-300
                cursor-pointer
              "
              download
            >
              Download Corporate Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
