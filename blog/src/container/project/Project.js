

import React from 'react';
import { Link } from "react-router-dom";

import './project.css';


const AppList = [
  {
    name: "DogFriend",
    image:
      "https://images.unsplash.com/photo-1563889362352-b0492c224f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    color: "green",
    route: "dogfriends",
  },
  {
    name: "CountDownTimer",
    image:
      "https://images.unsplash.com/photo-1575203091586-611fe505bb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    color: "blue",
    route: "countdowntimer",
  },
];

const ProjectApp = (apps) => {
  let green = "green";
  const appComponent = apps.map((appLists, i) => {
      return (
        <div className={`bg-light-${appLists.color} dib br3 pa3 ma2 grow bw2 shadow-5`}>
          <Link to={`/projects/${appLists.route}`} style={{ textDecoration: "none" }}>
            <h1 className="dog">{appLists.name} </h1>
            <img className="img br3 bw2" src={appLists.image} />
          </Link>
        </div>
      );
    
  });
  return <div>{appComponent}</div>;
};

const Project = () => {
    return (
      <div className="vh-100 dt w-100">
        <div className="dtc v-mid tc white ph3 ph4-l">
   
              {ProjectApp(AppList)}
        </div>
      </div>
    );
}




export default Project;