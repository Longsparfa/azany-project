import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { art, freeInterest, avc } from "../../assets/index";



const sliderData = [art, freeInterest, avc];


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderLength = sliderData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1);
  };

  return (
    <div className="w-[100%] h-[30vh] relative overflow-hidden  ">
      <AiOutlineArrowLeft
        className="border-solid border-[2px] border-[#c41805] rounded-[50%] bg-[#1c0b1e] text-white w-[2.5rem] h-[2.5rem] cursor-pointer absolute top-[50%] translate-y-[50%] z-[2] hover:bg-[#fff] left-[1.5rem] text-[#00a35c] "
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className="border-solid border-[2px] border-[#c41805] rounded-[50%] bg-[#1c0b1e] text-white w-[2.5rem] h-[2.5rem] cursor-pointer absolute top-[50%] translate-y-[50%] z-[2] hover:bg-[#fff] right-[1.5rem] text-[#00a35c] "
        onClick={nextSlide}
      />


<div className="flex overflow-hidden">
      <div className="flex w-full overflow-x-auto scrollbar-hidden">
        {sliderData.map((image, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-[100%] h-[100%] -translate-x-[50%] transition ease delay-0.5s opacity-1 translate-x-0 overflow-hidden "
          >
            <img
              src={sliderData[currentSlide]}
              alt={`Image ${index + 1}`}
              className="w-full h-full lg:object-fit"
            />
          </div>
        ))}
      </div>
      
    </div>
  );
      
    

      {/* <div className="absolute top-0 left-0 w-[100%] h-[100%] -translate-x-[50%] transition ease delay-0.5s opacity-1 translate-x-0 ">
          <img
            src={sliderData[currentSlide]}
            alt="slide"
            className="w-[100%] h-[100%] "
          />
        </div> */}
    </div>
  );
};

export default Slider;
