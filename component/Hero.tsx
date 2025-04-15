import React from "react";
let hero = "/images/ero.png";

export default function Hero() {
  return (
    <div
      className="w-[100%]  h-[100vh] translate-y-[-100px] bg-white  
    
    
    "
    >
      <img
        className=" w-[100%] max-md:h-[70vh]  
      max-md:scale-[1.5] "
        src={hero}
        alt=""
      />

      <div
        className=" w-[60%] mx-auto
       translate-y-[-500px] text-center  max-md:w-[90%]
        max-md:translate-y-[-350px]  "
      >
        <h1
          className="text-[white]  font-bolder text-[70px]  
        max-md:text-[38px] "
        >
          Turning Creative Ideas <br /> into Success
        </h1>

        <p className="text-white text-[17px] my-10 max-md:text-[16px]  ">
          Consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt
          dolore magna aliqua quis nostrud exerc.
        </p>

        <button
          className="bg-[#05bed6] px-9 py-4 rounded-full 
        text-[white] font-bold "
        >
          Discover Now
        </button>
      </div>
    </div>
  );
}
