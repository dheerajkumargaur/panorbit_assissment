import React from "react";
import "./App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/:userId" component={Profile} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
