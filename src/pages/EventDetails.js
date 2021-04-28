import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MainCard from "../components/MainCard";
import DatesContainer from '../components/DatesContainer';


export default () => {
  const { eventId } = useParams()
  const mock = [{day: 1, enabled: true, hours: [{from: '2:00'}, {from: '3:00'}]}]
  return <div>
     <MainCard />
    event: {eventId}
    <DatesContainer dates={mock}/>
    <Link to={`/checkout/${eventId}`}>Reservar</Link>
  </div>
}
