import React, { Component } from "react";
import "../css/BrowsePage.css";
import BackgroundTheme from "../components/BackgroundTheme.js";
import FullPost from "../components/FullPost.js";

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
const FullPostPage = ({match}) => {
  return (
      <div>
          <BackgroundTheme/>
          {FullPost(match)}
      </div>
    );
  };
  
export default FullPostPage;