import React, { useState, useEffect } from 'react';
import { useSpring, animated as a } from 'react-spring';
import './MemoryMatchCards.scss';
import MemoryMatchCard from '../MemoryMatchCard';

export default function MemoryMatchCards() {

    const cardsData = [
        { id: 1, url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a57d7be-b443-4e47-9fed-885821efa9c2/d3cxmmg-ff4ca333-94df-42dc-b1bd-c2c644eada4b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOWE1N2Q3YmUtYjQ0My00ZTQ3LTlmZWQtODg1ODIxZWZhOWMyXC9kM2N4bW1nLWZmNGNhMzMzLTk0ZGYtNDJkYy1iMWJkLWMyYzY0NGVhZGE0Yi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.sDPKfpg4_QtpREAZoZVmwldIZ8sGKiSdmWkG46VJi_4', title: 'Bulbasaur', flipped: false, matched: false },
        { id: 2, url: 'https://cdn140.picsart.com/280351317015211.png?type=webp&to=min&r=240', title: 'Squirtle', flipped: false, matched: false },
        { id: 3, url: 'https://i.pinimg.com/originals/1c/89/f6/1c89f6668af718874d2cbbe6ff770efd.jpg', title: 'Charmander', flipped: false, matched: false },
        { id: 4, url: 'https://img.memecdn.com/kawaii-pikachu_o_3353575.jpg', title: 'Pikachu', flipped: false, matched: false },
        { id: 5, url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a57d7be-b443-4e47-9fed-885821efa9c2/d3cxmmg-ff4ca333-94df-42dc-b1bd-c2c644eada4b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOWE1N2Q3YmUtYjQ0My00ZTQ3LTlmZWQtODg1ODIxZWZhOWMyXC9kM2N4bW1nLWZmNGNhMzMzLTk0ZGYtNDJkYy1iMWJkLWMyYzY0NGVhZGE0Yi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.sDPKfpg4_QtpREAZoZVmwldIZ8sGKiSdmWkG46VJi_4', title: 'Bulbasaur', flipped: false, matched: false },
        { id: 6, url: 'https://cdn140.picsart.com/280351317015211.png?type=webp&to=min&r=240', title: 'Squirtle', flipped: false, matched: false },
        { id: 7, url: 'https://i.pinimg.com/originals/1c/89/f6/1c89f6668af718874d2cbbe6ff770efd.jpg', title: 'Charmander', flipped: false, matched: false },
        { id: 8, url: 'https://img.memecdn.com/kawaii-pikachu_o_3353575.jpg', title: 'Pikachu', flipped: false, matched: false },
        { id: 9, url: 'https://i.pinimg.com/originals/98/2a/b6/982ab66f09a7cc30332ebd73cb4ab4fc.png', title: 'Meowth', flipped: false, matched: false },
        { id: 10, url: 'https://i.pinimg.com/originals/c5/0e/a6/c50ea636e1b9712025c0a2564d0690d2.png', title: 'Psyduck', flipped: false, matched: false },
        { id: 11, url: 'https://i.pinimg.com/originals/98/2a/b6/982ab66f09a7cc30332ebd73cb4ab4fc.png', title: 'Meowth', flipped: false, matched: false },
        { id: 12, url: 'https://i.pinimg.com/originals/c5/0e/a6/c50ea636e1b9712025c0a2564d0690d2.png', title: 'Psyduck', flipped: false, matched: false }

    ];

    // Deck state
    const [cards, setCards] = useState([]);
    // Number of matches state
    const [matches, setMatches] = useState(0);
    // First flipped card state
    const [flippedCards, setFlippedCards] = useState([]);
    // Disable click state
    const [disableClick, setDisableClick] = useState(false);
    // Shuffling state
    const [isShuffling, setIsShuffling] = useState(false);

    useEffect(() => {
        shuffleDeck(cardsData);
    }, []);

    // Animation for flipping cards
    const cardAnim = useSpring({
        to: [{ opacity: 0.5, transform: 'perspective(600px) rotateY(90deg)' }, { opacity: 1, transform: 'perspective(600px) rotateY(180deg)' }],
        from: { opacity: 1, transform: 'perspective(600px) rotateY(0deg)' },
        config: { duration: 250 }
    });

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

    // Handler for flipping a card
    function flipCard(id) {
        const tempDeck = [...cards];
        const tempFlippedCards = [...flippedCards];
        const card = tempDeck.find(card => card.id === id);
        tempFlippedCards.push(card);
        // If only 1 card is flipped
        if (tempFlippedCards.length === 1 && card.flipped === false && disableClick === false) {
            card.flipped = true;
            setFlippedCards(tempFlippedCards);
            setCards(tempDeck);
            // If two cards are flipped
        } else if (tempFlippedCards.length === 2 && card.flipped === false && disableClick === false) {
            setDisableClick(true);
            card.flipped = true;
            setCards(tempDeck);
            // Check for match
            if (tempFlippedCards[0].title === tempFlippedCards[1].title) {
                const card1 = tempDeck.find(card => card.id === tempFlippedCards[0].id);
                card1.matched = true;
                card.matched = true;
                setCards(tempDeck);
                setMatches(matches + 1);
                setFlippedCards([]);
                setDisableClick(false);
            } else {
                setTimeout(() => {
                    const card1 = tempDeck.find(card => card.id === tempFlippedCards[0].id);
                    card1.flipped = false;
                    card.flipped = false;
                    setCards(tempDeck);
                    setFlippedCards([]);
                    setTimeout(() => {
                        setDisableClick(false);
                    }, 500)
                }, 1000);
            }
        }
    };

    function restartGame() {
        setIsShuffling(true);
        const tempCards = [...cardsData];
        setMatches(0);
        setFlippedCards([]);
        shuffleDeck(tempCards);
        setTimeout(() => {
            setIsShuffling(false);
        }, 2000);
    };

    return (
        <>
            {
                isShuffling ?
                    <p className='shuffling-text'>Shuffling deck...</p>
                    : (
                        <div className='cards'>
                            {
                                cards.map(card => {
                                    const { id, url, title, flipped, matched } = card;
                                    return (
                                        <MemoryMatchCard
                                            key={id}
                                            id={id}
                                            url={url}
                                            title={title}
                                            flipped={flipped}
                                            matched={matched}
                                            handleFlip={flipCard}
                                            cardAnim={cardAnim}
                                        />
                                    )
                                })
                            }

                        </div>
                    )
            }
            {
                matches === cards.length / 2 ? <button onClick={() => restartGame()}>play again</button> : ''
            }
        </>
    )
}
