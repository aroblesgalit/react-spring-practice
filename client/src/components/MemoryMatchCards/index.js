import React from 'react';
import './MemoryMatchCards.scss';
import MemoryMatchCard from '../MemoryMatchCard';

export default function MemoryMatchCards() {

    const cards = [
        { id: 1, url: 'https://usercontent2.hubstatic.com/13805615_f520.jpg', title: 'Bulbasaur' },
        { id: 2, url: 'https://easydrawingart.com/wp-content/uploads/2019/08/How-to-draw-Squirtle.jpg', title: 'Squirtle' },
        { id: 3, url: 'https://i.pinimg.com/originals/1c/89/f6/1c89f6668af718874d2cbbe6ff770efd.jpg', title: 'Charmander' },
        { id: 4, url: 'https://img.memecdn.com/kawaii-pikachu_o_3353575.jpg', title: 'Pikachu' }
    ]

    return (
        <div className="cards">
            {
                cards.map(card => {
                    const { id, url, title } = card;
                    return <MemoryMatchCard key={id} id={id} url={url} title={title} />
                })
            }
        </div>
    )
}
