import {ReactChild, ReactFragment, ReactPortal, useEffect, useState} from "react";
import axios from "axios";

const cardMap = {
    "J" : "Jack",
    "K" : "King",
    "Q" : "Queen",
    "A" : "Ace"
}

export function Hand() {

    const [hand, setHand] = useState<any>(null)

    const handleDraw = () => {
        setHand(null)
        axios.get(`/api/cards`).then(response => {
            console.log(response.data)
            setHand(response.data.cards)
        })
    }

    return (
        <div>
            <button onClick={handleDraw}>Draw hand!</button>
            {hand &&
                hand.map((card: any, index: number)=>{
                    return (
                        // @ts-ignore
                        <p key={index}>Card {index + 1}: {card.card} of {Object.keys(cardMap).includes(card.suit) ? cardMap[card.suit] : card.suit }</p>
                    )
                })
            }
        </div>
    )
}