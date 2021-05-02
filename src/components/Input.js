import React from 'react';
import "./style/Input.css";

const Input = ({ name }) => {
    return (
        <div className="InputContainer">
            <label className="InputContainer__Name">{name}
            <input className="InputContainer__input" placeholder={name} />
            </label>
        </div>
    )
}

export default Input
