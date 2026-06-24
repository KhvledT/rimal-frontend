import { useState } from "react";
import { motion } from "framer-motion";
import ProfileModal from "@/components/ProfileModal";
import type { ProfileData } from "@/types/profile";
import { leadership } from "@/data/content";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const teamMembers = leadership;

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<ProfileData | null>(
    null,
  );

  return (
    <>
      <section className="section-spacing bg-sand">
        <div className="section-padding max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            custom={0}
            className="mb-16"
          >
            <h3 className="font-body text-xs uppercase tracking-[0.3em] text-gold text-center">
              People
            </h3>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mt-3 text-center">
              Corporate Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.button
                key={member.name}
                id={`team-member-${member.name.replace(/\s+/g, "-").toLowerCase()}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariant}
                custom={i}
                onClick={() => setSelectedMember(member)}
                className="
                  bg-card p-8 text-center group
                  hover:bg-beige transition-colors duration-500
                  cursor-pointer w-full min-h-[280px] flex flex-col
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-gold
                "
              >
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-beige group-hover:bg-card transition-colors duration-500 flex items-center justify-center ring-2 ring-gold/20 group-hover:ring-gold/50">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-serif text-2xl text-gold select-none">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-lg text-navy capitalize">
                  {member.name}
                </h3>
                <p className="font-body text-sm text-foreground/50 mt-1">
                  {member.role}
                </p>
                <span className="inline-block mt-auto font-body text-xs uppercase tracking-widest text-gold/70 group-hover:text-gold transition-colors duration-300">
                  View Profile →
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <ProfileModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
};

export default TeamSection;
