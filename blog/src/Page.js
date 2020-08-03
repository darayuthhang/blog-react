
import React from "react";
import { Route } from "react-router";
import Home from "./container/home/Home";
import Project from "./container/project/Project";
import DogFriend from "./container/project/DogFriend";

//Hold all the template
/*****

route : /  ===> home
route : project/anyapps

******/

const Page = () => {
    return (
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects" component={Project} />
        <Route exact path="/projects/dogfriends" component={DogFriend} />
        <Route exact path="/projects/countdowntimer" />
      </div>
    );
}

export default Page;