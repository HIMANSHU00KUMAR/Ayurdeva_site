

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`justify-center self-start px-10 pt-7 pb-5 mt-12 font-medium uppercase bg-green-800 rounded-2xl max-md:px-5 max-md:mt-10 ${className}`}
    >
      {children}
    </button>
  );
};

const TextCard: React.FC = () => {
  return (
    <div className="flex flex-col text-xl text-white min-h-[540px] max-w-[904px] ">
      <h1 className="w-full text-3xl text-yellow-50 max-md:max-w-full max-md:text-xl">
        Namaste, Welcome to Ayurdevaa{" "}
      </h1>
      <h2 className="mt-2 w-full text-4xl font-bold underline capitalize leading-[67px] max-md:max-w-full max-md:text-3xl max-md:leading-[62px]">
        Step into Holistic Healing with{" "}
        <span className="text-yellow-50 underline">Ayurveda</span>
        <span className="capitalize">
          {" "}
          Book Consultation with certified Experts.{" "}
        </span>
      </h2>
      <p className="mt-4 w-full leading-7 lowercase text-stone-300 max-md:max-w-full">
        <span className="font-medium text-stone-300">
          Dive into the world of ayurveda and{" "}
        </span>
        <span className="font-medium lowercase text-stone-300">
          Experience Personalized Health Solutions and Holistic Guidance from
          Trusted Ayurvedic Doctors Anytime, anywhere.
        </span>
      </p>
      <Button>Book an Appointment</Button>
    </div>
  );
};

export default TextCard;
