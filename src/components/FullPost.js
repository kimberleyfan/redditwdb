import {parseDate, dateDiff, dateRightNow} from "../components/CardSummary.js";
import "../components/CardSummary.js";
import "../css/FullPost.css";

const obj = require("/Users/kimberley/wdb-dev-proj/frontend-project/src/Data.json");

function FullPost(match) {
    const postid = match.params.id;
    const posts = obj["posts"];
    let post;
    for (const individual of posts){
      if ((individual.id)==postid){
        post = individual;
    }}
    // let currpost = posts.filter((post)=> postid==post.id)    
  return (
    
      <div className="fullcard">
        <p className="grey-text"> Posted by {post.author} {dateDiff(parseDate(post.published), parseDate(dateRightNow()))} days ago
        </p>
        <p className="title">{post.title}</p>
          <div> 
            <p className="votes">upvotes: {post.upvotes}</p>
            <p className="votes">downvotes: {post.downvotes}</p>
            <p className="votes">total: {post.upvotes - post.downvotes}</p>
          </div>
          <p className="main-text"> {post.content} </p>
          <div className="comments"> 
            {listOfComments(post.comments)}
          </div> 
      </div>
    );
  };
  

function listOfComments(comments) {
  return (
    <div>
        {comments.map((comment) => {
          return (
            <div>
            <p className="grey-text">{comment.author}</p>
            <div className="each-comment">    
              <p className="comment-content">{comment.content}</p>
              <div className="comment-votes">
                <p className="comvotes"> +{comment.upvotes}</p>
                <p className="comvotes"> -{comment.downvotes}</p>
              </div>
            </div>
            </div>
            );
          })}
      </div>
      );
  }
export default FullPost;
