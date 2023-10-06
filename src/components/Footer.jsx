import React from "react";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className="bg-[#1c0b1e] text-white h-[8rem] text-[1.6rem] flex justify-center items-center">
      {" "}
      &copy; {year}
      <p className="text-white pl-4">All Rights Reserved</p>
    </div>
  );
};

export default Footer;
