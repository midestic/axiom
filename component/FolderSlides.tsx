"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

let sw1 = "/images/sw1.png";
let sw2 = "/images/sw2.png";
let sw3 = "/images/sw3.png";
let sw4 = "/images/sw4.png";
let sw5 = "/images/sw2.png";
let sw6 = "/images/sw2.png";

export default function FolderSlides() {
  return (
    <div className="mt-[50px]">
      <div className=" flex justify-around align-middle">
        <Swiper
          spaceBetween={1}
          slidesPerView={3}
          // navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-[100vw] "
          loop={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <img className="scale-[70%] rounded-2xl my-auto" src={sw1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="scale-[70%] rounded-2xl my-auto" src={sw2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="scale-[70%] rounded-2x my-autol" src={sw3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="scale-[70%] rounded-2xl my-auto" src={sw4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="scale-[70%] rounded-2xl my-auto" src={sw2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
