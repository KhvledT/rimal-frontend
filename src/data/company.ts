/**
 * Static company content — copy, taglines, and site-wide data.
 * Replace individual slices with service calls as CMS/API becomes available.
 */
export const siteContent = {
  company: {
    name: "RIMAL Trading Group",
    shortName: "RIMAL",
    tagline: "Built to Lead",
    subtitle:
      "Strategic Trading & Investment Group\nDriving Growth Through Vision and Trust.",
    founding: "2025",
    ceo: "CEO",
    email: "info@rimalgroupqa.com",
    phone: "Tel: 4143 6200, Mob: 3035 0045",
    address:
      "Rimal Trading Group, Lusail, Zone 69, St. 206, Building 45, 2nd Floor, Unit# 2001 - P.O. BOX 36117, Doha, Qatar.",
    social: {
      linkedin: "rimal-trading-group",
    },
  },
  about: {
    description:
      "RIMAL Trading Group is a diversified business group built on strong foundations, strategic growth, and enduring partnerships.",
    mission: `Creating and managing ventures that combine innovation,
integrity, and value bringing the best global brands and
concepts to the local market while fostering sustainable
growth.`,
    vision: `To become a leading regional powerhouse recognized
for excellence, trust, and creativity, building brands that
inspire loyalty and shape lifestyles across Qatar, GCC,
and beyond.`,
    values: `• Passion: We are wholeheartedly committed to everything we do.
• Creativity: Innovation is the engine that drives our success.
• Persistence: Growth takes time, and challenges strengthen our determination.
• Humility: We grow with respect, responsibility, and integrity.
• Transparency: We value openness and clarity in every interaction.
• Diversity: Uniting different perspectives in one inclusive community.`,
  },
  stats: [
    { value: "+15", label: "Years of\nExperience" },
    { value: "6", label: "Strategic\nSectors" },
    { value: "+30", label: "Trusted\nPartners" },
  ],
  values: [
    {
      title: "Proven Leadership",
      description: "Decades of excellence driving industry standards",
    },
    {
      title: "Strategic Growth",
      description: "Disciplined expansion across diverse sectors",
    },
    {
      title: "Enduring Partnerships",
      description: "Long-term relationships built on trust",
    },
    {
      title: "Operational Excellence",
      description: "World-class standards in every venture",
    },
  ],
  sectors: [
    {
      name: "Retail & Fashion",
      description: "Footwear, apparel, and lifestyle brands",
    },
    {
      name: "Food & Beverage",
      description: "Cafés, restaurants, and franchise operations",
    },
    { name: "Real Estate", description: "Development and investment" },
    {
      name: "Services & Holdings",
      description: "Strategic investments and diversified services",
    },
    {
      name: "Manufacturing",
      description: "Expanding into new sectors with agility",
    },
    {
      name: "Technology",
      description: "Digital innovation and emerging platforms",
    },
  ],
  markets: {
    primary: "Qatar and GCC",
    secondary: "MENA region",
    global: "Actively exploring opportunities worldwide",
  },
  quote: "Leadership is not claimed.\nIt's built.",
  footerTagline:
    "Built on strong foundations, strategic growth, and enduring partnerships. Leading responsibly, growing sustainably.",
} as const;
