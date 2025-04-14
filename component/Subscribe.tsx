export default function Subscribe() {
  return (
    <div className="bg-[#dfe4ea] pt-[50px]">
      <div
        className="w-[85%] mx-auto flex justify-around max-md:w-[100%] 
      max-md:flex max-md:flex-col max-md:px-[20px] "
      >
        <div className="w-[40%] max-md:w-[100%]  ">
          <h1 className="text-[47px] text-[#080337] font-bold  max-md:text-[24px]">
            Subscribe for the <br /> exclusive updates!
          </h1>
        </div>
        <div className="w-[60%] max-md:w-[100%] ">
          <div className="w-full  flex justify-between">
            <input
              className="bg-white py-5 rounded-full w-[65%] pl-[20px] text-[16px] "
              type="email"
              placeholder="Enter Your Email Address"
            />{" "}
            <button
              className="bg-[#4703ff] px-10 py-5 rounded-full 
             w-[30%] text-white font-bold max-md:text-[14px] max-md:px-2"
            >
              Subscribe
            </button>
          </div>

          <p className="text-gray-500 mt-5">
            <input type="checkbox" /> I agree to the
            <a className="underline ml-2 " href="">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
