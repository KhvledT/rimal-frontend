import Layout from "@/components/Layout";
import AboutHeroSection from "@/components/sections/AboutHeroSection";
import AboutNameSection from "@/components/sections/AboutNameSection";
import AboutCEOSection from "@/components/sections/AboutCEOSection";
import AboutMissionVisionSection from "@/components/sections/AboutMissionVisionSection";
import AboutImageSection from "@/components/sections/AboutImageSection";
import AboutCultureSection from "@/components/sections/AboutCultureSection";

const About = () => {
  return (
    <Layout>
      <AboutHeroSection />
      <AboutNameSection />
      <AboutCEOSection />
      <AboutMissionVisionSection />
      <AboutImageSection />
      <AboutCultureSection />
    </Layout>
  );
};

export default About;
