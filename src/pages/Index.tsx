import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import QuoteSection from "@/components/sections/QuoteSection";
import TeamSection from "@/components/sections/TeamSection";
import WhyPartnerWithRimal from "@/components/sections/WhyPartnerWithRimal";
import Cards5 from "@/components/sections/Cards5";
import WhatMakesUsDifferent from "@/components/sections/WhatMakesUsDifferent";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <WhyPartnerWithRimal />
      <Cards5 />
      <WhatMakesUsDifferent />
      <TeamSection />
      <QuoteSection />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
