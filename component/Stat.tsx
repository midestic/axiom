export default function Stat() {
  return (
    <div className="bg-[#e9f0f9]">
      <div className="flex justify-around max-md:grid max-md:grid-cols-2  ">
        <div className="   flex flex-col align-middle border-r-gray-900 text-center">
          <h1 className="text-[180px] font-bold text-[#ffffff] m-0 max-md:text-[104px]">
            {" "}
            <span>98</span>
          </h1>
          <p
            className="translate-y-[-140px] text-[24px] font-bold text-[#080337] 
          max-md:text-[20px] max-md:translate-y-[-90px]"
          >
            Projects
          </p>
        </div>
        <div className="flex flex-col align-middle  text-center">
          <h1 className="text-[180px] font-bold text-[#ffffff] max-md:text-[104px]">
            65
          </h1>
          <p
            className="translate-y-[-140px] text-[24px] font-bold text-[#080337] 
          max-md:text-[20px] max-md:translate-y-[-90px] "
          >
            People
          </p>
        </div>
        <div className="flex flex-col align-middle  text-center">
          <h1 className="text-[180px] font-bold text-[#ffffff] max-md:text-[104px]">
            10
          </h1>
          <p
            className="translate-y-[-140px] text-[24px] font-bold text-[#080337] 
          max-md:text-[20px] max-md:translate-y-[-90px]"
          >
            Years
          </p>
        </div>
        <div className="flex flex-col align-middle text-center">
          <h1 className="text-[180px] font-bold text-[#ffffff] max-md:text-[104px]">
            15
          </h1>
          <p
            className="translate-y-[-140px] text-[24px] font-bold text-[#080337] 
          max-md:text-[20px] max-md:translate-y-[-90px]"
          >
            Offices
          </p>
        </div>
      </div>
    </div>
  );
}
