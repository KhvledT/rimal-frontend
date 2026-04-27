import { motion } from "framer-motion";
import {
  ShoppingBag,
  UtensilsCrossed,
  Building2,
  Landmark,
  Factory,
} from "lucide-react";

export default function Cards5() {
  const sectors = [
    {
      title: "Retail & Fashion",
      description: "Market-driven brand scaling",
      icon: ShoppingBag,
    },
    {
      title: "F&B",
      description: "Franchise & concept development",
      icon: UtensilsCrossed,
    },
    {
      title: "Real Estate",
      description: "Development & asset growth",
      icon: Building2,
    },
    {
      title: "Strategic Holdings",
      description: "Investment structuring",
      icon: Landmark,
    },
    {
      title: "Manufacturing",
      description: "Agile sector expansion",
      icon: Factory,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  };

  return (
    <section className="bg-beige py-28 section-padding text-center">
      <span className="text-xs tracking-[0.35em] uppercase text-gold">
        Our Sectors
      </span>

      <h2 className="font-serif text-3xl md:text-4xl mt-4 text-foreground">
        Expanding Across Multiple Sectors
      </h2>

      <p className="font-body text-sm text-foreground/60 mt-5 max-w-xl mx-auto">
        We are actively building and expanding our portfolio across key
        industries, bringing new ventures to life across Qatar, the GCC, and
        beyond.
      </p>

      <div className="flex items-center justify-center py-12">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group bg-white/70 backdrop-blur-sm font-bold border border-gold/20 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gold/40"
        >
          Coming Soon
        </motion.h3>
      </div>

      {/* <div className="max-w-6xl mx-auto px-6"> */}

      {/* Section Intro */}
      {/* <div className="mb-16">
          <span className="text-xs tracking-[0.35em] uppercase text-gold">
            Our Sectors
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 text-foreground">
            Diversified Strategic Portfolio
          </h2>
          <p className="font-body text-sm text-foreground/60 mt-5">
            We operate across high-growth sectors in Qatar & GCC
          </p>
        </div> */}

      {/* Cards Grid */}
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;

            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-white/70 backdrop-blur-sm border border-gold/20 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gold/40"
              >
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-lg text-foreground mb-3 leading-snug">
                  {sector.title}
                </h3>

                <p className="text-sm text-foreground/60 leading-relaxed">
                  {sector.description}
                </p>
              </motion.div>
            );
          })}
        </div> */}
      {/* </div> */}
    </section>
  );
}
