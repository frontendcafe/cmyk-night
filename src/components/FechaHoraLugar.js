import React from "react";
import "./style/FechaHoraLugar.css";

//Solo maquetado del componente

function FechaHoraLugar(){
    return(
            <div className="fhl_container">
                <div className="l_container">
                    <p>FEC Stadium </p>
                </div>
                <div className= "fh_container">
                    <div className="fec">
                        <p id="m">Mon</p>
                        <p>24</p>
                    </div>
                    <p id="h"> 5:00 pm</p>
                </div>
            </div>
    )
}

export default FechaHoraLugar;