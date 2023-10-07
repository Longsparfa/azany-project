import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <>
      <div className="w-[100%] ">
        <div className="flex items-center h-10 bg-[#c41805] rounded ">
          <select className="p-2 bg-[#1c0b1e] border-0 text-xs sm:text-sm ">
            <option value="All">All</option>
            <option value="Deals">Deals</option>
            <option value="Azany">Azany</option>
            <option value="Fashion">Fashion</option>
            <option value="Category">Category</option>
            <option value="Home">Home</option>
            <option value="Mobile">Mobile</option>
          </select>
          <input
            type="text"
            placeholder="Search for products"
            className="flex grow items-center h-[100%] rounded-l bg-[#626a6b] text-[#fff] text-sm sm:text-xl p-4 focus:outline-none "
          />
          <button className="w-[45px] ">
            <BiSearch size={20} className="text-[#242424] m-auto" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
