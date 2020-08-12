import React, { useState, useEffect } from 'react';
import './MemoryMatchCards.scss';
import MemoryMatchCard from '../MemoryMatchCard';

export default function MemoryMatchCards() {

    const cardsData = [
        { id: 1, url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a57d7be-b443-4e47-9fed-885821efa9c2/d3cxmmg-ff4ca333-94df-42dc-b1bd-c2c644eada4b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOWE1N2Q3YmUtYjQ0My00ZTQ3LTlmZWQtODg1ODIxZWZhOWMyXC9kM2N4bW1nLWZmNGNhMzMzLTk0ZGYtNDJkYy1iMWJkLWMyYzY0NGVhZGE0Yi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.sDPKfpg4_QtpREAZoZVmwldIZ8sGKiSdmWkG46VJi_4', title: 'Bulbasaur', flipped: false },
        { id: 2, url: 'https://cdn140.picsart.com/280351317015211.png?type=webp&to=min&r=240', title: 'Squirtle', flipped: false },
        { id: 3, url: 'https://i.pinimg.com/originals/1c/89/f6/1c89f6668af718874d2cbbe6ff770efd.jpg', title: 'Charmander', flipped: false },
        { id: 4, url: 'https://img.memecdn.com/kawaii-pikachu_o_3353575.jpg', title: 'Pikachu', flipped: false },
        { id: 5, url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a57d7be-b443-4e47-9fed-885821efa9c2/d3cxmmg-ff4ca333-94df-42dc-b1bd-c2c644eada4b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOWE1N2Q3YmUtYjQ0My00ZTQ3LTlmZWQtODg1ODIxZWZhOWMyXC9kM2N4bW1nLWZmNGNhMzMzLTk0ZGYtNDJkYy1iMWJkLWMyYzY0NGVhZGE0Yi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.sDPKfpg4_QtpREAZoZVmwldIZ8sGKiSdmWkG46VJi_4', title: 'Bulbasaur', flipped: false },
        { id: 6, url: 'https://cdn140.picsart.com/280351317015211.png?type=webp&to=min&r=240', title: 'Squirtle', flipped: false },
        { id: 7, url: 'https://i.pinimg.com/originals/1c/89/f6/1c89f6668af718874d2cbbe6ff770efd.jpg', title: 'Charmander', flipped: false },
        { id: 8, url: 'https://img.memecdn.com/kawaii-pikachu_o_3353575.jpg', title: 'Pikachu', flipped: false },
        { id: 9, url: 'https://i.pinimg.com/originals/98/2a/b6/982ab66f09a7cc30332ebd73cb4ab4fc.png', title: 'Meowth', flipped: false },
        { id: 10, url: 'https://i.pinimg.com/originals/c5/0e/a6/c50ea636e1b9712025c0a2564d0690d2.png', title: 'Psyduck', flipped: false },
        { id: 11, url: 'https://i.pinimg.com/originals/98/2a/b6/982ab66f09a7cc30332ebd73cb4ab4fc.png', title: 'Meowth', flipped: false },
        { id: 12, url: 'https://i.pinimg.com/originals/c5/0e/a6/c50ea636e1b9712025c0a2564d0690d2.png', title: 'Psyduck', flipped: false }

    ];

    // Deck state
    const [cards, setCards] = useState([]);
    // Number of matches state
    const [matches, setMatches] = useState(0);
    // First flipped card state
    const [flippedCards, setFlippedCards] = useState([]);
    // Disable click state
    const [disableClick, setDisableClick] = useState(false);

    useEffect(() => {
        shuffleDeck(cardsData);
    }, []);

    // Shuffle deck
    // Get length of deck
    // Create new array
    // Randomize num and add it to new array and subtract from original array then repeat until original array is empty
    function shuffleDeck(cards) {
        let origDeck = [...cards];
        const shuffledDeck = [];
        for (let i = cards.length - 1; i >= 0; i--) {
            let randomIndex = Math.floor(Math.random() * origDeck.length);
            let card = origDeck.splice(randomIndex, 1);
            shuffledDeck.push(...card);
        }
        setCards(shuffledDeck);
    };

    function flipCard(id) {
        const tempDeck = [...cards];
        const tempFlippedCards = [...flippedCards];
        const card = tempDeck.find(card => card.id === id);
        tempFlippedCards.push(card);
        if (tempFlippedCards.length === 1 && card.flipped === false && !disableClick) {
            card.flipped = true;
            setFlippedCards(tempFlippedCards);
            setCards(tempDeck);
        } else if (tempFlippedCards.length === 2 && card.flipped === false && !disableClick) {
            card.flipped = true;
            setCards(tempDeck);
            setDisableClick(true);
            // Check for match
            setTimeout(() => {
                if (tempFlippedCards[0].title === tempFlippedCards[1].title) {
                    setMatches(matches + 1);
                    setCards(tempDeck);
                } else {
                    const card1 = tempDeck.find(card => card.id === tempFlippedCards[0].id);
                    card1.flipped = false;
                    card.flipped = false;
                    setCards(tempDeck);
                }
                setFlippedCards([]);
                setDisableClick(false);
            }, 1000);
        }
    };

    function restartGame() {
        const tempCards = [...cards];
        tempCards.map(card => card.flipped = false);
        setMatches(0);
        setFlippedCards([]);
        setTimeout(() => {
            shuffleDeck(tempCards);
        }, 1000);
    };

    return (
        <>
            <div className='cards'>
                {
                    cards.map(card => {
                        const { id, url, title, flipped } = card;
                        return (
                            <MemoryMatchCard
                                key={id}
                                id={id}
                                url={url}
                                title={title}
                                flipped={flipped}
                                handleFlip={flipCard}
                            />
                        )
                    })
                }

            </div>
            {
                matches === cards.length / 2 ? <button onClick={() => restartGame()}>play again</button> : ''
            }
        </>
    )
}
