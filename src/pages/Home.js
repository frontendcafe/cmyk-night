import React, { useState, useEffect } from 'react'
import MainCard from "../components/MainCard";
import Tabs from "../components/Tabs";
import Carrousel from "../components/Carrousel";
import { getEvents } from '../services/eventService';

import imgp from "../components/img/imgPrueba.jpg"

const InitialValue = {
    labelText: "Loading",
    cards: [
        {
            name: "Loading",
            imageSrc: "https://picsum.photos/200/300"
        }
    ]
}

const InitialActiveTab = "Online";

const Home = () => {
    const [activeTab, setActiveTab] = useState(InitialActiveTab);
    const [activeData, setActiveData] = useState(InitialValue);
    const [loading, setLoading] = useState(true)
    const type = 'Online'

    const handleActiveTab = (tab) => setActiveTab(tab);

    //This data would come from the API
    const Data = [
        {
            name: "Online",
            carouselData: {
                labelText: "Proximos",
                cards: [{
                    id: 1,
                    name: "The dance Belly",
                    imageSrc: "https://picsum.photos/200/300"
                }]
            }
        },
        {
            name: "Presenciales",
            carouselData: {
                labelText: "Musica",
                cards: [{
                    id: 2,
                    name: "Lorem imsum lorem ipsum",
                    imageSrc: "https://picsum.photos/300/500"
                }]
            }
        }
    ]

    const tabs = Data.map((value) => value.name);

    useEffect(() => {
        const currentData = Data.filter((value) => value.name === activeTab)
        const carrouselData = currentData.map(value => value.carouselData);
        // setActiveData(carrouselData[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab])

    useEffect(() => {
      getEvents()
        .then(data => {
          setActiveData(data.filter(event=> event.type === type))
          setLoading(false)
        })
    }, [])

    return (
        <>
            <Tabs activeTab={activeTab} tabs={tabs} setActiveTab={handleActiveTab} />
            <MainCard date={"24 enero"} title={"seremos primavera"} performer={"Eruca Sativa"} banner_image={imgp}></MainCard>
            {loading ? <div>Cargando...</div> : <Carrousel labelText={type} cards={activeData} />  }
        </>
    )
}

export default Home
