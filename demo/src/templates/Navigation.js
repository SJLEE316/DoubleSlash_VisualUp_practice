import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Logo from "../img/logo.png";
import { UserOutlined , UnorderedListOutlined ,SearchOutlined  } from '@ant-design/icons';


class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className="links">
          <div className="link logo">
            <Link to="/">
                <img src ={Logo} />
            </Link>
          </div>
          <div className = "icon">
              <div className="link">
                  <Link to="/contain">
                      <SearchOutlined style ={{fontSize : '18px', color : 'black'}}/>
                  </Link>
              </div>
              <div className="link">
                  <Link to="/contain">
                      <UnorderedListOutlined  style ={{fontSize : '18px', color : 'black'}}/>
                  </Link>
              </div>
              <div className="link">
                  <Link to="/contain">
                      <UserOutlined style={{ fontSize : '18px', color: 'black' }}/>
                  </Link>
              </div>
          </div>
       </div>
      </div>
    );
  }
}

export default Navigation;