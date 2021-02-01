import React from "react";
import "../css/CardSummary.css";
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
 
const obj = require("/Users/kimberley/wdb-dev-proj/frontend-project/src/Data.json");

//source for date manipulation: https://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript

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
//source for line truncation: ttps://www.npmjs.com/package/react-truncate 

const CardSummary = ({post}) => {
    return (

      <div className="card">
        <div className="left-column">
          <p class="grey-text"> Posted by {post.author} {dateDiff(parseDate(post.published), parseDate(dateRightNow()))} days ago
          </p>
          <Truncate
                    className="title"
                    lines={1}
                    ellipsis={(
                        <span>...</span>
                    )}>{post.title}</Truncate>
          <Truncate
                    className="grey-text"
                    lines={3}
                    ellipsis={(
                        <span>...</span>
                    )}>{post.content}...</Truncate>
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
