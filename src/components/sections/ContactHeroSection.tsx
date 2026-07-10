import PageHero from "@/components/common/PageHero";

const ContactHeroSection = () => {
  return (
    <PageHero
      eyebrow="Invitation"
      bgClassName="bg-navy"
      minHeight="min-h-[50vh]"
      title={
        <>
          Get in
          <br />
          <span className="italic text-gold">Touch</span>
        </>
      }
    />
  );
};

export default ContactHeroSection;
