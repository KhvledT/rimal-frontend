import Layout from "@/components/Layout";
import ContactHeroSection from "@/components/sections/ContactHeroSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ContactMapSection from "@/components/sections/ContactMapSection";

const Contact = () => {
  return (
    <Layout>
      <ContactHeroSection />
      <ContactFormSection />
      <ContactMapSection />
    </Layout>
  );
};

export default Contact;
