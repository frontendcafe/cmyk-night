import React from 'react';
import "./style/Input.css";

const Input = ({ name, password }) => {
    return (
        <div className="InputContainer">
            <label className="InputContainer__Name">{name}
            <input className="InputContainer__input" type={password ? "password": "email"} placeholder={name} />
            </label>
        </div>
    )
}

export default Input
