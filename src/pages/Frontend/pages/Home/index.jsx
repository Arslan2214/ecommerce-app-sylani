import React from "react";
import Herosection from "../../../../components/Herosection";
import Card from "../../../../components/Book_Selling_Card";
import Cards from "../../../../Config/BooksData.json";
import Preview from '../../../../components/Featured_Week_Card'
import Sections from '../../../../components/3_Sections'

function index() {
  // console.log(Cards)
  return (
    <>
      <Herosection />

      {/* Best Sells Section | Cards Section |  */}
      <h3 className="font-serif text-[40px] my-4 text-center">Best Selling Books Ever</h3>
      <div className="relative mb-16 py-5 px-20 overflow-hidden shadow-md">
        <span className="absolute text-5xl text-slate-600 px-5 py-0 top-[50%] cursor-pointer -left-1 bg-white z-30">
          <i class="fa-solid fa-chevron-left"></i>
        </span>
        <span className="absolute text-5xl text-slate-600 px-5 py-0 top-[50%] cursor-pointer -right-2 bg-white z-30">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <div className="flex overflow-hidden mx-auto">
          {Cards.map((item, index) => {
            return <Card key={index} ele={item} />;
          })}
        </div>
      </div>

      {/* Featured Preview Section */}
      <Preview />

      {/* Extra Sections */}
      <Sections />
    </>
  );
}

export default index;
