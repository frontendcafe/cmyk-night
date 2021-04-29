import React from 'react';
import StarList from "./StarList";
import "./style/DescriptionCard.css";

function DescriptionCard({ title, location, banner_image, description }) {
    return (
        <div className="descriptionCard">
            <img className="descriptionCard__img" src={banner_image} alt="imagen banner"/>
            <div className="descriptionCard__info">
                <h1 className="descriptionCard__title">{title}</h1>
                <h2 className="descriptionCard__location">{location}</h2>
                <StarList />
                <p className="descriptionCard__description">{description}</p>
            </div>
        </div>
    )
}

export default DescriptionCard
