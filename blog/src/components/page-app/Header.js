import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import './page.css';


const Header = () => {
    return (
        <div className="container">
          <h1> Technology Lover</h1>
          <div class="row">
            <div class="col-sm">
              <Link to="/">Home</Link>
            </div>
            <div class="col-sm">
              <Link to="/projects">Project</Link>
            </div>
            <div class="col-sm">
              <Link to="about">About</Link>
            </div>
          </div>
        </div>
      
    );
}

export default Header;