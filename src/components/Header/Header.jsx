import React from "react";
import "./Header.scss";
// import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="headerBox">
      {/* <Navbar /> */}
      <div className="headerBox__content">
        <h2 className="headerBox__content__text">
          Hi! I'm{" "}
          <span className="headerBox__content__text__name">Macarena Paz,</span>{" "}
          creative soul, <br />
          based in Madrid
        </h2>

        <div className="headerBox__content__roles">
          <div className="headerBox__content__roles__group">
            <h2 className="headerBox__content__roles__rol">
              FULLSTACK DEVELOPMENT
            </h2>
            <h2 className="headerBox__content__roles__rol">GRAPHIC DESIGN</h2>
            <h2 className="headerBox__content__roles__rol">UX/UI</h2>
          </div>
          <div className="headerBox__content__roles__group">
            <h2 className="headerBox__content__roles__rol">PHOTOGRAPHY</h2>
            <h2 className="headerBox__content__roles__rol">VIDEOGRAPHY</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
