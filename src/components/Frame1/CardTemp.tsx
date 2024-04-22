
interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, imageAlt, title }) => {
  return (
    <div className="flex flex-col grow justify-center px-6 py-10 mx-auto w-full bg-yellow-50 border border-orange-100 border-solid max-md:pl-5">
      <div className="flex gap-3">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center items-center px-4 bg-white rounded-full border border-green-800 border-solid h-[70px] stroke-[1px] w-[70px]">
            <img src={imageSrc} alt={imageAlt} className="w-10 aspect-square" />
          </div>
        </div>
        <div className="my-auto text-lg font-bold leading-6 text-green-800 capitalize">
          {title}
        </div>
      </div>
    </div>
  );
};
const CardTemp: React.FC = () => {
  const cardData = [
    {
      imageSrc: "/icons/speech(1).png",
      title: "Convenient Online & In-Clinic Consultations",
      imageAlt: "Convenient Online & In-Clinic Consultations",
    },
    {
      imageSrc: "/icons/speech(2).png",
      title: "Safe and Effective Treatment",
      imageAlt: "Safe and Effective Treatment",
      
    },
    {
      imageSrc: "/icons/speech(3).png",
      title: "Experienced Ayurvedic Practitioners",
      imageAlt: "Experienced Ayurvedic Practitioners",
    },
    {
      imageSrc: "/icons/speech(4).png",
      title: "Personalized Treatment & Plans Guidance",
      imageAlt: "Personalized Treatment Plans & Guidance icon",
    },
  ];

  return (
    <div className="z-10 self-center px-5 mt-0 w-full max-w-[1239px] max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
            >
              <Card
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                title={card.title}
              />
            </div>
          ))}
        </div>
      </div>
  );
};

export default CardTemp;
