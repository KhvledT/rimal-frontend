import { AnimatePresence, motion } from "framer-motion";
import LinkedInIcon from "@/assets/Icons/LinkedinIcon.png";
import type { ProfileData } from "@/types/profile";

type Props = {
  member: ProfileData | null;
  onClose: () => void;
};

const ProfileModal = ({ member, onClose }: Props) => {
  return (
    <AnimatePresence>
      {member && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-navy/80 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-modal-name"
            initial={{ opacity: 0, scale: 0.92, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 32 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none"
          >
            <div
              className="relative bg-card w-full max-w-3xl rounded-sm shadow-[0_32px_80px_rgba(0,0,0,0.35)] pointer-events-auto overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── LEFT PANEL ── */}
              <div className="relative md:w-72 flex-shrink-0 bg-navy flex flex-col items-center justify-center py-12 px-8 overflow-hidden">
                {/* Decorative background circles */}
                <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-gold/5 pointer-events-none" />
                <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-gold/5 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />

                {/* Avatar */}
                <div className="relative z-10 w-36 h-36 rounded-full overflow-hidden bg-beige flex items-center justify-center ring-4 ring-gold/40 shadow-xl mb-6">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-serif text-5xl text-gold select-none">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h2
                  id="profile-modal-name"
                  className="relative z-10 font-serif text-xl text-primary-foreground text-center leading-snug"
                >
                  {member.name}
                </h2>

                {/* Role pill */}
                <span className="relative z-10 mt-3 inline-block font-body text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/40 px-3 py-1">
                  {member.role}
                </span>

                {/* Department */}
                <p className="relative z-10 mt-4 font-body text-xs text-primary-foreground/40 text-center">
                  {member.department}
                </p>

                {/* Gold divider */}
                <div className="relative z-10 w-10 h-[1px] bg-gold/30 my-6" />

                {/* Email */}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="relative z-10 font-body text-xs text-primary-foreground/50 hover:text-gold transition-colors duration-200 break-all text-center"
                  >
                    {member.email}
                  </a>
                )}
              </div>

              {/* ── RIGHT PANEL ── */}
              <div className="flex-1 flex flex-col overflow-y-auto">
                {/* Gold top bar */}
                <div className="h-1 w-full bg-gold flex-shrink-0" />

                {/* Close button */}
                <button
                  id="profile-modal-close"
                  aria-label="Close profile"
                  onClick={onClose}
                  className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center bg-card/80 backdrop-blur-sm text-foreground/40 hover:text-foreground hover:bg-card transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full shadow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                <div className="p-8 flex flex-col gap-7">
                  {/* About */}
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold">
                      About
                    </span>
                    <p className="font-body text-sm text-foreground/70 leading-relaxed mt-3">
                      {member.description}
                    </p>
                  </div>

                  {/* Info grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-sand p-4">
                      <p className="font-body text-[10px] uppercase tracking-widest text-gold/70 mb-1">
                        Department
                      </p>
                      <p className="font-body text-sm text-navy font-medium">
                        {member.department}
                      </p>
                    </div>
                    <div className="bg-sand p-4">
                      <p className="font-body text-[10px] uppercase tracking-widest text-gold/70 mb-1">
                        Title
                      </p>
                      <p className="font-body text-sm text-navy font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Expertise tags */}
                  {member.expertise.length > 0 && (
                    <div>
                      <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold">
                        Areas of Expertise
                      </span>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {member.expertise.map((tag) => (
                          <span
                            key={tag}
                            className="font-body text-xs text-foreground/70 border border-border px-3 py-1 hover:border-gold/50 hover:text-gold transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action bar */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-border mt-auto">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 border border-border text-foreground/70 font-body text-xs font-medium px-5 py-3 transition-all duration-300 hover:border-gold/60 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3.5 h-3.5"
                        >
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        Send Email
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        id={`profile-modal-linkedin-${member.name
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0077B5] text-white font-body text-xs font-medium px-5 py-3 transition-all duration-300 hover:bg-[#005f8f] hover:shadow-lg hover:shadow-[#0077B5]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B5]"
                      >
                        <img
                          src={LinkedInIcon}
                          alt="LinkedIn"
                          className="w-3.5 h-3.5 brightness-[10]"
                        />
                        LinkedIn Profile
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal;
