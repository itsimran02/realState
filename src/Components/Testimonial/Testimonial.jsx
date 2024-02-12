import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import {
  Parallax,
  Pagination,
  Navigation,
} from "swiper/modules";

export default function SwiperComp() {
  return (
    <section className="mt-16 mx-4 ">
      <div className="container mx-auto ">
        {" "}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-color": "#FAFAFA",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div className="md:flex-row flex-col-reverse flex items-center bg-[#FAFAFA] justify-between ">
              <div
                className="title lg:px-[5rem] px-4"
                data-swiper-parallax="-300"
              >
                <p className="text-[16px] m-0 leading-[28px] text-justify">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                </p>
                <h2>Alexandr Ivchenko</h2>
                <p className="text-[16px] m-0 leading-[28px]">
                  Businessman
                </p>
              </div>
              <div
                className="subtitle h-[400px]"
                data-swiper-parallax="-200"
              >
                <img
                  className="  object-contain"
                  src="/testimonial.png"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:flex-row flex-col-reverse flex items-center bg-[#FAFAFA] justify-between ">
              <div
                className="title lg:px-[5rem] px-4"
                data-swiper-parallax="-300"
              >
                <p className="text-[16px] m-0 leading-[28px] text-justify">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                </p>
                <h2>Alexandr Ivchenko</h2>
                <p className="text-[16px] m-0 leading-[28px]">
                  Businessman
                </p>
              </div>
              <div
                className="subtitle h-[400px]"
                data-swiper-parallax="-200"
              >
                <img
                  className="  object-contain"
                  src="/testimonial.png"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:flex-row flex-col-reverse flex items-center bg-[#FAFAFA] justify-between ">
              <div
                className="title lg:px-[5rem] px-4"
                data-swiper-parallax="-300"
              >
                <p className="text-[16px] m-0 leading-[28px] text-justify">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                </p>
                <h2>Alexandr Ivchenko</h2>
                <p className="text-[16px] m-0 leading-[28px]">
                  Businessman
                </p>
              </div>
              <div
                className="subtitle h-[400px]"
                data-swiper-parallax="-200"
              >
                <img
                  className="  object-contain"
                  src="/testimonial.png"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
