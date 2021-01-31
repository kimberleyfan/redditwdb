import React from "react";
import logo from "./logo.svg";
import FullPost from "./components/FullPost.js";
import BrowsePage from "./pages/BrowsePage";
import "./App.css";
import {useParams} from "react-router-dom"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


// function EPage() {
//     let {id} = useParams()
//     return (
//         <BrowsePage key = {id}/>
//     )
// }

{/* <a href={`/event/${props.event._id}`} className="link"> */}
// {FullPost(obj["posts"][${id}])}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component = {BrowsePage}> 
            <BrowsePage />
          </Route> 
         <Route path="/fullpost/:id" component={FullPost}>
           {/* <FullPost id={post.id} post={post}/> */}
          </Route>
          {/* <Route path="/post/:id" children={EPage()} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
