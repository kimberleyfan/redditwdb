import "../css/FullPost.css";
import {parseDate, dateDiff, dateRightNow} from "../components/CardSummary.js";

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
    
// {FullPost(obj["posts"][${id}])}
const FullPost = ({post}) => {
    return (
      <div>
          <p className="grey-text">
    Posted by {post.author} {dateDiff(parseDate(post.published), parseDate(dateRightNow()))} days ago
          </p>
          <p className="title">{post.title}</p>
          <div className="change"> 
          <p>upvotes: {post.upvotes}</p>
          <p>downvotes: {post.downvotes}</p>
          <p>total: {post.upvotes - post.downvotes}</p>
          </div>
          <p className="grey-text"> {post.content} </p>
          <div className="comments"> 
          {/* listOfComments(obj["posts"]) */}
          </div>

      </div>
    );
  };
  
export default FullPost;
  