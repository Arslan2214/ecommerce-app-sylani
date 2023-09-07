import React from "react";
import Btn_Red from "../Btn_Red";

function index() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center px-16 my-8 ">
        <div
          className="flex justify-between items-center my-4 mx-0 md:mx-4 p-5 sm:p-10 w-full md:w-[48%] h-[180px] "
          style={{
            backgroundImage:
              "url(https://preview.colorlib.com/theme/abcbook/assets/img/gallery/wants-bg1.jpg.webp)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h5 className="text-slate-100 text-[1.2rem] sm:text-[1.8rem] lg:text-[2.5rem] font-serif">
            The History <br /> of Phipino
          </h5>
          <Btn_Red text="View Details" />
        </div>
        <div
          className="flex justify-between items-center my-4 mx-0 md:mx-4 p-5 sm:p-10 w-full md:w-[48%] h-[180px] "
          style={{
            backgroundImage:
              "url(https://preview.colorlib.com/theme/abcbook/assets/img/gallery/wants-bg2.jpg.webp)",
          }}
        >
          <h5 className="text-slate-100 text-[1.2rem] sm:text-[1.8rem] lg:text-[2.5rem] font-serif">
            Wilma Mumduya
          </h5>
          <Btn_Red text="View Details" />
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center mx-auto text-center w-[90%] h-[380px] text-slate-200"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5lCBuso_PS63ZlrYNTt8UYRL7q7JfIk52TxPBDzfO5hs9YfJ)",
        }}
      >
        <h4 className="text-2xl sm:text-4xl md:text-6xl font-serif font-extralight">Join Newsletter</h4>
        <p className="text-sm md:text-md text-slate-400">
          Lorem started its journey with cast iron (CI) products in 1980. The
          initial main objective <br /> was to ensure pure water and affordable
          irrigation.
        </p>
        <div className="bg-white rounded-full pl-5 pr-3 py-1 md:pl-8 md:pr-4 md:py-2 my-8 space-x-3">
            <input type="text" placeholder="Enter Email ..." className=" bg-transparent outline-none text-slate-500" />
            <Btn_Red text="Subscribe" m="100" />
        </div>
      </div>
    </>
  );
}

export default index;
