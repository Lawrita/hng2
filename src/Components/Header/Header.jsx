import React from "react";
import "./Header.css";
import frame from "../../assets/frame.png";
import Logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <div>
      <h2 className="title">Shop</h2>
      <div className="header">
        <div className="header-contents">
          <img src={frame} alt="" />
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
