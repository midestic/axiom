import { BiArrowToRight } from "react-icons/bi";

let foot = "/images/foot.svg";

export default function Footer() {
  return (
    <div className="  text-white">
      {/* <div
          className="w-[100%] h-[800px] bg-[url('/images/foot.svg')] 
        bg-cover bg-center transform scale-y-[-1]"
        ></div> */}

      <div
        className="w-full h-[300px] bg-[url('/images/foot.svg')]
         bg-cover bg-center transform scale-y-[-1]  max-md:stre  "
      ></div>
      <div className="bg-[#000000] p-[50px] max-md:p-[10px] max-md:w-[100vw]">
        <div
          className=" w-[80%] mx-auto pb-[40px] flex justify-between bg-[#000000]
      max-md:grid max-md:grid-cols-2  max-md:w-[100%] "
        >
          <div>
            <p className="text-[18px] font-bold mb-[20px] ">Office</p>
            <p className="font-[16px]">
              Germany--- <br />
              785 15h Street, Office 478 <br />
              Berlin, De 81568
            </p>
            <p className="font-[16px] mt-[10px] mb-[20px]">info@email.com</p>

            <p className="font-[16px]">+1 840 841 25 69</p>
          </div>

          <div>
            <p className="text-[18px] font-bold mb-[20px] ">Links</p>
            <p className="font-[16px] my-[20px]">Home</p>
            <p className="font-[16px] my-[20px]">Services</p>
            <p className="font-[16px] my-[20px]">About Us</p>
            <p className="font-[16px] my-[20px]">Our Team</p>
            <p className="font-[16px] my-[20px]">Contacts</p>
          </div>

          <div>
            <p className="text-[18px] font-bold mb-[20px] ">Links</p>
            <p className="font-[16px] my-[20px]">Home</p>
            <p className="font-[16px] my-[20px]">Services</p>
            <p className="font-[16px] my-[20px]">About Us</p>
            <p className="font-[16px] my-[20px]">Our Team</p>
            <p className="font-[16px] my-[20px]">Contacts</p>
          </div>

          <div>
            <p className="text-[18px] font-bold mb-[20px]">Socials</p>
            <p className="font-[16px] my-[20px]">Facebook</p>
            <p className="font-[16px] my-[20px]">Twitter</p>
            <p className="font-[16px] my-[20px]">Dribble</p>
            <p className="font-[16px] my-[20px]">Instagram</p>
          </div>

          <div className="  max-md:w-[90vw]">
            <p className="text-[18px] font-bold mb-[20px]">Newsletter</p>

            <p className="flex justify-between">
              <input
                className="bg-[#111922] p-[15px] rounded-full max-md:w-[80%] "
                type="email"
                placeholder="Enter Your Email Address"
              />{" "}
              <button className="p-[16px] bg-[#5300f1] rounded-full">
                <BiArrowToRight />{" "}
              </button>
            </p>

            <p>
              <input className="  border" type="checkbox" /> I agree to{" "}
              <a href="">the Privacy Policy</a>
            </p>
          </div>
        </div>

        <div className="w-[85%] bg-[#000000] mx-auto p-[10px] border-t border-t-gray-100  ">
          <p>AxiomThemes © 2025. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
