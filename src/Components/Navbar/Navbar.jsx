import React, { useState } from "react";
import "./Navbar.css";
import kai from "../../assets/kai.png";
import searchIcon from "../../assets/searchIcon.png";
import cart from "../../assets/cart.png";
import person from "../../assets/person.png";
import { Link } from "react-router-dom";
import harm from "../../assets/navbar.png";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <>
      <div className="navbar">
        <img src={kai} alt="" />
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            to="/Shop"
            onClick={() => setMenu("Shop")}
            className={menu === "Shop" ? "active" : ""}
          >
            Shop
          </Link>
          <Link
            to="PleaseOrder"
            onClick={() => setMenu("PleaseOrder")}
            className={menu === "PleaseOrder" ? "active" : ""}
          >
            PleaseOrder
          </Link>
          <Link
            to="/Contact"
            onClick={() => setMenu("Contact")}
            className={menu === "Contact" ? "active" : ""}
          >
            Contact
          </Link>
        </ul>
        <div className="navbar-right">
          <img src={searchIcon} alt="" />
          <div className="navbar-search-icon">
            <img src={cart} alt="" />
            <div className="dot"></div>
          </div>
          <a href="">
            {" "}
            Signin
            <img src={person} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
