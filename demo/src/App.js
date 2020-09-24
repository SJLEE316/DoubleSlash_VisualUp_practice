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
   {   /*      <ul>
                <li><Link to="/">Visual up</Link></li>
                <li><Link to="/list">리스트</Link></li>
                <li><Link to="/login">로그인</Link></li>
                <li><Link to="/search">검색</Link></li>
            </ul>
*/}         <Navigation/>
            <Route path="/" component={FullPage}  exact={true}/>
            <Route path="/list" component={List}/>
            <Route path="/search" component={Search} />
            <Route path="/login" component={Login}/>
        </div>
    );
};

export default App;



{/*import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch, Link, HashRouter } from "react-router-dom";
import FullPage from "./router/FullPage";
import Login from "./router/Login";
import List from "./router/List";
import Search from "./router/Search";
import Navigation from "./router/Navigation";


class App extends Component {
    render(){
     return (
        <Router basename="/demos">
          <div>
          <Navigation />
            <Switch>
                <FullPage />
                <Route  path="/" exact={true} component={FullPage} />
                <Route path="/login" component={Login} />
                <Route path="/list" component={List} />
                <Route path="/search" component={Search} />
            </Switch>
          </div>
        </Router>
       );
     }
   }
   
export default App;

  */}