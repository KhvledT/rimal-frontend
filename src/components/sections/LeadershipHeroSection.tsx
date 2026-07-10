import PageHero from "@/components/common/PageHero";

const LeadershipHeroSection = () => {
  return (
    <PageHero
      eyebrow="Leadership Framework"
      bgClassName="bg-burgundy-deep"
      minHeight="min-h-[60vh]"
      title={
        <>
          Leadership
          <br />
          <span className="italic text-gold">& Values</span>
        </>
      }
      subtitle="How we lead, how decisions are made, and how partnerships are chosen."
    />
  );
};

export default LeadershipHeroSection;
