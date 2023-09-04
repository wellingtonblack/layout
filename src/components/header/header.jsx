import React from "react";
import "./header.scss";
import logo from "../../assets/img/logo-maeztra-novo.png.svg";
import user from "../../assets/img/icon-user.svg";
import wish from "../../assets/img/icon-heart.svg";
import cart from "../../assets/img/icon-cart.svg";
import searcIcon from "../../assets/img/icon-busca.svg";
import menuMobile from "../../assets/img/icon-menu.svg";

const Header = () => {
const content = {
    "overtop": "Acompanhe as melhores promoções disponíveis aqui na Maeztra.",
    "account": "Minha conta",
    "wishlist": "Minha Lista",
    "cart": "Meu carrinho"
}

  return (
    <>
    <header className="header-wrapper">
      <div className="overtop">
        <p className="text">
          {content.overtop}
        </p>
      </div>
      <div className="container">
        <div className="header-content">
          <div className="menu-mobile">
            <img className="icon-menu-mobile" src={menuMobile} alt="menu Mobile" />
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="search">
            <img className="icon-search" src={searcIcon} alt="buscar" />
            <input type="text" placeholder="O que você busca?" />
            <button className="btn btn-search">Buscar</button>
          </div>
          <div className="icons-header">
            <div className="my-account">
              <img src={user} alt={content.account} title={content.account}/>
              <span>{content.account}</span>
            </div>
            <div className="wishlist">
              <img src={wish} alt={content.wishlist} title={content.wishlist}/>
              <span>{content.wishlist}</span>
            </div>
            <div className="my-cart">
              <img src={cart} alt={content.cart} title={content.cart}/>
              <span>{content.cart}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
