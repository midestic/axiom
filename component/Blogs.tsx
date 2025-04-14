"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import Blog1 from "./blogs/Blog1";
import Blog2 from "./blogs/Blog2";
import Blog3 from "./blogs/Blog3";
import Blog4 from "./blogs/Blog4";

export default function Blogs() {
  return (
    <div className=" flex justify-center ">
      <div className="w-[80%] mx-auto py-[50px]  overflow-x-hidden">
        <p
          className="text-center text-[14px] text-[#080337]
        font-bold
        "
        >
          OUR BLOGS
        </p>
        <p
          className="text-center text-[57px] text-[#080337]
        font-bold "
        >
          Latest Blogs
        </p>
        <div className="mx-auto">
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            // navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="w-full max-w-[100%]"
            loop={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <Blog1 />
            </SwiperSlide>
            <SwiperSlide>
              <Blog2 />
            </SwiperSlide>
            <SwiperSlide>
              <Blog3 />
            </SwiperSlide>
            <SwiperSlide>
              <Blog4 />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
