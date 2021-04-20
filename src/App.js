
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Topbar from "./components/TopBar";
import MainCard from "./components/MainCard";
import imgp from "./components/img/imgPrueba.jpg"

export default function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <MainCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return <MainCard date={"24 enero"} title={"seremos primavera"} performer={"Eruca Sativa"} banner_image={imgp}></MainCard>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}