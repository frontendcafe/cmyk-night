import React from 'react';
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
                    <button className="SocialContainer__button">
                        <GoogleIcon className="SocialContainer__icon" />
                    </button>
                </li>
                <li>
                    <button className="SocialContainer__button">
                        <FacebookIcon className="SocialContainer__icon" />
                    </button>
                </li>
                <li>
                    <button className="SocialContainer__button">
                        <TwitterIcon className="SocialContainer__icon" />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SocialLogin;
