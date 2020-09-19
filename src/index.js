import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import HeaderCard from "./Home/HeaderCard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Post from "./Post/Post";
import Comment from "./Post/Comment";
//Line 18 Render post page
//Line 19 Render home page
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <React.Fragment>
          <HeaderCard />
          <Switch>
            <div>
              <Route path="/posts/:id" exact component={Post} />
              <Route path="/" exact component={Home} />
            </div>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
