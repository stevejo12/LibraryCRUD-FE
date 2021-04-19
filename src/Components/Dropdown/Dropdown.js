import React from "react";
import { Link } from "react-router-dom";
import map from "lodash/map";

import "./Dropdown.css";

function Dropdown(props) {
  console.log("here: ", props);
  return (
    <div className="dropdown">
      {/* for future create a sandwich tripple straight line when the page is small */}
      <button className="dropdown__button">
        {props.data.title || "button"}
      </button>
      <div className="dropdown__content">
        {map(props.data.extensionData, (data, key) => {
          return (
            <Link to={data.link} className="dropdown__link">
              {data.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
