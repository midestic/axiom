"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Testimonial1 from "./testimonials/Testimonial1";
import Testimonial2 from "./testimonials/Testimonial2";
import Testimonial3 from "./testimonials/Testimonial3";

export default function Testimonial() {
  return (
    <div className=" bg-[#e2e8ef] py-[50px]">
      <div className=" flex justify-around align-middle  w-[85%] mx-auto">
        <Swiper
          spaceBetween={1}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-[100vw] "
          loop={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <Testimonial1 />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial2 />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial3 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
