import React from "react";
import "./infoCard.scss";
import infoContent from "./infoCardContent";

const InfoCard = () => {
  return (
    <div className="container info-card">
      <div className="content">
        <div className="info">
          <h3 className="title">
            {infoContent.title}
          </h3>
          <p className="text">
            {infoContent.text}
          </p>
        </div>
        <div className="card-banner">
          <img src={infoContent.banner} alt={infoContent.title} />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
