import React from "react";
import "./style/MainCard.css";

function MainCard({date, title, performer, banner_image}){
    return(
            <div className="contenedor_mc">
                <div className="contenedor_txt">
                    <p>{date}</p>
                    <h1>{title.toUpperCase()}</h1>
                    <p>{performer}</p>
                </div>
                <img className="contenedor_img" src={banner_image} alt="imagen banner"/>
            </div>
    )
}

export default MainCard;