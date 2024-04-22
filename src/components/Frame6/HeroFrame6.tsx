import React from 'react';

interface StoryProps {
  userName: string;
  location: string;
  date: string;
  storyTitle: string;
  storyContent: string;
  imageSrc: string;
  altText: string;
}

const Story: React.FC<StoryProps> = ({
  userName,
  location,
  date,
  storyTitle,
  storyContent,
  imageSrc,
  altText,
}) => (
  <div className="flex flex-col w-[33%] max-md:w-full">
    <div className="flex flex-col grow justify-center max-md:mt-8">
      <div className="flex flex-col pt-px pb-11 bg-white rounded-3xl border border-solid shadow-lg border-zinc-300">
        <div className="justify-center items-start px-7 py-4 text-lg font-bold tracking-normal leading-5 text-black bg-lime-50 rounded-3xl max-md:px-5">
          {storyTitle}
        </div>
        <div className="flex flex-col items-start px-6 mt-8 max-md:px-5">
          <div className="flex gap-5 justify-between ml-3.5 w-full rounded-3xl max-md:ml-2.5">
            <div className="flex gap-3.5">
              <div className="shrink-0 rounded-full bg-neutral-600 h-[60px] w-[60px]" />
              <div className="text-xl font-bold leading-7 text-neutral-700">
                <span className="font-medium">{userName}</span>
                <br />
                <span className="text-lg ">{location}</span>
              </div>
            </div>
            <div className="self-start text-base leading-7 text-black">{date}</div>
          </div>
          <img loading="lazy" src={imageSrc} alt={altText} className="mt-5 ml-4 max-w-full aspect-[5.88] w-[140px] max-md:ml-2.5" />
          <div className="mt-3.5 ml-2.5 text-2xl font-bold leading-6 text-zinc-800">{storyTitle}</div>
          <div className="mt-3 text-lg leading-8 text-neutral-600">{storyContent}</div>
        </div>
      </div>
    </div>
  </div>
);

const storiesData = [
  {
    userName: 'Sophie Moore',
    location: 'Chennai',
    date: '17/02/24',
    storyTitle: 'One of a kind service',
    storyContent: 'Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.',
    imageSrc: '/icons/stars.png',
    altText: 'Customer story image',
  },
  {
    userName: 'Sophie Moore',
    location: 'Chennai',
    date: '17/02/24',
    storyTitle: 'One of a kind service',
    storyContent: 'Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.',
    imageSrc: '/icons/stars.png',
    altText: 'Customer story image',
  },
  {
    userName: 'Sophie Moore',
    location: 'Chennai',
    date: '17/02/24',
    storyTitle: 'One of a kind service',
    storyContent: 'Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.',
    imageSrc: '/icons/stars.png',
    altText: 'Customer story image',
  },
  // Repeat for each story
];

const  HeroFrame6: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-16 pt-20 pb-12 bg-yellow-50 max-md:px-5">
      <section className="flex flex-col items-center mt-3 w-full max-w-[1228px] max-md:max-w-full">
        <h1 className="text-5xl font-semibold text-center text-green-800 lowercase max-md:max-w-full max-md:text-4xl">
          <span className="font-bold text-green-800">S</span>
          <span className="font-bold text-green-800 lowercase">TORIES F</span>
          <span className="font-bold text-green-800 lowercase">ROM OUR VALUED CUSTOMERS</span>
          <span className="font-bold text-green-800 lowercase">!</span>
        </h1>
        <div className="shrink-0 max-w-full h-2 bg-stone-300 w-[808px]" />
        <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {storiesData.map((story, index) => (
              <Story key={index} {...story} />
            ))}
          </div>
        </div>
      </section>
      <div className="flex gap-5 justify-between mt-16 max-md:mt-10">
        <div className="shrink-0 w-3 bg-green-800 rounded-full h-[9px]" />
        <div className="shrink-0 w-3 rounded-full bg-stone-300 h-[9px]" />
        <div className="shrink-0 w-3 rounded-full bg-stone-300 h-[9px]" />
      </div>
    </div>
  );
};

export default HeroFrame6;