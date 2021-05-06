import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MainCard from "../components/MainCard";
import DatesContainer from '../components/DatesContainer';
import "./style/EventDetails.css";
import DescriptionCard from "../components/DescriptionCard";
import StarList from "../components/StarList"
import "../components/style/EventDetails.css"
import  {getEventsDetails } from "../services/eventService"
import Loading from '../components/Loading';
import dayjs from 'dayjs'

export default function EventDetail() {
  const { eventId } = useParams()
  const [eventData, setEventData] = React.useState()
  const [loading,setLoading] = React.useState(true);



  React.useEffect(() => {
    getEventsDetails(eventId)
      .then(data =>{
        setEventData(data)
        setLoading(false)
      }
      )
  }, [eventId])


  const mock = [
    {
      day: 24, 
      enabled: true, 
      hours: [{ from: "16:00", enabled:  true  },
              { from: "18:00", enabled:  false  }
            ]
    },
    {
      day: 25, 
      enabled: false, 
      hours: [{ from: "16:00", enabled:  true  },
              { from: "18:00", enabled:  false  }
            ]
    },
    {
      day: 27, 
      enabled: true, 
      hours: [{ from: "16:00", enabled:  true  },
              { from: "18:00", enabled:  false  }
            ]
    },
    
  ]




  const screenWidth = window.screen.width;
  console.log(screenWidth)
  if(loading){
    return <Loading/>
  }
  return <div className="ed_container">
    {screenWidth >= 720 ?
      <div className="maincard"> 
        <DescriptionCard title={eventData.title} location={eventData.locationId} description={eventData.description} banner_image={eventData.avatar} />
      </div>
      :
     
        <div className="maincard">
          <MainCard 
            date={dayjs(eventData.socialEventSchedule[0].schedule.datetime).format('DD-MMM')} 
            title={eventData.title} 
            performer={eventData.performer.firstName+" "+ eventData.performer.lastName} 
            banner_image={eventData.avatar}>
          </MainCard>
          <div className="description">
            <StarList />
            <p className="description__text">{eventData.description}</p>
          </div>
        </div>
    
    }

    <div className= "dates_container">
      <DatesContainer  dates={mock} location={eventData.title}/>
    </div>
    <Link to={`/checkout/${eventId}`} className={'btn'}>Reservar</Link>

  </div>
}
