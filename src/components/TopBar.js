import React from "react";
import "./style/TopBar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function TopBar() {
  return (
    <nav className="wrapper">
      <ul className="flex-container">
        <li>
          <Link to="/"><h1>NIGHT</h1></Link>
        </li>
        <li>
          <Link to="/users">
              <FontAwesomeIcon icon={faSearch} />
          </Link>
          <input placeholder="Buscar Eventos"></input>
        </li>
        <li>
          <Link to="/about">
            <span hidden className="menu">
              About Us
            </span>
          </Link >
          <Link to="/about">
            <FontAwesomeIcon className="menu-icon" icon={faUserFriends} />
          </Link >
          
        </li>
        <li>

          <Link to="/login"><span>Iniciar Sesión</span></Link>

        </li>
      </ul>
    </nav>
  );
}

export default TopBar;
