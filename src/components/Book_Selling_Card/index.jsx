import React from 'react'

function index({key, ele}) {
  return (
    <>
      <div
        key={key}
        className="relative min-w-[330px] aspect-square group mx-2 shadow hover:shadow-lg"
      >
        <div className=" overflow-hidden">
          <img
            src={ele.image}
            alt="card.jpg"
            className="cursor-pointer w-full aspect-square object-cover group-hover:scale-105 transition-all duration-500"
          />
        </div>
        <div className="flex justify-end items-start flex-col absolute bg-white/90 to-120% w-full h-full -bottom-[100%] group-hover:bottom-0 transition-all duration-500 p-6">
          <h4 className="my-1 hover:text-rose-500 font-serif font-semibold text-2xl text-slate-800 cursor-pointer ">
            {ele.name}
          </h4>
          <h5 className="my-2 text-slate-400">{ele.author}</h5>
          <div className="flex space-x-4">
            <div className="flex flex-col justify-center mt-2 items-start">
              <div className="text-orange-400">
                <i class="fa-solid fa-star text-sm"></i>
                <i class="fa-solid fa-star text-sm"></i>
                <i class="fa-solid fa-star text-sm"></i>
                <i class="fa-solid fa-star-half-stroke text-sm"></i>
                <i class="fa-regular fa-star text-sm"></i>
              </div>
              <span className="text-slate-400 text-sm">
                {" "}
                (<span className="text-yellow-500">{ele.reviews}</span> Reviews)
              </span>
            </div>
            <div className="flex justify-end items-end text-2xl text-rose-500 font-semibold cursor-pointer">
              $<span>{ele.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index