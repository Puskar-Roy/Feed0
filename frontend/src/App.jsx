import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Channels from "./components/Channels";
import Message from "./components/Message";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/channels">
          <Channels />
        </Route>
        <Route path="/message">
          <Message />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
