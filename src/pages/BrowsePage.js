import React, { Component } from "react";
import "../css/BrowsePage.css";
import BackgroundTheme from "../components/BackgroundTheme.js";
import CardSummary from "../components/CardSummary.js";
import FullPost from "../components/FullPost";
import {Link} from 'react-router-dom';

const obj = require("/Users/kimberley/wdb-dev-proj/frontend-project/src/Data.json");

function listOfPosts(posts) {
  return (
    <div>
        {posts.map((post) => {
          return (
            <Link to={`/home/${post.id}`}>
              <CardSummary id={post.id} post={post} /> </Link>
            );
          })}
      </div>
      );
  }


class BrowsePage extends Component {
  render() {
    return (
      <div className="entire-browse">
        <BackgroundTheme />; 
        {listOfPosts(obj["posts"])}
      </div>
    );
  }
}
export default BrowsePage;
