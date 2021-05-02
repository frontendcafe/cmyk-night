import React from "react";
import "./style/PersonCard.css";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function PersonCard({photo,name,gitlink,lilink}){
    return(
            <div className="pc_container">
               <img className="circle" src={photo}/>
               <p className="name">{name.toUpperCase()}</p>
               <div className="contact">
                    <a href={gitlink} className="icon">
                        <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
                    </a>
                    <a href={lilink} className="icon">
                        <FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon>
                    </a>
               </div>     
            </div>
    )
}

export default PersonCard;