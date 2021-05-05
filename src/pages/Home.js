import React, { useState, useEffect } from 'react'
import MainCard from "../components/MainCard";
import Tabs from "../components/Tabs";
import Carrousel from "../components/Carrousel";
import { getEvents } from '../services/eventService';
import Loading from '../components/Loading';
import "./style/Home.css";


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

const Home = () => {
    const tabs = ['Online', 'Offline'];
    const [activeTab, setActiveTab] = useState('Online');
    const [activeData, setActiveData] = useState(InitialValue);
    const [loading, setLoading] = useState(true)

    const handleActiveTab = (tab) => setActiveTab(tab);

    useEffect(() => {
      getEvents()
        .then(data => {
          setActiveData(data)
          setLoading(false)
        })
    }, [])

    if(loading) return <Loading/>

    return (
        <div className= "home_container">
            <Tabs activeTab={activeTab} tabs={tabs} setActiveTab={handleActiveTab} />
            <MainCard date={"24 enero"} title={"seremos primavera"} performer={"Eruca Sativa"} banner_image={imgp}></MainCard>
            <Carrousel labelText={activeTab} cards={activeData.filter(event=> event.type === activeTab)} />
        </div>
    )
}

export default Home
