import React from "react";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logo } from "../assets";
import Toggle from "./Toggle";
import Search from "./Search";

const cart = (
  <span className="flex font-bold text-2xl text-[#242424] relative">
    Cart
    <FaShoppingCart size={30} className="text-[#242424] " />
    <p className="text-[#ffff] bg-[#c41805] absolute top-[-1rem] right-[-1rem] font-medium">
      0
    </p>
  </span>
);

const Header = () => {
  return (
    <>
      <header className="min-w-[1000px]">
        <div className="bg-white h-[50px] flex items-center ">
          <div className="flex items-center m-4">
            <img src={logo} alt="" className="h-[35px] w-[100%] m-2 " />
            <div className="pr-4 pl-4">
              <div className="text-xl text-[#242424]">Delivered to</div>
              <div className="text-sm lg:text-base font-bold text-[#242424]">
                Nigeria
              </div>
            </div>
          </div>
          <div className="flex grow relative itmes-center">
            <Search />
          </div>
          <div className="flex items-center m-4">
            <div className="pr-4 pl-4">
              <div className="text-xl text-[#242424]">welcome, sign in</div>
              <div className="text-sm lg:text-base font-bold text-[#242424]">
                Accounts and Lists
              </div>
            </div>
            <div className="pr-4 pl-4">
              <div className="text-xl text-[#242424]">Returns</div>
              <div className="text-sm lg:text-base font-bold text-[#242424]">
                & Orders
              </div>
            </div>
            <div className="flex px-3">{cart}</div>
          </div>
          <div className="flex flex-col max-w-[220px] w-[100%] justify-center items-center ">
            <h4 className="not-italic font-semibold lg:text-[12px] lg:leading-[24px] uppercase text-[rgba(255, 255, 255, 0.4)] mb- text-sm  ">
              Call <span className="text-[#c41805] ">to</span> order
            </h4>
            <a
              className="text-sm sm:text-[18px] lg:leading-[30px] text-[#242424] mb-[16px] transition 0.3s ease relative hover:text[#fff] hover:left-[6px]"
              href="tel:+342-4783-2838"
            >
              +342-4783-2838
            </a>
          </div>
        </div>
        <div className="flex justify-between bg-[#1c0b1e] h-[8rem] ">
          <div className="hidden lg:flex justify-center items-center p-4">
            <Toggle />
            <a href="#" className="mx-4 text-xl">
              Manufacturers
            </a>
            <a href="/merchant" className="mr-4 text-xl ">
              Merchants
            </a>
            <a href="#" className="mr-4 text-xl ">
              Farmers
            </a>
            <a href="#" className="mr-4 text-xl ">
              Retailers
            </a>
          </div>
          <div className="h-[8rem] w-1 bg-white mr-4"></div>
          <div className="hidden lg:flex justify-center items-center">
            <a href="#" className="mr-4 text-xl ">
              Login
            </a>
            <div className="h-10 w-1 bg-white mr-4"></div>
            <a href="#" className="text-xl">
              Signup
            </a>
          </div>
          <div className="flex justify-center items-center w-full lg:w-[400px] m-w-[100%] relative  mr-4">
            <button className="absolute left-[38px] lg:left-[10px] h-[60%] top-[20%] ">
              <BiSearch size={20} className="lg:pr-4 text-[#242424]" />
            </button>
            <input
              type="text"
              placeholder="Search for products"
              className="bg-[#e7e7ed] text-[#242424] text-xl w-[80%] lg:w-[100%] rounded-[10px] py-2 px-8 lg:px-10  focus:outline-none "
            />
            <button className=" px-4 text-xl ">Go</button>
            <div className="lg:hidden">
              <Toggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
