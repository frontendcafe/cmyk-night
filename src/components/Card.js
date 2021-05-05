import React from 'react'
import { Link } from 'react-router-dom';
import StarList from "./StarList";
import "./style/Card.css"

function Card({ id, imageSrc, name, rate }) {
    return (
        <div>
            <div className="container__picture">
              <Link to={`/events/${id}`}>
                <img className="container__image" src={imageSrc} alt={name} />
              </Link>
            </div>
            <p className="container__text">{name}</p>
            <StarList />
        </div>
    )
}

export default Card
