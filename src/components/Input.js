import React from 'react';
import "./style/Input.css";

const Input = (props) => {
    return (
        <div className="InputContainer">
            <label className="InputContainer__Name">{props.name}
                <input className="InputContainer__input" placeholder={props.name} {...props} />
            </label>
        </div>
    )
}

export default Input
