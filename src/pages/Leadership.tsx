import Layout from "@/components/Layout";
import TeamSection from "@/components/sections/TeamSection";
import LeadershipHeroSection from "@/components/sections/LeadershipHeroSection";
import LeadershipPrinciplesSection from "@/components/sections/LeadershipPrinciplesSection";
import LeadershipQuoteSection from "@/components/sections/LeadershipQuoteSection";
import LeadershipFuturePlansSection from "@/components/sections/LeadershipFuturePlansSection";

const Leadership = () => {
  return (
    <Layout>
      <LeadershipHeroSection />
      <LeadershipPrinciplesSection />
      <LeadershipQuoteSection />
      <TeamSection />
      <LeadershipFuturePlansSection />
    </Layout>
  );
};

export default Leadership;
