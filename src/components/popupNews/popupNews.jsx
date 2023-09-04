import React, { useEffect, useState } from "react";
import "./popupNews.scss"

import MailIcon from "../../assets/img/newsletter-mail-icon.svg";
import BannerPopup from "../../assets/img/bg-newsletter.jpg";



const PopupNews = () => {

const [open, setOpen] =  useState(false)

const handleOpen  = () => {
  setOpen(true)
}

const handleClose  = () => {
  setOpen(false)
}

useEffect(()=>{
  setTimeout(() => {
    handleOpen()
  }, 2000)
},[])

  return (
    <>
    {open && <div className="overlay" onClick={handleClose}></div>}
    {open &&     
    <div className="popupnewsletter">
      <span className="close"  onClick={handleClose}>Fechar</span>
      <img className="banner-news" src={BannerPopup} alt="" />
      <div className="content">
        <div className="popup-header">
          <img src={MailIcon} alt="" />
          <h3 className="welcome">Bem Vindo à MAEZTRA</h3>
          <h4 className="title">
            Receba em Primeira mão <br/> <span>desconto e ofertas exclusivas</span>
          </h4>
        </div>
        <div className="formnews">
          <input type="text" placeholder="Digite seu e-mail" />
          <button className="btn btn-send">Enviar</button>
        </div>
      </div>
    </div>}
    </>
  );
};

export default PopupNews;
