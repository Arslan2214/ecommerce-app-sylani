import React from "react";
import { Link } from "react-router-dom";

function index() {
  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Categories",
      path: "/categories",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Pages",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contect",
    },
  ];
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-50 text-white">
        <div className="flex justify-center flex-col sm:flex-row w-full">
          {/* Top-NavBar */}
          <Link to="/" className="text-4xl w-[25%] md:w-[19%] ">
            <img
              src="https://preview.colorlib.com/theme/abcbook/assets/img/logo/logo.png"
              alt="logo.png"
            />
          </Link>
          <div className="hidden md:flex items-center justify-start w-[75%] shadow bg-white pl-[10px] md:w-[35%] rounded-2xl ">
            <input
              type="text"
              placeholder="Search..."
              name=""
              id=""
              className="px-3 py-2 outline-none text-slate-600 w-[86%]"
            />
            <span class="flex justify-center text-xl w-[14%] text-slate-500 hover:text-rose-400 cursor-pointer">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
          <div className="flex items-center justify-end w-[25%]">
            <span className="hidden sm:inline-block text-slate-500 mx-6 cursor-pointer font-semibold hover:text-rose-400">
              FAQ
            </span>
            <span className="hidden md:inline-block relative text-slate-700 text-2xl px-3 mx-6">
              <i class="fa-solid fa-cart-shopping"></i>
              <span className="absolute -top-[40%] -right-[15%] rounded-full flex justify-center items-center text-white font-semibold bg-rose-500 content-none w-[60%] shadow-md aspect-square">
                0
              </span>
            </span>
            <button className="hidden md:inline-block px-8 py-3 mx-6 bg-rose-500 text-white border-2  font-semibold hover:bg-rose-600 rounded-full border-rose-500">
              Sign in
            </button>
          </div>
        </div>
      </nav>
      {/* Main Navigation */}
      <div>
        <ul className="flex justify-center items-center text-md mt-4 p-1">
          {menuItems.map((ele) => {
            return (
              <li className="mx-4 font-semibold hover:text-rose-500 cursor-pointer">
                <Link to={ele.path}>{ele.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default index;
