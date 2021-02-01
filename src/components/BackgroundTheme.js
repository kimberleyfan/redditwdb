import React from "react";
import "../css/BackgroundTheme.css";
import Skyline from "../img/berkeley-skyline.png";
import {Link} from 'react-router-dom';
import Logo from "../img/berkeley-logo.png";

const BackgroundTheme = (props) => {
  //check prop
  return (
    <div className="entire-background-theme">
      <img src={Skyline} className="campus-landscape"></img>
      <Link to="/home">
      <div className="subtitle-strip">
        <img src={Logo} className="logo">
        </img>
        <p className="subforum-name">R/Berkeley</p>
        <p className="description">#1 Public University in the World</p>
      </div>
      </Link>
    </div>
  );
};



export default BackgroundTheme;
