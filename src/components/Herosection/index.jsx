import React from "react";
import Btn_Red from "../Btn_Red";

function index() {
  return (
    <>
      <div className="flex justify-center items-center min-h-[70vh] md:min-h-[80vh] mb-6 p-0 lg:p-5">
        <form className="absolute bottom-6 flex items-center justify-center">
          <input type="radio" className="border-2 border-white" name="bg" />
          <input type="radio" className="border-2 border-white" name="bg" />
          <input type="radio" className="border-2 border-white" name="bg" />
        </form>
        <Window />
      </div>
    </>
  );
}

function Window() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full lg:w-[85vw] min-h-[75vh]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1477659803863-c1bf91b34c90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbGxvd2VlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      <span className="py-[4px] px-3 my-3 font-light bg-slate-100 text-slate-800 text-[0.8rem] rounded-full">Science Fiction</span>
      <h4 className="text-[3.5rem] my-6 font-[300] text-center text-white font-serif">
        The History <br/> of Phipino
      </h4>
      <Btn_Red text="Browse Store" />
    </div>
  );
}

export default index;
