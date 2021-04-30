import React from 'react';
import "./style/Avatar.css";

const Avatar = ({ src, name, location }) => {
    return (
        <div class="AvatarContainer">
            <div className="AvatarContainer__iconContainer">
                <img className="AvatarContainer__icon" src={src} alt={name} />
                <p className="AvatarContainer__name">{name}</p>
            </div>
            <p className="AvatarContainer__location">{location}</p>
        </div>
    )
}

export default Avatar;
