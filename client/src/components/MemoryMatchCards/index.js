import React, { useState, useEffect } from 'react';
import './MemoryMatchCards.scss';
import MemoryMatchCard from '../MemoryMatchCard';

export default function MemoryMatchCards() {

    const cardsData = [
        { id: 1, url: 'https://usercontent2.hubstatic.com/13805615_f520.jpg', title: 'Bulbasaur', flipped: false },
        { id: 2, url: 'https://easydrawingart.com/wp-content/uploads/2019/08/How-to-draw-Squirtle.jpg', title: 'Squirtle', flipped: false },
        { id: 3, url: 'https://i.pinimg.com/originals/1c/89/f6/1c89f6668af718874d2cbbe6ff770efd.jpg', title: 'Charmander', flipped: false },
        { id: 4, url: 'https://img.memecdn.com/kawaii-pikachu_o_3353575.jpg', title: 'Pikachu', flipped: false },
        { id: 5, url: 'https://usercontent2.hubstatic.com/13805615_f520.jpg', title: 'Bulbasaur', flipped: false },
        { id: 6, url: 'https://easydrawingart.com/wp-content/uploads/2019/08/How-to-draw-Squirtle.jpg', title: 'Squirtle', flipped: false },
        { id: 7, url: 'https://i.pinimg.com/originals/1c/89/f6/1c89f6668af718874d2cbbe6ff770efd.jpg', title: 'Charmander', flipped: false },
        { id: 8, url: 'https://img.memecdn.com/kawaii-pikachu_o_3353575.jpg', title: 'Pikachu', flipped: false }
    ];

    const [cards, setCards] = useState({
        deck: [...cardsData],
        matched: 0,
        flipped: 0,
        flippedCards: []
    });

    function flipCard(id) {
        const tempDeck = [...cards.deck];
        const card = tempDeck.find(card => card.id === id);
        // const cardIndex = tempDeck.findIndex(card => card.id === id);
        // tempDeck[cardIndex].flipped = true;
        card.flipped = true;
        console.log(tempDeck);
        setCards({
            ...cards,
            deck: tempDeck,
            flipped: cards.flipped + 1,
            flippedCards: [...cards.flippedCards, card]
        })
    }

    function checkMatch() {
        const tempDeck = [...cards.deck];
        const card1 = tempDeck.find(card => cards.flippedCards[0].id === card.id);
        const card2 = tempDeck.find(card => cards.flippedCards[1].id === card.id);
        if (cards.flippedCards[0].title === cards.flippedCards[1].title) {
            setCards({
                deck: cards.deck,
                flipped: 0,
                flippedCards: [],
                matched: cards.matched + 1
            })
        } else {
            card1.flipped = false;
            card2.flipped = false;
            setCards({
                ...cards,
                deck: tempDeck,
                flipped: 0,
                flippedCards: []
            })
        }
    }

    function handleFlip(id) {
        if (cards.flippedCards.length < 2) {
            flipCard(id);
        } else {
            checkMatch();
        }
    };

    return (
        <div className='cards'>
            {
                cards.deck.map(card => {
                    const { id, url, title, flipped } = card;
                    return (
                        <MemoryMatchCard
                            key={id}
                            id={id}
                            url={url}
                            title={title}
                            flipped={flipped}
                            handleFlip={handleFlip}
                        />
                    )
                })
            }
        </div>
    )
}
