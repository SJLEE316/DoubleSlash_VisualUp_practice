import React from "react";
import { Link } from "react-router-dom";
import "./index.css";


function Navigation() {
      return (
        <div>
          <h1 className="title">React Page Scroller Demo</h1>
          <div className="links">
           <div className = "link">
                <Link to="/">Visual up</Link>
              </div>
            <div className = "link">
                <Link to="/list">List</Link>
             </div>             
             <div className = "link">
                <Link to="/login">Login</Link>
            </div>            
            <div className = "link">
                <Link to="/search">Search</Link>
            </div>
          </div>
        </div>
      );
    }


export default Navigation;