import { useState } from "react";
import { motion } from "framer-motion";
import ProfileModal from "@/components/ProfileModal";
import type { ProfileData } from "@/types/profile";
import { leadership } from "@/data/content";
import TeamSection from "./TeamSection";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const partners: ProfileData[] = leadership;

const PartnersSection = () => {
  const [selectedPartner, setSelectedPartner] = useState<ProfileData | null>(
    null,
  );

  return (
    <>
      <TeamSection />
    </>
  );
};

export default PartnersSection;
