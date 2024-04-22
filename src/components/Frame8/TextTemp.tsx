import * as React from "react";

interface TextProps {
  text: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
};

const TextTemp: React.FC = () => {
  const textData = [
    {
      text: "Amrutam home App",
      className:
        "w-full text-5xl font-bold text-green-800 capitalize leading-[67.2px] max-md:max-w-full max-md:text-4xl",
    },
    {
      text:
        "The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.",
      className:
        "mt-4 w-full text-base tracking-normal text-stone-500 max-md:max-w-full",
    },
    {
      text:
        "Get a diet & lifestyle consultation with ayurvedic experts across the globe",
      className:
        "mt-6 w-full text-3xl font-medium leading-10 text-black capitalize max-md:max-w-full",
    },
    {
      text: "Get the App now",
      className:
        "mt-16 w-full text-4xl font-bold text-black capitalize leading-[50.4px] max-md:mt-10 max-md:max-w-full",
    },
  ];

  const imageData = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a147702c8fd5775a778806689a5b256b86437ee2c2edff77d057ff26db88badd?apiKey=98ddfae372b8412f9ccb79a7972532dd&",
      alt: "App Store download badge",
      className: "aspect-[3.33] w-[270px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/23c9eacfa688f69e9af274b617abb992f69fc38a882cbc46a65819b8b53d9be4?apiKey=98ddfae372b8412f9ccb79a7972532dd&",
      alt: "Google Play download badge",
      className: "aspect-[3.45] w-[272px]",
    },
  ];

  return (
    <section className="flex flex-col max-w-[574px]">
      {textData.map((item, index) => (
        <Text key={index} text={item.text} className={item.className} />
      ))}
      <div className="flex gap-4 pr-4 mt-8 max-md:flex-wrap">
        {imageData.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            alt={item.alt}
            className={item.className}
          />
        ))}
      </div>
    </section>
  );
};

export default  TextTemp;