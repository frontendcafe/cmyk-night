import React from 'react';
import { ReactComponent as Star } from "../components/icons/star.svg";
import "./style/StarList.css";

const StarList = () => {
    return (
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
    )
}

export default StarList
