import React from 'react';
import { useParams } from 'react-router-dom';
import FechaHoraLugar from '../components/FechaHoraLugar';

export default () => {
  const { eventId } = useParams()
  return <>
    <div>
    Checkout {eventId}
  </div>
  <FechaHoraLugar ></FechaHoraLugar>
  </>
}
