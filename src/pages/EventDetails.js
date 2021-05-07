import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MainCard from "../components/MainCard";
import DatesContainer from '../components/DatesContainer';
import "./style/EventDetails.css";
import imgp from "../components/img/imgPrueba.jpg"
import DescriptionCard from "../components/DescriptionCard";
import StarList from "../components/StarList"
import "../components/style/EventDetails.css"

export default function EventDetail() {
  const { eventId } = useParams()

  const mock = [{day: 24, enabled: true, hours: [{from: '2:00'}, {from: '3:00'}]},
              {day: 25, enabled: true, hours: [{from: '3:00'}, {from: '4:00'}]},
              {day: 26, enabled: true, hours: [{from: '3:00'}, {from: '5:00'}]}]

  const screenWidth = window.screen.width;

  const eventData = { src: "https://picsum.photos/200",
                      name:"Pappo Blues",
                      location:"FEC Stadium",
                      day:"Mon",
                      numberDay:"25",
                      hour:"7:00"
  }

  return <div className="ed_container">
    {screenWidth >= 720 ?
      <div className="maincard"> 
        <DescriptionCard title="SEREMOS PRIMAVERA" location="Eruca Sativa" description="Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum" banner_image={imgp} />
      </div>
      :
     
        <div className="maincard">
          <MainCard date={"1-2-3 Marzo"} title={"seremos primavera"} performer={"Eruca Sativa"} banner_image={"https://picsum.photos/200/120"}></MainCard>
          <div className="description">
            <StarList />
            <p className="description__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus ipsum, pellentesque quis massa a, imperdiet fringilla tortor. Nunc maximus ligula id est blandit, at blandit arcu cursus. In at metus sapien. Sed mauris lorem</p>
          </div>
        </div>
    
    }
  <p className="titulo_aux">FECHAS DISPONIBLES:</p>
    <div className= "dates_container">
      <DatesContainer  dates={mock}/>
    </div>
    <Link to={`/checkout/${eventId}?src=${eventData.src}&name=${eventData.name}&location=${eventData.location}&day=${eventData.day}&numberDay=${eventData.numberDay}&hour=${eventData.hour}`} className={'btn'}>Reservar</Link>

  </div>
}
