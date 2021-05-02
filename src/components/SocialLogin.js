import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as GoogleIcon } from "./icons/Google.svg";
import { ReactComponent as FacebookIcon } from "./icons/Facebook.svg";
import { ReactComponent as TwitterIcon } from "./icons/Twitter.svg";
import "./style/SocialLogin.css";

const SocialLogin = () => {
    return (
        <div className="SocialContainer">
            <p className="SocialContainer__title">Puedes ingresar con</p>
            <ul className="SocialContainer__list">
                <li>
                    <Link to="/">
                        <GoogleIcon className="SocialContainer__icon" />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FacebookIcon className="SocialContainer__icon" />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <TwitterIcon className="SocialContainer__icon" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SocialLogin;
