import React from 'react';
import { Link } from 'react-router-dom';
import FechaHoraLugar from '../components/FechaHoraLugar';
import Avatar from '../components/Avatar';
import "./style/Checkout.css"
import Input from "../components/Input";


const Checkout = () => {

  return <div className="check_container">

    <div className="check_header">
      <Avatar src="https://picsum.photos/200" name="SEREMOS PRIMAVERA"></Avatar>
      <FechaHoraLugar ></FechaHoraLugar>
    </div>

    <div className= "check_form">
      <p>Datos</p>
      <Input name="Nombre" />
      <Input name="Apellido" />
      <Input name="Email" />
    </div>

    <Link to={`/`} className={'btn'}>Reservar</Link>
 
  </div>
}

export default Checkout;
