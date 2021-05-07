import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import FechaHoraLugar from '../components/FechaHoraLugar';
import Avatar from '../components/Avatar';
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";

import "./style/Checkout.css"


const Checkout = () => {

  const {search} = useLocation()
  const searchParams = new URLSearchParams(search)
  const src = searchParams.get('src')
  const name = searchParams.get('name')
  const location = searchParams.get('location')
  const day = searchParams.get('day')
  const numberDay = searchParams.get('numberDay')
  const hour = searchParams.get('hour')

  return <div className="check_container">

    <div className="check_header">
      <div className="left_side">
        <Avatar src={src} name={name.toUpperCase()}></Avatar>
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
