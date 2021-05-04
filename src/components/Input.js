import React from 'react';
import "./style/Input.css";

const Input = ({ name, password, newPassword }) => {
    let autoComplete;

    if (password) autoComplete = "password";
    if(newPassword) autoComplete = "new-password"
    return (
        <div className="InputContainer">
            <label className="InputContainer__Name">{name}
                <input className="InputContainer__input" autoComplete={autoComplete} type={password ? "password": "email"} placeholder={name} />
            </label>
        </div>
    )
}

export default Input
