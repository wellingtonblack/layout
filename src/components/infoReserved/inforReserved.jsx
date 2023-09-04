import React from "react";
import "./infoReserved.scss";
import social from "./social-content";
import card from "./card-content";
import powered from "./powered-info"

const InfoReserved = () => {
  return (
    <div className="content-inforReserved">
      <div className="container inforReserved">
        <div className="social-media">
          {social.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                <img src={item.icon} alt={item.alt} title={item.alt} />
              </a>
            );
          })}
        </div>
        <div className="credit-card">
          {card.map((icon, index) => {
            return <img src={icon.icon} alt={icon.alt} key={index} />;
          })}
        </div>
        <div className="powered">
          {powered.map((logo, index) => {
            return (
              <a href={logo.link} key={index}>
                <h4>
                  {logo.title}
                </h4>
                <img src={logo.logo} alt={logo.alt} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfoReserved;
