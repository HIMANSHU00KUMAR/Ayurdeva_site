import * as React from "react";

interface HeroSectionProps {

  imageUrl: string;
  imageAlt: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({


  imageUrl,
  imageAlt,
}) => {
  return (
    <section className="flex">
            <img
            loading="lazy"
            src={imageUrl}
            alt={imageAlt}
            className="grow bg-cover customgradient aspect-[1.23] max-md:max-w-full"
          />
    </section>
  );
};

const ImgTemp: React.FC = () => {
  const heroSectionData: HeroSectionProps = {
    imageUrl: "/assets/mansleep (1).png",
    imageAlt: "Ayurvedic consultation",
  };

  return (
    <main>
      <HeroSection {...heroSectionData} />
    </main>
  );
};

export default ImgTemp;

















