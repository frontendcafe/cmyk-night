import React from "react";
import "./style/MainCard.css";
import imgp from './img/imgPrueba.jpg';

function MainCard(){
    return(
            <div className="contenedor_mc">
                <div className="contenedor_txt">
                    <p>23 -24 -25 de Mayo</p>
                    <h1>SEREMOS PRIMAVERA</h1>
                    <p>Eruca Sativa</p>
                </div>
                <img className="contenedor_img" src={imgp}/>
            </div>
    )
}

export default MainCard;