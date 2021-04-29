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

  const mock = [{day: 1, enabled: true, hours: [{from: '2:00'}, {from: '3:00'}]},
              {day: 2, enabled: true, hours: [{from: '3:00'}, {from: '4:00'}]},
              {day: 3, enabled: true, hours: [{from: '3:00'}, {from: '5:00'}]}]

  const screenWidth = window.screen.width;
  return <div>
    {screenWidth >= 720 ?
      <DescriptionCard title="SEREMOS PRIMAVERA" location="Eruca Sativa" description="Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum" banner_image={imgp} />
      :
      <div className="ed_container">
        <div className="maincard">
          <MainCard date={"1-2-3 Marzo"} title={"seremos primavera"} performer={"Eruca Sativa"} banner_image={"https://picsum.photos/200/120"}></MainCard>
        </div>
        <div className="description">
          <StarList />
          <p className="description__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus ipsum, pellentesque quis massa a, imperdiet fringilla tortor. Nunc maximus ligula id est blandit, at blandit arcu cursus. In at metus sapien. Sed mauris lorem</p>
        </div>
      </div>
    }

    <div className= "dates_container">
      <DatesContainer  dates={mock}/>
    </div>
    <Link to={`/checkout/${eventId}`} className={'btn'}>Reservar</Link>
  </div>
}
