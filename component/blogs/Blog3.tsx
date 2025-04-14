import React from "react";

let blog3 = "/images/blog3.jpg";

export default function Blog3() {
  return (
    <div className="w-[70%] max-md:w-[100%] flex flex-col">
      <div
        className="w-[fit] h-[fit]  rounded-2xl *:
      overflow-hidden "
      >
        <img
          className="w-[100%] hover:scale-[1.2]
        ease-in-out 
        "
          src={blog3}
          alt=""
        />
      </div>
      <div>
        <p
          className="text-[13px]  text-[#080337] font-bold hover:text-[#4703ff] 
        mt-[20px]"
        >
          MEDIA SEO
        </p>
        <p className="text-[26px] max-md:text-[20px]  mt-[20px]  text-[#080337] hover:text-gray-500 font-bold">
          Top 5 targeting techniques <br /> to attract customers.
        </p>
        <p className="text-gray-500  mt-[20px]">April, 2020 . Comments</p>
      </div>
    </div>
  );
}
