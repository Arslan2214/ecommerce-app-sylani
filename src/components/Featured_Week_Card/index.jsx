import React from "react";

function index() {
  return (
    <>
      <div className="group relative flex flex-col items-center justify-center sm:flex-row w-[90%] my-24 mx-auto p-10 bg-rose-500 rounded-sm space-x-5">
        <img
          src="https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best-books1.jpg"
          alt="img.png"
          className="group-hover:scale-[1.01] max-w-[345px] group-hover:shadow-2xl transition-all duration-300"
        />
        <div className="w-full sm:w-[60%] p-10 text-slate-100">
          <h4 className="font-serif text-5xl mt-5">The Range Of Dragon</h4>
          <h6 className="my-2">By Even Winter</h6>
          <span className="flex mt-16 text-[3.5rem]">$50.00</span>
          <div className="flex space-x-2">
            <div className="text-slate-50">
              <i class="fa-solid fa-star text-sm"></i>
              <i class="fa-solid fa-star text-sm"></i>
              <i class="fa-solid fa-star text-sm"></i>
              <i class="fa-solid fa-star-half-stroke text-sm"></i>
              <i class="fa-regular fa-star text-sm"></i>
            </div>
            <div>
              ( <span>120</span> Reviews)
            </div>
          </div>
          <button className="relative my-5 hover:scale-[1.05] bg-transparent border-2 border-slate-50 hover:text-rose-500 overflow-hidden px-5 py-2 rounded-full before:absolute before:left-0 before:-top-[100%] before:h-full before:w-full before:content-'' before:bg-slate-50 hover:before:top-0 before:transition-all before:duration-500 transition-all duration-700">
            <span className="relative z-10 ">View Details</span>
          </button>
        </div>
        {/* Next & Previous Button  */}
        <span className="absolute text-5xl text-slate-50 px-5 py-0 top-[50%] cursor-pointer -left-1 bg-transparent z-30">
          <i class="fa-solid fa-chevron-left"></i>
        </span>
        <span className="absolute text-5xl text-slate-50 px-5 py-0 top-[50%] cursor-pointer -right-2 bg-transparent z-30">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
      </div>
    </>
  );
}

export default index;
