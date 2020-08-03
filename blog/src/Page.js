
import React from "react";
import { Route } from "react-router";
import Home from "./container/home/Home";
import Project from "./container/project/Project";
import DogFriend from "./container/project/DogFriend";
import { HashRouter } from "react-router-dom";

//Hold all the template
/*****

route : /  ===> home
route : project/anyapps

******/

const Page = () => {
    return (
      <HashRouter basename="/">
        <div>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects" component={Project} />
          <Route exact path="/projects/dogfriends" component={DogFriend} />
          <Route exact path="/projects/countdowntimer" />
        </div>
      </HashRouter>
    );
}

export default Page;