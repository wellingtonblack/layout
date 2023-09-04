import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./brand.scss";
import brand from "./brand-items";

const Brand = () => {
  return (
    <div className="container brand">
        <h2 className="title">Marcas Parceiras</h2>
      <div className="thumbs-brands">
        <ul>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            Pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
                spaceBetween: 15
              },
              640: {
                slidesPerView: 2.1,
                spaceBetween: 15
              },
              950: {
                slidesPerView: 3.1,
                spaceBetween: 15
              },
              1280: {
                slidesPerView: 4.1,
                spaceBetween: 15
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 15
              }
            }}
          >
            {brand.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <li>
                    <div className="content">
                      {item.link
                        ? <a href={item.link}>
                            <img src={item.thumb} alt={item.alt} />
                          </a>
                        : <img src={item.thumb} alt={item.alt} />}
                    </div>
                  </li>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ul>
      </div>
    </div>
  );
};
export default Brand;
