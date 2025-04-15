let cr1 = "/images/creative1.png";
let cr2 = "/images/creative2.png";
let svg1 = "/images/csvg1.svg";
let svg2 = "/images/csvg2.svg";

export default function Creative() {
  return (
    <div
      className="flex  justify-center  py-[100px] 
   max-md:flex max-md:flex-col "
    >
      <div
        className="w-[50%] p-[10px] flex justify-center max-md:w-[100%]
    "
      >
        <div
          className="  w-[70%] mx-auto  flex box-content max-md:w-[100%]
         "
        >
          <img
            className=" w-[300px] h-[300px] max-md:translate-y-[-200px] "
            src={cr1}
            alt=""
          />
          <img
            className=" w-[350px] h-[350px] translate-y-[70px] 
            
            translate-x-[-100px] max-md:translate-y-[-90px]
              max-md:translate-x-[-180px]  max-md:w-[250px] max-md:h-[250px] "
            src={cr2}
            alt=""
          />
        </div>
      </div>
      <div className="w-[50%] max-md:w-[100%] max-md:px-5  ">
        <div className="flex flex-col w-[70%] max-md:w-[100%] mx-auto  ">
          <div>
            <p className="text-[14px] text-[#080337] font-bold ">
              CREATIVE AGENCY
            </p>
            <h2 className=" text-[57px] font-bold text-[#080337] ">
              We help your <br /> business grow
            </h2>
            <p className="text-[17px] text-gray-500">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia.
            </p>
          </div>

          <div className="  flex  flex-col ">
            <div className="flex justify-between mt-[20px]">
              <div className=" w-[30%]  ">
                <img src={svg1} alt="" />
              </div>
              <div className=" w-[70%] ">
                <h4 className="text-[#080337] text-[20px] ">Creative design</h4>
                <p className="text-gray-500">
                  Natus error sit voluptatem accus antium <br /> doloremque.
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-[30px]">
              <div className=" w-[30%] ">
                <img className="w-[50px] " src={svg2} alt="" />
              </div>
              <div className=" w-[70%] ">
                <h4 className="text-[#080337] text-[20px] ">Creative design</h4>
                <p className="text-gray-500">
                  Natus error sit voluptatem accus antium <br /> doloremque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
