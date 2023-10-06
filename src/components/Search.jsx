import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <>
      <div className="w-[100%] ">
        <div className="flex items-center">
          <select name="" id="">
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
            className="flex items-center h-[100%] rounded-l text-[#242424] "
          />
          <button className="w-[45px] ">
            <BiSearch size={20} className="text-[#242424]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
