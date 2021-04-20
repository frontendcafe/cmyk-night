import React, { useRef, useState, useEffect } from 'react'
import Card from "./Card";

import { ReactComponent as ArrowLeft } from "./icons/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "./icons/ArrowRight.svg";

import "./style/Carrousel.css";

function Carrousel({ LabelText, Cards }) {
    const CardContainer = useRef();

    const MOVE = 240;
    const maxScrollLeft = CardContainer.current?.scrollWidth - CardContainer.current?.clientWidth;

    const [Left, setLeft] = useState(0);

    const handleClickLeft = () => {
        if (Left - MOVE < 0) {
            setLeft(0);
            return
        }
        setLeft(Left - MOVE);
    }

    const handleClickRight = () => {
        if (Left + MOVE > maxScrollLeft) {
            setLeft(maxScrollLeft);
            return
        }
        setLeft(Left + MOVE);
    }

    useEffect(() => {
        CardContainer.current.scrollLeft = Left;
    }, [Left])

    return (
        <>
                    <p className="topText">{LabelText}</p>
            <div className="container">
                <button className="container__buttons" onClick={handleClickLeft}>
                    <ArrowLeft />
                </button>
                <div className="container__cards" ref={CardContainer}>
                    {Cards.map(({ name, imageSrc }) => (
                        <Card name={name} imageSrc={imageSrc} />
                    )) }
                    </div>
                <button className="container__buttons" onClick={handleClickRight}>
                    <ArrowRight />
                </button>
            </div>
        </>
    )
}

export default Carrousel
