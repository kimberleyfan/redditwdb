import React from "react";
import "../css/CardSummary.css";
const obj = require("/Users/kimberley/wdb-dev-proj/frontend-project/src/Data.json");

export const parseDate = (str) => {
  var mdy = str.toString().split('/');
  return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

export const dateDiff = (first, second) => {
  return Math.round((second-first)/(1000*60*60*24));
}

export const dateRightNow = () => {
  var today = new Date();
  var dd = today.getDate();

  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if(dd<10) {
      dd='0'+dd;
  } 

  if(mm<10) {
      mm='0'+mm;
  } 

  today = mm+'/'+dd+'/'+yyyy;
  return today
}

const CardSummary = ({post}) => {

    return (

      <div className="card">
        <a href={`/fullpost/${post.id}`}></a>
        <div className="left-column">
          <p class="grey-text">
    Posted by {post.author} {dateDiff(parseDate(post.published), parseDate(dateRightNow()))} days ago
          </p>
          <p class="title">{post.title}</p>
          <p class="grey-text" numberOfLines={1}>
              {post.content.length < 213
                ? `${post.content}`
                : `${post.content.substring(0, 213)}`}...</p>
        </div>
        <div className="right-column"> 
          <p>upvotes: {post.upvotes}</p>
          <p>downvotes: {post.downvotes}</p>
          <p>total: {post.upvotes - post.downvotes}</p>
        </div>
      </div>
    );
  };
  
export default CardSummary;
