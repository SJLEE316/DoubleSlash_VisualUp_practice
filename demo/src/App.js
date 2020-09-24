import React, {Component} from "react";
import {Route, Link} from 'react-router-dom';

import List from "./templates/List";
import Login from "./templates/Login";
import Search from "./templates/Search";

import FullPage from "./templates/FullPage"
import Navigation from "./templates/Navigation";


const App = () => {
    return(
        <div>

         <Navigation/>
            <Route path="/" component={FullPage}  exact={true}/>



            <Route path="/list" component={List}/>
            <Route path="/search" component={Search} />
            <Route path="/login" component={Login}/>
        </div>
    );
};


export default App;

