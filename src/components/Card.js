import React from 'react'
import { ReactComponent as Star } from "./icons/star.svg";
import "./style/Card.css"

function Card({ imageSrc, name, rate }) {
    return (
        <div>
            <div className="container__picture">
                <img className="container__image" src={imageSrc} alt={name} />
            </div>
            <p className="container__text">{name}</p>
            <ul className="container__stars">
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
