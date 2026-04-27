import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const contactInfo = [
  { icon: MapPin, label: "Address", value: siteContent.company.address },
  { icon: Mail, label: "Email", value: siteContent.company.email },
  { icon: Phone, label: "Phone", value: siteContent.company.phone },
  { icon: Globe, label: "Website", value: siteContent.company.website },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 bg-navy overflow-hidden min-h-[50vh] flex items-center"
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
            Invitation
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl text-primary-foreground mt-4 leading-[0.95]"
          >
            Get in
            <br />
            <span className="italic text-gold">Touch</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="w-24 h-[2px] bg-gold mt-8 origin-left"
          />
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-sand mt-20">
        <div className="section-padding max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUpVariant}
              custom={0}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl text-navy mb-8">
                Send Us a Message
              </h2>
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3.5 border border-border rounded-lg bg-card font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold transition-colors"
                required
                maxLength={100}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3.5 border border-border rounded-lg bg-card font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold transition-colors"
                required
                maxLength={100}
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3.5 border border-border rounded-lg bg-card font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold transition-colors"
                required
                maxLength={255}
              />
              <textarea
                placeholder="Your message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3.5 border border-border rounded-lg bg-card font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold transition-colors resize-none"
                required
                maxLength={1000}
              />
              <button
                type="submit"
                className="px-12 py-3.5 bg-gold text-secondary-foreground font-body text-sm tracking-wide hover:opacity-90 transition-opacity duration-300"
              >
                Send Message
              </button>
            </motion.form>

            {/* Contact Details */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-8"
            >
              <motion.h2
                variants={fadeUpVariant}
                custom={0}
                className="font-serif text-2xl text-navy mb-8"
              >
                Contact Information
              </motion.h2>
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUpVariant}
                  custom={i + 1}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-beige rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <item.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-1">
                      {item.label}
                    </h3>
                    <p className="font-body text-sm text-foreground/70 whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                variants={fadeUpVariant}
                custom={5}
                className="pt-8 border-t border-border"
              >
                <h3 className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-4">
                  Social
                </h3>
                <div className="flex gap-6">
                  <span className="font-body text-sm text-foreground/50">
                    @{siteContent.company.social.instagram}
                  </span>
                  <span className="font-body text-sm text-foreground/50">
                    @{siteContent.company.social.twitter}
                  </span>
                  <span className="font-body text-sm text-foreground/50">
                    @{siteContent.company.social.linkedin}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full section-padding h-[480px] md:h-[560px] overflow-hidden my-20"
        aria-label="Office location map"
      >
        <iframe
          id="contact-map"
          title="Rimal Group Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3!2d51.5310!3d25.3200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0xe74a2bde6bdda562!2sWest%20Bay%2C%20Doha%2C%20Qatar!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 max-w-5xl h-full mx-auto shadow-lg rounded-xl"
        />
      </motion.section>
    </Layout>
  );
};

export default Contact;
