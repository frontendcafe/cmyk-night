import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import PartingLine from '../components/PartingLine';
import SocialLogin from "../components/SocialLogin";
import "./style/LoginAndSignUp.css";

const Login = () => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const EmailValue = formRef.current[0].value;
        const PasswordValue = formRef.current[1].value;
        console.log({EmailValue});
        console.log({PasswordValue});
    }
    return (
        <main className="desktopContainer">
            <div className="LoginCard">
                <h1 className="LoginCard__title">Iniciar Sesion</h1>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="Email" />
                    <Input name="Contraseña" type="password" />
                    <Link className="LoginCard__forgotPassword" to="/">¿Olvidate tu contraseña?</Link>
                    <Button className="LoginCard__button"  onClick={handleSubmit}>Iniciar sesion</Button>
                </form>
                <PartingLine />
                <SocialLogin />
                <div className="LoginCard__ContainerNoAcount">
                    <Link className="LoginCard__NoAcount" to="/signup">¿Aún no tienes cuenta? Registrate</Link>
                </div>
            </div>
        </main>
    )
}

export default Login
