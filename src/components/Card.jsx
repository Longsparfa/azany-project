import React from "react";

const Card = ({ img, title, link }) => {
  return (
    <>
      <div className="h-[420px] bg-white  ">
        <h1 className="text-lg lg:text-xl font-semibold ml-4 mt-4 ">{title}</h1>

        <div className="h-[300px] m-4 ">
          <img src={img} alt="" className="h-[100%] w-[100%] object-cover " />
        </div>

        <div>
          <a href="#" className="text-xs sm:text-sm lg:text-lg ml-4 text-blue-400 ">
            {link}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
