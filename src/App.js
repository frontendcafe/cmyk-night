
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Topbar from "./components/TopBar";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Checkout from "./pages/Checkout";
import About from "./pages/AboutUs";
import Login from "./pages/Login";


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
          <Route path="/checkout/:eventId">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
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

function about() {

  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
