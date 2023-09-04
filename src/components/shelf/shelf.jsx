import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./shelf.scss";
import product from "./products";

const formatAmount = value => {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  }).format(value / 100);
};

const Shelf = () => {
  return (
    <div className="container shelf">
      <h2 className="title">As Mais Pedidas</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={0}
        breakpoints={{
          250: {
            slidesPerView: 1.1,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2.1,
            spaceBetween: 10
          },
          950: {
            slidesPerView: 3.1,
            spaceBetween: 10
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 15
          }
        }}
      >
        {product.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="card">
                <a href={item.productLink}>
                  <img src={item.productImage} alt={item.productName} />
                  <div className="details">
                    <div className="sku-selector">
                      {item.skuColor.map((cor, index) => {
                        return (
                          <div
                            key={index}
                            className="color"
                            style={{ background: cor.color }}
                            title={cor.name}
                          />
                        );
                      })}
                    </div>
                    <div className="best-price">
                      <h4>
                        {formatAmount(item.price)}
                      </h4>
                    </div>
                    <h2 className="productname">
                      {item.productName}
                    </h2>
                    <h3 className="description">
                      {item.description}
                    </h3>
                    <button className="add-to-cart">adicionar</button>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Shelf;
