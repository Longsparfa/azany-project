import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { art, freeInterest, avc } from "../../assets/index";

const sliderData = [art, freeInterest, avc];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, slideInterval, autoScroll]);

  return (
    <div className=" h-[600px] bg-[#626a6b] relative   ">
      <AiOutlineArrowLeft
        className="border-solid border-[2px] border-[#c41805] rounded-[50%] bg-[#1c0b1e] text-white w-[2.5rem] h-[2.5rem] cursor-pointer absolute top-[50%] translate-y-[50%] z-[2] hover:bg-[#242424] left-[1.5rem] text-[#00a35c] "
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className="border-solid border-[2px] border-[#c41805] rounded-[50%] bg-[#1c0b1e] text-white w-[2.5rem] h-[2.5rem] cursor-pointer absolute top-[50%] translate-y-[50%] z-[2] hover:bg-[#242424] right-[1.5rem] text-[#00a35c] "
        onClick={nextSlide}
      />
      <div className="flex overflow-hidden bg-[#626a6b]">
        <div className="flex w-full overflow-x-auto scrollbar-hidden">
          {sliderData.map((image, index) => (
            <div
              key={index}
              className="absolute top-0 left-0 w-[100%] h-[100%] -translate-x-[50%] transition ease delay-0.5s opacity-1 translate-x-0 overflow-hidden "
            >
              <img
                src={sliderData[currentSlide]}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      );
      <div className="h-[50%] bg-gradient-to-b from-[#626a6b]-900 " />
    </div>
  );
};

export default Slider;
