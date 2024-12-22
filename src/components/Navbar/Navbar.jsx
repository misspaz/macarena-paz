import React from "react";
import { useLocation } from "react-router-dom";
import "./Nabvar.scss";
import MacarenaPazLogoWhite from "../../assets/images/Logo_Macarena_Paz_1.png";
import MacarenaPazLogoDark from "../../assets/images/Logo_Macarena_Paz_2.png";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const logo = isHomePage ? MacarenaPazLogoWhite : MacarenaPazLogoDark;

  return (
    <div className={`navbar ${isHomePage ? "navbar--home" : "navbar--other"}`}>
      <div className="navbar__logoContainer">
        <img
          className="navbar__logoContainer__logo"
          src={logo}
          alt="Logo Macarena Paz"
        ></img>
      </div>
      <nav className="navbar__nav">
        <ul className="navbar__nav__list">
          <li>
            <a className="navbar__nav__list__item" href="/">
              WORK
            </a>
          </li>
          <li>
            <a className="navbar__nav__list__item" href="/about">
              ABOUT ME
            </a>
          </li>
          <li>
            <a className="navbar__nav__list__item" href="/contact">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
