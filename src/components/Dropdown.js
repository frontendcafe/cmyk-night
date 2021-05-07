import React from "react";
import "./style/Dropdown.css";

function Dropdown(){
    return(
        <select className="drop_select">
            <option className="drop_value" selected value="one">1 Entrada</option>
            <option className="drop_value" value="two">2 Entradas</option>
            <option className="drop_value" value="three">3 Entradas</option>
            <option className="drop_value" value="four">4 Entradas</option>
        </select>
      
    )
}

export default Dropdown;