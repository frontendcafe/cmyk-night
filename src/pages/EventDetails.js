import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MainCard from "../components/MainCard";
import DatesContainer from '../components/DatesContainer';
import "./style/EventDetails.css";


export default () => {
  const { eventId } = useParams()
  const mock = [{day: 1, enabled: true, hours: [{from: '2:00'}, {from: '3:00'}]},
                {day: 2, enabled: true, hours: [{from: '3:00'}, {from: '4:00'}]},
                {day: 3, enabled: true, hours: [{from: '3:00'}, {from: '5:00'}]}]
  
  return <div className="ed_container">
            <div className="maincard">
                <MainCard date={"1-2-3 Marzo"} title={"seremos primavera"} performer={"Eruca Sativa"} banner_image={"https://picsum.photos/200/120"}></MainCard>
            </div>

            <div className= "dates_container">
            
                <DatesContainer  dates={mock}/>
            </div>
            event: {eventId}
            <Link to={`/checkout/${eventId}`} className="btn">Reservar</Link>
        </div>
}
