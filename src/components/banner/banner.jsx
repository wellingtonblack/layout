import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./banner.scss";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import image from "./banners-items";

const isMobile = window.innerWidth > 768;

const Banner = () => {
  return (
    <div className="content-banner">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
      >
        {image.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <a href={item.link} >
                {isMobile
                  ? <img src={item.imageDesktop} alt={item.alt} />
                  : <img src={item.imageMobile} alt={item.alt} />}
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;
