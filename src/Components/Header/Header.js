import React from "react";
import map from "lodash/map";
import { Link } from "react-router-dom";

import Dropdown from "../Dropdown/Dropdown";
import { dropdownData } from "../../Data/Data";

import logo from "../../Assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/* Header-Top */}
      <div className="header__top">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className="header__topMenu">
          <Link to="/login">Sign In</Link>
        </div>
        <div className="header__topMenu">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
      {/* Dropdown */}
      <div className="header__links">
        {map(dropdownData, (data, key) => {
          return <Dropdown data={data} key={key} />;
        })}
      </div>
    </div>
  );
}

export default Header;
