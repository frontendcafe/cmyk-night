import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MainCard from "../components/MainCard";
import DatesContainer from '../components/DatesContainer';
import imgp from "../components/img/imgPrueba.jpg"
import DescriptionCard from "../components/DescriptionCard";
import StarList from "../components/StarList"
import "../components/style/EventDetails.css"

export default function EventDetail() {
  const { eventId } = useParams()
  const mock = [{ day: 1, enabled: true, hours: [{ from: '2:00' }, { from: '3:00' }] }]

  const screenWidth = window.screen.width;
  return <div>
    {screenWidth >= 720 ?
      <DescriptionCard title="SEREMOS PRIMAVERA" location="Eruca Sativa" description="Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum" banner_image={imgp} />
      :
      <>
        <MainCard date={"24 enero"} title={"seremos primavera"} performer={"Eruca Sativa"} banner_image={imgp} />
        <div className="description">
          <StarList />
          <p className="description__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus ipsum, pellentesque quis massa a, imperdiet fringilla tortor. Nunc maximus ligula id est blandit, at blandit arcu cursus. In at metus sapien. Sed mauris lorem</p>
        </div>
      </>
    }

    <DatesContainer dates={mock} />
    <Link to={`/checkout/${eventId}`}>Reservar</Link>
  </div>
}
