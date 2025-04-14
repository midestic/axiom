let who1 = "/images/who1.png";
let who2 = "/images/who2.png";

export default function Who() {
  return (
    <div className="bg-[#ebf1f9] overflow-y-hidden">
      <div
        className="w-[85%] mx-auto flex justify-around
       max-md:flex max-md:flex-col-reverse "
      >
        <div className=" w-[50%] max-md:w-[100%] py-20">
          <p
            className="text-[14px] font-bold text-[#080337] 
          max-md:text-[13px] "
          >
            WHO WE ARE
          </p>
          <p className="text-[57px] font-bold  max-md:text-[30px] ">
            We provide best <br /> digital services
          </p>

          <p className="text-gray-500  max-md:text-[16px]">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia <br />{" "}
            voluptas sit aspernatur aut odit aut fugit sed quia.
          </p>

          <button
            className="bg-[#05bed6] text-white 
          font-bold px-20 py-5 rounded-full mt-10
          "
          >
            Discover Now
          </button>
        </div>

        <div className=" w-[50%] max-md:w-[100%]">
          <div
            className="flex justify-around  h-fit 
          translate-y-[50px] max-md:translate-y-[30px] 
          "
          >
            <img
              className="scale-[60%] 
            translate-y-[15px]  z-10  max-md:translate-x-[-80px] 
            max-md:translate-y-[20px] max-md:scale-[60%]
            "
              src={who2}
              alt=""
            />
            <img
              className="scale-[80%]  translate-x-[-300px] 
              translate-y-[-50px]  max-md:translate-x-[-350px] 
              "
              src={who1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
