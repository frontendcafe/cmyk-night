import React from 'react'
import { ReactComponent as Star } from "./icons/star.svg";
import "./style/Card.css"

function Card({ imageSrc, name, rate }) {
    return (
        <div>
            <div className="container_picture">
                <img className="container_image" src={imageSrc} alt={name} />
            </div>
            <p className="container_text">{name}</p>
            <ul className="container_stars">
                <li>
                    <Star />
                </li>
                <li>
                    <Star />
                </li>
                <li>
                    <Star />
                </li>
                <li>
                    <Star />
                </li>
            </ul>
        </div>
    )
}

export default Card
