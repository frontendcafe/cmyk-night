import React from "react";
import "./style/TopBar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
          <a href="#">
          <Link to="/about"><span hidden className="menu">
              Menú
            </span></Link>
            <FontAwesomeIcon className="menu-icon" icon={faBars} />
          </a>
        </li>
        <li>

          <Link to="/login"><span>Iniciar Sesión</span></Link>

        </li>
      </ul>
    </nav>
  );
}

export default TopBar;