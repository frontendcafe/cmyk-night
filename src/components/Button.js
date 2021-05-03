import React from 'react'
import "./style/Button.css";

const Button = ({ onClick, children, className }) => {
    return (
        <input type="submit" value={children} className={`button ${className}`} onClick={onClick} />
    )
}

export default Button
