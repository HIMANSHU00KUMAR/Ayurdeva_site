import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

interface TextBlockProps {
  title: string;
  description: string;
  className?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ title, description, className }) => (
  <div className={`flex flex-col grow px-6 py-12 w-full bg-white rounded-3xl border-green-800 border-solid shadow-sm border-t-[5px] max-md:px-5 max-md:mt-4 ${className}`}>
    <div className="text-2xl font-bold text-center text-green-800">{title}</div>
    <div className="mt-4 text-xl text-neutral-700">{description}</div>
  </div>
);

const textBlocks = [
  {
    title: "Zero side-effects",
    description: "Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs",
  },
  {
    title: "Individual Treatment",
    description:
      "all Treatments are personalized based on a person's unique constitution and health concerns.",
  },
];

const images = [
  {
    src: "/assets/ayurvedic_consult.png",
    alt: "Ayurvedic consultation image",
    className: "grow w-full shadow-sm aspect-[1.3] max-md:mt-4",
  },
  {
    src: "/assets/ayurvedic_treat1.png",
    alt: "Zero side-effects image",
    className: "grow shrink-0 max-w-full shadow-sm aspect-[1.06] w-[293px] max-md:mt-5",
  },
  {
    src: "/assets/ayurvedic_treat2.png.png",
    alt: "Individual treatment image",
    className: "grow shrink-0 max-w-full shadow-sm aspect-[1.06] w-[294px] max-md:mt-4",
  },
];

function HeroFrame3() {
  return (
    <div className="flex flex-col items-center p-20 max-md:px-5">
      <h1 className="mt-4 text-5xl font-bold text-center text-green-800 max-md:max-w-full max-md:text-4xl">
        What sets Ayurvedic consultations apart?
      </h1>
      <div className="mt-14 w-full max-w-[1236px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center px-8 py-12 w-full text-center text-green-800 bg-white rounded-3xl border-green-800 border-solid shadow-sm border-t-[5px] max-md:px-5 max-md:mt-4 max-md:max-w-full">
              <div className="flex flex-col px-2 max-md:max-w-full">
                <p className="text-3xl leading-[51px] max-md:max-w-full">
                  स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।&quot;
                </p>
                <p className="mt-5 text-lg max-md:max-w-full">
                  [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to
                  cure the disease of a diseased person. ]
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
            <Image {...images[0]} />
          </div>
          <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
            <TextBlock
              title="precise diagnosis"
              description="Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment."
            />
          </div>
        </div>
      </div>
      <div className="mt-4 w-full max-w-[1236px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {textBlocks.map((block, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <TextBlock {...block} />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <Image {...images[index + 1]} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroFrame3;