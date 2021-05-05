import React, { useRef, useState, useEffect } from 'react'
import Card from "./Card";

import { ReactComponent as ArrowLeft } from "./icons/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "./icons/ArrowRight.svg";

import "./style/Carrousel.css";

const MOVE = 240;

function Carrousel({ labelText, cards }) {
    const CardContainer = useRef();

    const maxScrollLeft = CardContainer.current?.scrollWidth - CardContainer.current?.clientWidth;

    const [left, setLeft] = useState(0);

    const handleClickLeft = () => {
        if (left - MOVE < 0) {
            setLeft(0);
            return
        }
        setLeft(left - MOVE);
    }

    const handleClickRight = () => {
        if (left + MOVE > maxScrollLeft) {
            setLeft(maxScrollLeft);
            return
        }
        setLeft(left + MOVE);
    }

    useEffect(() => {
        CardContainer.current.scrollLeft = left;
    }, [left])

    return (
        <div className="carrouselContainer">
            <p className="topText">{labelText}</p>
            <div className="container">
                <button className="container__buttons" onClick={handleClickLeft}>
                    <ArrowLeft />
                </button>
                <div className="container__cards" ref={CardContainer}>
                    {cards.map(({ id, title, avatar }) => (
                        <Card id={id} key={id} name={title} imageSrc={avatar} />
                    )) }
                    </div>
                <button className="container__buttons" onClick={handleClickRight}>
                    <ArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Carrousel
