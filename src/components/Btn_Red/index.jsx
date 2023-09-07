import React from "react";

function index({text, m}) {
  return (
    <button className={`relative 
    ${!m ? 'my-5' : 'm-0'} 
    hover:scale-[1.05] bg-rose-500 overflow-hidden px-4 py-2 rounded-full before:absolute before:top-0 before:right-[100%] before:h-full before:w-full before:content-'' before:bg-rose-600 hover:before:right-0 before:transition-all before:duration-500 transition-all duration-700`}>
      <span className="relative z-10 text-bold text-slate-100 text-[1.1rem]">
        {text}
      </span>
    </button>
  );
}

export default index;
