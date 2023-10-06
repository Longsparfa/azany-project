import React from "react";

const Card = ({ src, title }) => {
  return (
    <>
      <div className="flex ">
        <div className="w-[100%] h-full mx-2 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
          <img src={src} alt="" className=" w-[100%] h-[100%] " />
          <div className="flex justify-between px-2">
            <h1 className="text-sm">{title}</h1>
            <div className="flex">
              <img src="" alt="" className="" />
              <img src="" alt="" className="ml-4 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
