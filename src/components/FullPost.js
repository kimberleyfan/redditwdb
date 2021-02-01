import {parseDate, dateDiff, dateRightNow} from "../components/CardSummary.js";
import "../components/CardSummary.js";
import "../css/FullPost.css";

const obj = require("/Users/kimberley/wdb-dev-proj/frontend-project/src/Data.json");

// function listOfComments(posts) {
//     return (
//       <div>
//           {posts.map((post) => {(
            
//                 {post.map((comments => {
//                     return (
//                     <div>
//                         <div>
//                             <div>comments.author </div> 
//                             <div>comments.content</div>
//                         </div>
//                         <div>comments.upvotes</div>
//                         <div>comments.downvotes</div>
//                     </div>
//                     )}));
//                              })});
//         </div>
        
//     }
//     )
//     }
    
//grab which ID was passed in in the url)
// {FullPost(obj["posts"][${id}])}
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
                <p> +{comment.upvotes}</p>
                <p> -{comment.downvotes}</p>
              </div>
            </div>
            </div>
            );
          })}
      </div>
      );
  }
export default FullPost;
