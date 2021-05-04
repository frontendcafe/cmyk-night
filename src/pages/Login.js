import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import PartingLine from '../components/PartingLine';
import SocialLogin from "../components/SocialLogin";
import "./style/Login&SignUp.css";

const Login = () => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formRef.current)
    }
    return (
        <main className="desktopContainer">
            <div className="LoginCard">
                <h1 className="LoginCard__title">Iniciar Sesion</h1>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="Email" />
                    <Input name="Contraseña" password />
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
