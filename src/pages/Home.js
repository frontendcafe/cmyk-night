import React, { useState, useEffect } from 'react'
import MainCard from "../components/MainCard";
import Tabs from "../components/Tabs";
import Carrousel from "../components/Carrousel";

import imgp from "../components/img/imgPrueba.jpg";
import Avatar from "../components/Avatar";


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
        setActiveData(carrouselData[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab])

    return (
        <>
            <Avatar location="no tengo que exitir" name="florida" src="https://picsum.photos/50/50" />
            <Tabs activeTab={activeTab} tabs={tabs} setActiveTab={handleActiveTab} />
            <MainCard date={"24 enero"} title={"seremos primavera"} performer={"Eruca Sativa"} banner_image={imgp}></MainCard>
            <Carrousel labelText={activeData.labelText} cards={activeData.cards}  />
        </>
    )
}

export default Home
