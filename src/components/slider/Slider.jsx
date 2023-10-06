import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";

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
    <div className="w-[100%] h-[90vh] relative overflow-hidden bg-[#242424] ">
      <AiOutlineArrowLeft
        className="border-solid border-[2px] border-[#00a35c] rounded-[50%] bg-transparent text-white w-[2.5rem] h-[2.5rem] cursor-pointer absolute top-[50%] translate-y-[50%] z-[2] hover:bg-[#fff] left-[1.5rem] text-[#00a35c] "
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className="border-solid border-[2px] border-[#00a35c] rounded-[50%] bg-transparent text-white w-[2.5rem] h-[2.5rem] cursor-pointer absolute top-[50%] translate-y-[50%] z-[2] hover:bg-[#fff] right-[1.5rem] text-[#00a35c] "
        onClick={nextSlide}
      />

      {sliderData.map((slide, index) => {
        const { image } = slide;
        return (
          <div
            key={index}
            className={
              index === currentSlide
                ? "absolute top-0 left-0 w-[100%] h-[100%] -translate-x-[50%] transition ease delay-0.5s opacity-1 translate-x-0"
                : "absolute top-0 left-0 w-[100%] h-[100%] opacity-0 -translate-x-[50%] transition ease delay-0.5s"
            }
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" className="w-[100%] h-[100%] " />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
