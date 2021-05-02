import React from 'react';
import "./style/Avatar.css";

const Avatar = ({ src, name }) => {
    return (
        <div class="AvatarContainer">
            <img className="AvatarContainer__icon" src={src} alt={name} />
            <p className="AvatarContainer__name">{name}</p>
        </div>
    )
}

export default Avatar;
