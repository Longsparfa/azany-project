import React from "react";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logo } from "../assets";
import Toggle from "./Toggle";
import Search from "./Search";

const cart = (
  <span className="flex font-bold text-2xl text-[#242424] w-[100%] relative">
    Cart
    <FaShoppingCart size={20} className="text-[#242424] " />
    <p className="text-[#ffff] bg-[#c41805] absolute top-[-1rem] right-[-1rem] font-medium">
      0
    </p>
  </span>
);

const Header = () => {
  return (
    <>
      <header className="w-full">
        <div className="bg-white h-[50px] flex items-center ">
          <div className="flex items-center m-4">
            <img
              src={logo}
              alt=""
              className="h-[1.5rem] lg:h-[3rem] w-[100%] m-2 "
            />
          </div>
          <div className="flex grow relative itmes-center">
            <Search />
          </div>
          <div className="hidden md:flex items-center m-4">
            <div className="pr-4 pl-4">
              <div className="text-xl text-[#242424]">welcome, sign in</div>
              <div className="text-sm lg:text-base font-bold text-[#242424]">
                Accounts and Lists
              </div>
            </div>
            <div className="px-4 ">
              <div className="text-xl text-[#242424]">Delivered to</div>
              <div className="text-sm lg:text-base font-bold text-[#242424]">
                Nigeria
              </div>
            </div>
            <div className="pr-4 pl-4">
              <div className="text-xl text-[#242424]">Returns</div>
              <div className="text-sm lg:text-base font-bold text-[#242424]">
                & Orders
              </div>
            </div>
          </div>
          <div className="flex pr-4 pl-4">{cart}</div>
        </div>
        <div className="flex bg-[#1c0b1e] space-x-3 p-2 pl-6 ">
          <a href="#" className=" text-xs sm:text-sm">
            Today's deal
          </a>

          <a href="#" className=" text-xs sm:text-sm">
            Manufacturers
          </a>

          <a href="/merchant" className=" text-xs sm:text-sm ">
            Merchants
          </a>

          <a href="#" className=" text-xs sm:text-sm ">
            Farmers
          </a>
          <a href="#" className=" text-xs sm:text-sm ">
            Retailers
          </a>
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <div className="pr-4">
              Call <span className="text-[#c41805] ">to </span> order
            </div>

            <a
              className="text-sm transition 0.3s ease relative hover:text[#fff] hover:left-[6px]"
              href="tel:+342-4783-2838"
            >
              +342-4783-2838
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
