import * as React from "react";

interface ExpertCardProps {
    imageSrc: string;
    name: string;
    title: string;
    experience: string;
    speciality: string;
    specialityIcon: string;
    capIcon: string;
}

const ExpertCard: React.FC<ExpertCardProps> = ({
    imageSrc,
    name,
    title,
    experience,
    speciality,
    specialityIcon,
    capIcon,
}) => {
    return (
        <div className="flex flex-col grow justify-center text-xl max-md:mt-10">
            <div className="flex flex-col items-center pt-11 w-full bg-yellow-50 rounded-[40px]">
                <img
                    loading="lazy"
                    src={imageSrc}
                    alt={`${name}'s profile picture`}
                    className="max-w-full rounded-full aspect-[0.97] w-[149px]"
                />
                <div className="mt-6 text-center text-black capitalize font-[350]">
                    {name}
                </div>
                <div className="flex gap-1 self-stretch mx-6 mt-2 text-base font-medium leading-5 text-zinc-500 max-md:mx-2.5">
                    <div>Ayurveda Practitioner</div>
                    <div>{title}</div>
                </div>
                <div className="flex">
                    
                        <img
                            loading="lazy"
                            src={capIcon}
                            alt={`${capIcon} icon`}
                            className="shrink-0 self-start w-4  aspect-square mt-4  "
                        />
                    

                    <div className="justify-center px-4 py-0.5 mt-3 text-base tracking-normal leading-5 text-neutral-950">
                        {experience}
                    </div>
                </div>

                <div className="flex flex-col justify-center px-3.5 py-1.5 mt-5 max-w-full text-base font-semibold tracking-normal leading-5 text-green-800 rounded-2xl bg-green-800 bg-opacity-10 w-[150px]">
                    <div className="flex gap-1">
                        <img
                            loading="lazy"
                            src={specialityIcon}
                            alt={`${speciality} icon`}
                            className="shrink-0 self-start w-4 aspect-square"
                        />
                        <div>{speciality}</div>
                    </div>
                </div>
                <button className="justify-center items-center self-stretch px-16 py-5 mt-8 font-semibold tracking-normal text-white bg-green-800 rounded-none leading-[90%] max-md:px-5">
                    Book a session
                </button>
            </div>
        </div>
    );
};

const experts = [
    {
        imageSrc: "/assets/expert.png",
        name: "Dr. Vaishali sharma",
        title: "(BAMS, MD)",
        experience: "25 years of experience",
        speciality: "Skin Specialist",
        specialityIcon: "/icons/pin.png",
        capIcon: "/icons/cap.png"
    },
    {
        imageSrc: "/assets/expert.png",
        name: "Dr. Vaishali sharma",
        title: "(BAMS, MD)",
        experience: "25 years of experience",
        speciality: "Skin Specialist",
        specialityIcon: "/icons/pin.png",
        capIcon: "/icons/cap.png"
    },
    {
        imageSrc: "/assets/expert.png",
        name: "Dr. Vaishali sharma",
        title: "(BAMS, MD)",
        experience: "25 years of experience",
        speciality: "Skin Specialist",
        specialityIcon: "/icons/pin.png",
        capIcon: "/icons/cap.png"
    },
];

function HeroFrame7() {
    return (
        <section className="flex flex-col items-center px-16 pt-20 pb-2 bg-white max-md:px-5">
            <div className="flex flex-col items-center w-full max-w-[1225px] max-md:max-w-full">
                <h2 className="text-5xl font-bold text-center text-green-800 capitalize max-md:max-w-full max-md:text-4xl">
                    Meet our Ayurveda experts
                </h2>
                <div className="flex gap-5 items-center self-stretch mt-20 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col justify-center self-stretch my-auto">
                        <img src="/icons/Arrow 1 (1).png" className="shrink-0 p-3 bg-white rounded-full border border-solid border-stone-300 h-[71px] stroke-[1px] w-[71px] text-sm" />
                    </div>
                    <div className="flex-auto self-stretch max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            {experts.map((expert, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full ${index!==0 && "hidden md:flex"}`}
                                >
                                    <ExpertCard {...expert} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center self-stretch my-auto">
                        <img src="/icons/Arrow.png" className="shrink-0 p-3 bg-white rounded-full border border-solid border-stone-300 h-[71px] stroke-[1px] w-[71px]" />
                    </div>
                </div>
                <div className="flex gap-5 justify-between mt-9">
                    <div className="shrink-0 w-3 bg-green-800 rounded-full h-[9px]" />
                    <div className="shrink-0 w-3 rounded-full bg-stone-300 h-[9px]" />
                    <div className="shrink-0 w-3 rounded-full bg-stone-300 h-[9px]" />
                </div>
                <button className="flex gap-0.5 px-6 mt-11 text-2xl font-medium tracking-tight text-green-800 rounded-lg border border-green-800 border-solid bg-neutral-200 bg-opacity-40 leading-[58px] max-md:px-5 max-md:mt-10">
                    <span>Find more experts</span>
                    <img
                        loading="lazy"
                        src="/icons/chevron-right.png"
                        alt="arrow"
                        className="shrink-0 my-auto w-6 aspect-square "
                    />
                </button>
            </div>
        </section>
    );
}

export default HeroFrame7