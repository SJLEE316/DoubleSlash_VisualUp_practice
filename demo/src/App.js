import React from "react";
import { HashRouter as Router, Route, Switch, Link, HashRouter } from "react-router-dom";
import FullPage from "./FullPage";
import login from "./login";
import list from "./list";
import search from "./search";
import Navigation from "./Navigation";

function App() {
  return ( 
      <HashRouter>
        <Navigation />
        <Route exact path="/" component={FullPage} />
        <Route path="/login" component={login} />
        <Route path="/link" component={list} />
        <Route path="/search" component={search} />
      </HashRouter>
     
  );
}

export default App;