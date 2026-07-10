import Layout from "@/components/Layout";
import BusinessesHeroSection from "@/components/sections/BusinessesHeroSection";
import BusinessesSectorsSection from "@/components/sections/BusinessesSectorsSection";
import BusinessesMarketsSection from "@/components/sections/BusinessesMarketsSection";
import BusinessesPositionSection from "@/components/sections/BusinessesPositionSection";

const Businesses = () => {
  return (
    <Layout>
      <BusinessesHeroSection />
      <BusinessesSectorsSection />
      <BusinessesMarketsSection />
      <BusinessesPositionSection />
    </Layout>
  );
};

export default Businesses;
