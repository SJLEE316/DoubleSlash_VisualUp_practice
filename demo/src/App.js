import React from "react";
import { HashRouter as Router, Route, Switch, Link, HashRouter } from "react-router-dom";
import FullPage from "./FullPage";
import login from "./login";
import list from "./list";
import search from "./search";

function App() {
  return ( 
  <Router >
    <div>
      <Switch>
        <Navigation />
        <Route exact path="/" component={FullPage} />
        <Route path="/login" component={login} />
        <Route path="/link" component={list} />
        <Route path="/search" component={search} />
      </Switch>
    </div>,
  </Router>
  );
}

export default App;