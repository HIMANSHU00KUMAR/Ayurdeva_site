import ImgCard from "./ImgCard"
import TextTemp from "./TextTemp"


const HeroFrame8 = () => {
  return (
    <div className="flex px-[146px] py-[106px] max-md:flex-col  max-md:px-3 max-md:text-center">
        <div className= ""> <TextTemp/></div>

        <div className="max-md:py-3">
            <ImgCard imageSrc={"/assets/phone.png"} imageAlt={"phonepic"}/>
        </div>
       
        
      
    </div>
  )
}

export default HeroFrame8
