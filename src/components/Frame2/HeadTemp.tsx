

interface BenefitProps {
  title: string;
  description: string;
  icon: string;
  iconBgColor: string;
}

const Benefit: React.FC<BenefitProps> = ({ title, description, icon, iconBgColor }) => (
  <div className="flex gap-4">
    <div className="flex flex-col justify-center items-start">
      <div className={`flex justify-center items-center px-5 rounded-full h-[100px] w-[100px] ${iconBgColor}`}>
        <img src={icon} alt={title} className="w-16 aspect-square" />
      </div>
    </div>
    <div className="flex flex-col my-auto">
      <div className="text-xl font-bold text-black">{title}</div>
      <div className="mt-2 text-base text-neutral-600">{description}</div>
    </div>
  </div>
);

const benefits: BenefitProps[] = [
  {
    title: "Personalized Wellness",
    description: "Get treatments made just for you based on your individual doshas (body type)",
    icon: "/icons/heartbeat (1) 1.png",
    iconBgColor: "bg-slate-100",
  },
  {
    title: "Focus on prevention",
    description: "Stop problems even before they start.",
    icon: "/icons/ribbon 1.png",
    iconBgColor: "bg-gray-200",
  },
  {
    title: "Mind-Body Connection",
    description: "Keep your mind and body in sync for a happy life.",
    icon: "/icons/lotus-position 1.png",
    iconBgColor: "bg-red-50",
  },
  {
    title: "Holistic Healing",
    description: "Fix the root problem for long-lasting health.",
    icon: "/icons/protection 1.png",
    iconBgColor: "bg-violet-50",
  },
  {
    title: "Natural Remedies",
    description: "Using herbs and natural therapies for healing.",
    icon: "/icons/ayurveda 1.png",
    iconBgColor: "bg-orange-50",
  },
  {
    title: "Boosting immunity",
    description: "Stay strong and healthy for life, not just for today.",
    icon: "/icons/strong 1.png",
    iconBgColor: "bg-gray-200",
  },
];

const HeadTemp: React.FC = () => {
  return (
    <section className="flex justify-center items-center px-16 py-16 bg-white max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1211px] max-md:max-w-full">
        <h1 className="px-7 pt-3 pb-px max-w-full text-5xl font-bold text-center text-green-800 capitalize leading-[54px] w-[806px] max-md:px-5 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
          Discover Ayurveda's magic with us
        </h1>
        <p className="mt-6 text-xl leading-7 text-center text-stone-500 w-[671px] max-md:max-w-full">
          Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to
          better health using ancient wisdom, a totally effective approach for a better life.
        </p>
        <div className="self-stretch mt-10 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex z-10 flex-col self-stretch my-auto max-md:mt-7">
                <div className="flex flex-col">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <Benefit key={index} {...benefit} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
              <img src="/assets/ayurdevgirl.png" alt="Ayurvedic treatment" className="grow w-full aspect-[0.96] max-md:max-w-full" />
            </div>
            <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-7">
                <div className="flex flex-col">
                  {benefits.slice(3).map((benefit, index) => (
                    <Benefit key={index} {...benefit} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadTemp;