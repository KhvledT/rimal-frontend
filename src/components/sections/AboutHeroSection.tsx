import PageHero from "@/components/common/PageHero";
import Logo from "@/assets/Logo.webp";

const AboutHeroSection = () => {
  return (
    <PageHero
      eyebrow="About Us"
      bgClassName="bg-burgundy"
      title={
        <>
          RIMAL
          <br />
          <span className="italic text-gold">Trading Group</span>
        </>
      }
      subtitle="Established on 07/07/2025 to unify diverse entrepreneurial ventures under one structured investment group."
      aside={
        <img
          src={Logo}
          alt="Rimal Trading Group Logo"
          className="object-cover"
        />
      }
    />
  );
};

export default AboutHeroSection;
