import React, {Component} from "react";
import {Route, Link} from 'react-router-dom';

import List from "./templates/List";
import Login from "./templates/Login";
import Search from "./templates/Search";
import Home from "./templates/Home";
import FullPage from "./templates/FullPage"


const App = () => {
    return(
        <div>
            <ul>
                <li><Link to="/list">리스트</Link></li>
                <li><Link to="/login">로그인</Link></li>
                <li><Link to="/search">검색</Link></li>
            </ul>

            <Route path="/" component={FullPage}/>
            <Route path="/home" component={Home} exact={true}/>
            <Route path="/list" component={List}/>
            <Route path="/search" component={Search} />
            <Route path="/login" component={Login}/>
        </div>
    );
};

export default App;