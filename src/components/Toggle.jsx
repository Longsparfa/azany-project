import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex  ">
      {toggle ? (
        <AiOutlineClose
          color="#fff"
          fontSize={27}
          className="cursor-pointer"
          onClick={() => setToggle(false)}
        />
      ) : (
        <AiOutlineMenu
          color="#fff"
          fontSize={27}
          className="cursor-pointer"
          onClick={() => setToggle(true)}
        />
      )}

      {toggle && (
        <div className="fixed top-0 left-0 w-[250px] h-[100%] flex flex-col">
          <div className="overflow-auto ">
            <div>
              <a
                href="#projects"
                className="text-[2rem] leading-[32px] my-[1rem] mx-0 text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white"
              >
                Project
              </a>
              <a
                href="#tech"
                className="text-[2rem] leading-[32px] my-[1rem] mx-0 text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white"
              >
                Technologies
              </a>
              <a
                href="#about"
                className="text-[2rem] leading-[32px] my-[1rem] mx-0 text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white"
              >
                About
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toggle;
