import React from "react";
import "./footer.scss";
import footerinfo from "./footerInfo"
import InfoReserved from "../infoReserved/inforReserved";


const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        {footerinfo.map((info, index) => {
          return (
            <div className="footer-info" key={index}>
              <h2 className="title">
                {info.title}
              </h2>
              <div className="navigation">
                <ul>
                  {info.navigation.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.link}>{item.text}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <InfoReserved/>
    </footer>
  );
};

export default Footer;
