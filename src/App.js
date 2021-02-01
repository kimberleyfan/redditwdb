import React from "react";
import BrowsePage from "./pages/BrowsePage";
import "./App.css";
import FullPostPage from "./pages/FullPostPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/home/:id" component={FullPostPage}>
          </Route>
          <Route exact path="/home" component = {BrowsePage}> 
            <BrowsePage />
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
