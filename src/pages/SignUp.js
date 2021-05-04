import React, { useRef } from 'react';
import Input from "../components/Input";
import Button from "../components/Button";
import PartingLine from "../components/PartingLine";
import SocialLogin from "../components/SocialLogin";
import "./style/LoginAndSignUp.css";

const SignUp = () => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const EmailValue = formRef.current[0].value;
        const PasswordValue = formRef.current[1].value;
        const ConfirmPasswordValue = formRef.current[2].value;
        console.log({EmailValue});
        console.log({PasswordValue});
        console.log({ConfirmPasswordValue});
    }

    return (
        <main className="desktopContainer">
            <div className="LoginCard">
                <h1 className="LoginCard__title">Registro</h1>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="Email" />
                    <Input name="Contraseña" type="password" />
                    <Input name="Confirma Contraseña" type="password" />
                    <Button className="LoginCard__button"  onClick={handleSubmit}>Registrarse</Button>
                </form>
                <PartingLine />
                <SocialLogin />
            </div>
        </main>
    )
}

export default SignUp;
