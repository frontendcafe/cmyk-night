import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MainCard from "../components/MainCard";
import DatesContainer from '../components/DatesContainer';
import imgp from "../components/img/imgPrueba.jpg"
import "../components/style/EventDetails.css"
import { ReactComponent as Star } from "../components/icons/star.svg";

export default function EventDetail() {
  const { eventId } = useParams()
  const mock = [{ day: 1, enabled: true, hours: [{ from: '2:00' }, { from: '3:00' }] }]
  return <div>
    <MainCard date={"24 enero"} title={"seremos primavera"} performer={"Eruca Sativa"} banner_image={imgp} />
    <div className="description">
      <ul className="container__stars">
        <li>
          <Star />
        </li>
        <li>
          <Star />
        </li>
        <li>
          <Star />
        </li>
        <li>
          <Star />
        </li>
      </ul>
      <p className="description__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus ipsum, pellentesque quis massa a, imperdiet fringilla tortor. Nunc maximus ligula id est blandit, at blandit arcu cursus. In at metus sapien. Sed mauris lorem</p>
    </div>
    <DatesContainer dates={mock} />
    <Link to={`/checkout/${eventId}`}>Reservar</Link>
  </div>
}
