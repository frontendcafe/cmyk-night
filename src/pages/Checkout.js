import React from 'react';
import { Link } from 'react-router-dom';
import FechaHoraLugar from '../components/FechaHoraLugar';
import Avatar from '../components/Avatar';
import "./style/Checkout.css"
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";


const Checkout = ({src, eventName, location, day, numberDay,hour}) => {

  return <div className="check_container">

    <div className="check_header">
      <div className="left_side">
        <Avatar src={src} name={eventName}></Avatar>
        <Dropdown></Dropdown>
      </div>
      <div className="right_side">
        <FechaHoraLugar location={location} day={day} numberDay={numberDay} hour={hour} ></FechaHoraLugar>
      </div>
      
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
