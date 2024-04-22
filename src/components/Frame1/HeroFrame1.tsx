import CardTemp from "./CardTemp";
import ImgTemp from "./ImgTemp";
import TextCard from "./TextCard";

const HeroFrame1: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[868px] max-md:w-full max-md:justify-center">
      <div className="py-8">
  
      <div className="hidden px-4  w-16 max-md:flex" >
            <img src="/icons/lines.png" alt="" />
          </div>
        <div className="hidden  justify-center max-md:flex ">
      
          <div className="w-44">
            <img src="/icons/title.png" alt="" />
          </div>

        </div>


      </div>

      {/* Responsive Background Image and TextCard */}

      <div className="relative bg-red-800 min-h-[640px] flex justify-end  max-md:w-full  max-md:justify-centers">

        <div className=" absolute max-w-[904px] top-28 left-10  max-md:left-10 max-md:w-[460px] max-md:text-center ">
          <TextCard />
        </div>
        <div className="max-w-[789px] min-h-[640px]  max-md:w-full custombg"></div>
        <div className=" max-w-[789px] min-h-[640px]  max-md:w-full max-md:hidden ">
          <ImgTemp />
        </div>

      </div>




      {/* Responsive Cards */}
      <div className="px-10 py-5 max-md:px-5 max-md:py-10">
        <CardTemp />
      </div>
    </div>
  );
};

export default HeroFrame1;
