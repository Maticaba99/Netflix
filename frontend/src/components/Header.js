import React from "react";
import Logo from "../assets/svg/logo.svg";
import { NavLink, Link } from "react-router-dom";
import Main from "../pages/index";

import IosArrowForward from "react-ionicons/lib/IosArrowForward";
import "../assets/less/Header.less";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <img className="header__container--logo" src={Logo} alt="Logo" />
        <NavLink to={Main} className="header__container--button">
          Sign In
        </NavLink>
      </div>
      <div className="header__content">
        <h1 className="header__content--title">See what's next.</h1>
        <h2 className="header__content--subTitle">
          WATCH ANYWHERE, CANCEL ANYTIME.
        </h2>
        <Link className="header__content--button">
          TRY IT NOW
          <IosArrowForward className="Icon" fontSize="37px" color="white" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
