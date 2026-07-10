import AboutImage from "@/assets/Driven-by-ideas.webp";

const AboutImageSection = () => {
  return (
    <section className="section-spacing bg-burgundy">
      <div className="relative max-w-7xl mx-auto border-white border-4">
        <img
          src={AboutImage}
          alt="Driven by ideas, Powered by trust"
          className="p-1"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>
    </section>
  );
};

export default AboutImageSection;
