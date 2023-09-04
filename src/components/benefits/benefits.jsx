import React from "react";
import { Autoplay } from 'swiper/modules';
import "./benefits.scss";
import benefits from "./benefits-items";
import { Swiper, SwiperSlide } from "swiper/react";

const Benefits = () => {
  return (
    <div className="container benefits">
      <h2 className="title">Por que comprar na Maeztra?</h2>
      <div className="thumbs-benefits">
        <ul>
          <Swiper
					modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            Pagination={{ clickable: true }}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
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
            {benefits.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <li>
                    <div className="content">
                      <img src={item.icon} alt={item.title} />
                      <div className="text">
                        <h3>
                          {item.title}
                        </h3>
                        <p>
                          {item.text}
                        </p>
                      </div>
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
export default Benefits;
