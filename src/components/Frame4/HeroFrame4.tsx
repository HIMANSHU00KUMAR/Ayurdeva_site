import * as React from "react";

interface HeroSectionProps {
  title: string;
  backgroundImage: string;
  buttonText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  backgroundImage,
  buttonText,
}) => {
  return (
    <section className="flex flex-col justify-center font-medium bg-zinc-100 ">
      <div className="flex overflow-hidden relative flex-col justify-center w-full  min-h-[590px] max-md:max-w-full">
        <img
          loading="lazy"
          src={backgroundImage}
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col pb-20 w-full max-md:max-w-full">
          <div className="flex flex-col items-center px-20 py-20 mb-3 w-full  max-md:px-5 max-md:max-w-full">
            <h1 className="mt-16 text-6xl text-center text-yellow-50 w-[856px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              {title}
            </h1>
            <button className="justify-center px-8 pt-6 pb-5 mt-12 text-2xl text-white lowercase bg-green-800 rounded-2xl shadow-lg max-md:px-5 max-md:mt-10">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

function HeroFrame4() {
  return (
    <HeroSection
      title="Ready to restore harmony in your mind, body and spirit?"
      backgroundImage="/assets/harmony.png"
      buttonText="Book a consultation"
    />
  );
}

export default HeroFrame4;