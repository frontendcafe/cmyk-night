import React from "react";
import "./style/TopBar.css";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopBar() {
  return (
    <nav className="wrapper">
      <ul className="flex-container">
        <li>
          <h1>NIGHT</h1>
        </li>
        <li>
          <button>
            {/* <FontAwesomeIcon icon={faSearch} /> */}
          </button>
          <input placeholder="Buscar Eventos"></input>
        </li>
        <li>
          <button>
            <span hidden className="menu">
              Menú
            </span>
            {/* <FontAwesomeIcon className="menu-icon" icon={faBars} /> */}
          </button>
        </li>
        <li>
          <button>Iniciar Sesión</button>
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;