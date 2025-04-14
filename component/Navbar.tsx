import { BiSearch } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import styles from "./page.module.css";
import { IoMenuOutline } from "react-icons/io5";

let mNav = "/images/m-nav.png";

export default function Navbar() {
  return (
    <div>
      <div className="hidden max-md:block z-10 relative  p-[10px]  ">
        <div className="flex justify-between">
          <img src={mNav} alt="" />
          <div className="w-[20%] flex text-white">
            <p className="text-[40px]">
              <IoMenuOutline />
            </p>
            <p className="text-[40px]">
              <BiSearch />
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.navbarDiv} flex justify-around  align-middle 
       z-2 relative text-[white] py-5  font-bold
         max-md:hidden 
      
       
       `}
      >
        <div
          className={`${styles.nav1} w-[40%] flex justify-between align-middle
          max-md:hidden   `}
        >
          <span className="text-[20px] font-bold ">
            {" "}
            <img src={mNav} alt="" />{" "}
          </span>
          <span>Home</span>
          <span>Pages</span>
          <span>Portfolio</span>
          <span>Blog</span>
          <span>Contacts</span>
          <span className="text-[25px]  ">
            <BiSearch />
          </span>
        </div>
        <div
          className={`${styles.nav2}   w-[35%] flex justify-around align-middle 
         max-md:hidden
        `}
        >
          <span className="bg-[#0e003d]  rounded-full p-3 ">
            <BsTelephone />
          </span>
          <p>1 800 458 56 97</p>

          <button className=" bg-[#5300f1] px-8  py-2  rounded-3xl">
            Let's talk
          </button>
        </div>
      </div>
    </div>
  );
}
