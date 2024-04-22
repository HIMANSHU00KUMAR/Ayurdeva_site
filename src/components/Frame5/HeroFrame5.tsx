import * as React from "react";

interface CardProps {
  number: number;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-5 py-7 w-full font-bold text-center bg-yellow-50 rounded-3xl border-t-4 border-green-800 border-solid shadow-sm max-md:mt-6">
        <div className="justify-center items-center  self-center py-5 text-5xl text-white whitespace-nowrap rounded-full border border-green-800 border-solid bg-green-800 bg-opacity-70 h-[90px] stroke-[1px] w-[90px] max-md:px-5 max-md:text-4xl">
          {number}
        </div>
        <h3 className="mt-6 text-2xl text-green-800">{title}</h3>
        <p className="mt-2 text-xl text-zinc-800">{description}</p>
      </div>
    </div>
  );
};

const HeroFrame5: React.FC = () => {
  const cards = [
    {
      number: 1,
      title: "Make Appointment",
      description:
        "You must make an appointment in advance, to choose the service and date.",
    },
    {
      number: 2,
      title: "Consultations",
      description:
        "The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
      number: 3,
      title: "Treatment Planning",
      description:
        "The Ayurvedic practitioner creates a personalized treatment plan for you",
    },
    {
      number: 4,
      title: "Maintenance",
      description:
        "These visits allow for assessment of progress, adjustments to the treatment.",
    },
  ];

  return (
    <section className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col items-center mt-4 w-full max-w-[1232px] max-md:max-w-full">
        <h2 className="px-9 pt-4 pb-1 text-5xl font-bold text-center text-green-800 capitalize max-md:px-5 max-md:max-w-full max-md:text-4xl">
          Our ayurvedic approach
        </h2>
        <p className="mt-6 text-xl text-center text-zinc-800 w-[772px] max-md:max-w-full">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient's body type, medical history, and
          current health conditions.
        </p>
        <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {cards.map((card) => (
              <Card
                key={card.number}
                number={card.number}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFrame5;