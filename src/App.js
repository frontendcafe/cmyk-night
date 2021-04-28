
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Topbar from "./components/TopBar";
import EventDetails from "./pages/EventDetails"

import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/events/:eventId">
            <EventDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}