import React from "react";
import "../css/BackgroundTheme.css";
import Skyline from "../img/berkeley-skyline.png";
import Logo from "../img/berkeley-logo.png";

const BackgroundTheme = (props) => {
  //check prop
  return (
    <div className="entire-background-theme">
      <img src={Skyline} className="campus-landscape"></img>
      <div className="subtitle-strip">
        <img src={Logo} className="logo"></img>
        <p className="subforum-name">R/Berkeley</p>
        <p className="description">#1 Public University in the World</p>
      </div>
    </div>
  );
};

export default BackgroundTheme;
