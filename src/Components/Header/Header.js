import React from "react";
import map from "lodash/map";

import Dropdown from "../Dropdown/Dropdown";
import { dropdownData } from "../../Data/Data";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/* Header-Top */}
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
