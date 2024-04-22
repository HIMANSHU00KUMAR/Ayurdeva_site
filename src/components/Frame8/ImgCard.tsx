

interface MyComponentProps {
  imageSrc: string;
  imageAlt: string;
}

function ImgCard({ imageSrc, imageAlt }: MyComponentProps) {
  return (
    <img
      loading="lazy"
      src={imageSrc}
      alt={imageAlt}
      className="w-full aspect-[1.3] max-w-[534px] max-md:w-full"
    />
  );
}

export default ImgCard;