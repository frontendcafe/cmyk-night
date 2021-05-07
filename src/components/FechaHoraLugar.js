import React from "react";
import "./style/FechaHoraLugar.css";

//Solo maquetado del componente

function FechaHoraLugar({location,day,numberDay,hour}){
    return(
            <div className="fhl_container">
                <div className="l_container">
                    <p>{location} </p>
                </div>
                <div className= "fh_container">
                    <div className="fec">
                        <p id="m">{day}</p>
                        <p>{numberDay}</p>
                    </div>
                    <p id="h">{hour}</p>
                </div>
            </div>
    )
}

export default FechaHoraLugar;