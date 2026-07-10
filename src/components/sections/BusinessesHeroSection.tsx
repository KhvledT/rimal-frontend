import PageHero from "@/components/common/PageHero";

const BusinessesHeroSection = () => {
  return (
    <PageHero
      eyebrow="Capabilities"
      bgClassName="bg-primary"
      minHeight="min-h-[60vh]"
      title={
        <>
          Our
          <br />
          <span className="italic text-gold">Businesses</span>
        </>
      }
      subtitle="Six structured sectors engineered for scalable regional growth."
    />
  );
};

export default BusinessesHeroSection;
