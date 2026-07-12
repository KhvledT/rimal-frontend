import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactInfo } from "@/hooks/useContactInfo";

const ContactMapSection = () => {
  const { data: contactData, isLoading: isContactLoading, isError: isContactError } = useContactInfo();
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  const mapSrc = contactData?.mapUrl;
  const showLoader = isContactLoading || (!!mapSrc && isIframeLoading);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative w-full section-padding h-[480px] md:h-[560px] overflow-hidden my-20"
      aria-label="Office location map"
    >
      <AnimatePresence>
        {showLoader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
            className="absolute inset-0 max-w-5xl h-full mx-auto shadow-lg rounded-xl bg-beige/50 backdrop-blur-md flex flex-col items-center justify-center border border-gold/10 z-10"
          >
            {/* Ambient gold glow behind the loader */}
            <div className="absolute w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            
            <div className="relative mb-6 flex items-center justify-center">
              {/* Outer pulsing ring */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-20 h-20 rounded-full bg-gold/10 border border-gold/20"
              />
              
              {/* Inner pulsing ring */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 2,
                  delay: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-14 h-14 rounded-full bg-gold/20"
              />

              {/* Pin Icon */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 text-gold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 drop-shadow-[0_2px_8px_rgba(177,146,102,0.3)]"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Premium Typography styling matching the brand */}
            <motion.h4
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-sm font-semibold tracking-[0.25em] text-navy uppercase font-serif"
            >
              Locating Office
            </motion.h4>
            <p className="text-[11px] uppercase tracking-[0.15em] text-gold mt-2 font-medium">
              Rimal Group Office Location
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {isContactError || (!isContactLoading && !mapSrc) ? (
        <div className="absolute inset-0 max-w-5xl h-full mx-auto shadow-lg rounded-xl bg-beige/30 flex flex-col items-center justify-center border border-gold/10">
          <p className="font-body text-sm text-foreground/50 text-navy">
            Map location is currently unavailable.
          </p>
        </div>
      ) : (
        !!mapSrc && (
          <iframe
            id="contact-map"
            title="Rimal Group Office Location"
            src={mapSrc}
            width="90%"
            height="90%"
            style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 max-w-5xl h-full mx-auto shadow-lg rounded-xl"
            onLoad={() => setIsIframeLoading(false)}
          />
        )
      )}
    </motion.section>
  );
};

export default ContactMapSection;

