import React from "react";
import { Link } from "react-router-dom";
import "./index.css";


class Navigation extends React.Component {
    render() {
      return (
        <div>
          <h1 className="title">React Page Scroller Demo</h1>
          <div className="links">
              <Link to="/">Visual up</Link>
              <Link to="/list">List</Link>
              <Link to="/login">Login</Link>
              <Link to="/search">Search</Link>
          </div>
        </div>
      );
    }
  }

export default Navigation;