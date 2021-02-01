import React, { Component } from "react";
import "../css/BrowsePage.css";
import BackgroundTheme from "../components/BackgroundTheme.js";
import FullPost from "../components/FullPost.js";

const FullPostPage = ({match}) => {
  return (
      <div>
          <BackgroundTheme/>
          {FullPost(match)}
      </div>
    );
  };
  
export default FullPostPage;